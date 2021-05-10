#!/bin/bash
# SPDX-License-Identifier: Apache-2.0

if [[ "$#" -eq 0 ]]; then
  echo "Choose a network to deploy:"
  echo "./loadconfig.sh -n|--net {goerli|dev}"
  exit 1
fi

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -n|--net) net="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

echo "Chosen Network: $net"

case $net in
  goerli) cp demo/goerli.json src/config.json ;;
  dev) cp demo/dev.json src/config.json ;;
  *) echo "Invalid network name"; exit 1 ;;
esac
