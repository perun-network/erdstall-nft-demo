// SPDX-License-Identifier: Apache-2.0

import Url from "./url";
import Subscribe from "../api/subscribe";
import ERDSTALLOBJECT from "../api/object";
import Call from "../api/call";
import { TypedJSON } from "typedjson";

type ConnectionEvent = "config" | "receipt" | "proof" | "error";

const UninitialisedConn = new Error("uninitialised connection");

// Connection is the connection a client has to the Operator of Erdstall.
export default class Connection {
  public ws?: WebSocket;

  private url: string;
  private handlers: Map<ConnectionEvent, (obj: ERDSTALLOBJECT) => void>;
  private calls: Map<string, [(val: any) => void, (val: any) => void]>;

  constructor(url: Url) {
    this.url = url.toString();
    this.handlers = new Map<ConnectionEvent, (obj: ERDSTALLOBJECT) => void>();
    this.calls = new Map<string, [(val: any) => void, (val: any) => void]>();
  }

  public connect() {
    this.ws = new WebSocket(this.url);
    this.ws.onmessage = this.onMessage;
    this.ws.onerror = this.onError;
  }

  public async subscribe(who: string): Promise<void> {
    const sub = new Subscribe(who);
    return this.sendCall(sub);
  }

  private async sendCall(data: ERDSTALLOBJECT): Promise<void> {
    if (!this.ws) {
      throw UninitialisedConn;
    }

    const id = this.newID().toString();

    const p = new Promise<void>((resolve, reject) => {
      this.calls.set(id, [resolve, reject]);
    });

    const msg = new Call(id, data);
    const wiredata = TypedJSON.stringify(msg, Call);
    this.ws!.send(wiredata);

    return p;
  }

  public on(eventType: ConnectionEvent, cb: (obj: ERDSTALLOBJECT) => void) {
    this.handlers.set(eventType, cb);
  }

  private newID(): number {
    return Math.round(Math.random() * Number.MAX_VALUE);
  }

  private onMessage(ev: MessageEvent) {
    const om = TypedJSON.parse(ev.data, Call);
    if (!om) {
      return this.handleUnknownMessage(ev.data);
    }

    if (om.id) {
      const [resolve, reject] = this.calls.get(om.id)!;
      this.calls.delete(om.id);
      if (om.error) {
        reject(om.error);
        return this.callEvent("error", om.error);
      } else {
        resolve(om.data);
      }
    }

    const obj = om.data!;
    switch (obj.objectTypeName()) {
      case "ClientConfig":
        return this.callEvent("config", obj);
      case "TxReceipt":
        return this.callEvent("receipt", obj);
      case "BalanceProof":
        return this.callEvent("proof", obj);
      default:
        console.error("received unsupported Erdstall event: ", om);
    }
  }

  private callEvent(ev: ConnectionEvent, payload: any) {
    const cb = this.handlers.get(ev);
    if (!cb) {
      return;
    }

    return cb(payload);
  }

  private handleUnknownMessage(data: string) {
    console.error(data);
  }

  private onError(ev: Event) {
    console.error("connection error: ", ev);

    if (this.ws) {
      this.ws.close();
    }
    this.ws = undefined;
    setTimeout(this.connect, 1000);
  }
}
