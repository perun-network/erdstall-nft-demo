// SPDX-License-Identifier: Apache-2.0

export type Scheme = "http" | "https" | "ws" | "wss";

export default class Url {
  port: number;
  host: string;
  scheme: Scheme;
  path: string;
  constructor(port: number, host: string, scheme: Scheme, path: string) {
    this.port = port;
    this.host = host;
    this.scheme = scheme;
    this.path = path;
  }
  toString(): string {
    return [
      this.scheme,
      "://",
      this.host,
      ":",
      this.port.toString(),
      this.path,
    ].join("");
  }
}
