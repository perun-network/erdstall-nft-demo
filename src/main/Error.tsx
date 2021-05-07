// SPDX-License-Identifier: Apache-2.0

// Error describes a generic error type with a value and message.

export class Error {
  readonly Msg: string; // error message.
  constructor(msg: string) {
    this.Msg = msg;
  }
}

export const New = (msg: string): Error => {
  return new Error(msg);
};

export const Erdstall = (content: JSX.Element): void => {
  document.dispatchEvent(new CustomEvent("ErdstallError", { detail: content }));
};
