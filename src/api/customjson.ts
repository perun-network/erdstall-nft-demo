// SPDX-License-Identifier: Apache-2.0

import { TypedJSON } from "typedjson";

export default function CustomJSON(Type: any) {
  TypedJSON.mapType(Type, {
    deserializer: (json: string) =>
      json === null ? json : Type.fromJSON(json),
    serializer: (value: any) => (value === null ? value : Type.toJSON(value)),
  } as any);
}
