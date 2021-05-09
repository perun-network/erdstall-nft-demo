#!/bin/bash
# SPDX-License-Identifier: Apache-2.0

function checkInstalled() {
  allSet=true
  for cmd in "$@"; do
    if ! command -v "$cmd" &> /dev/null; then
      echo ERROR: Make sure "$cmd" is installed
      allSet=false
    fi
  done
  if ! $allSet; then
    exit 1
  fi
}

if [ -z "$1" ]; then
  echo ERROR: No erdstall path specified
  echo
  echo Usage:
  echo $0 ./path/to/Erdstall/repository
  exit 1
fi

checkInstalled go ganache-cli

# start ganache in background.
ganache-cli \
  -e 1000000 \
  -b 20 \
  -m "pistol kiwi shrug future ozone ostrich match remove crucial oblige cream critic" \
  -i 1337 \
  -l 10721975 \
  -s 100 &
sleep 2 # give ganache a second to startup.
GANACHE_PID=$! # save ganache PID for later kill.
echo $GANACHE_PID
cd $1

if ! test -f "nerd-op"; then
  go build
fi

./nerd-op -log-level "trace" -config demo/config.json -server demo/server.json &

OPERATOR_PID=$!
echo $OPERATOR_PID

while true; do
  read -p "type 'quit' to stop testbench > " input
  case $input in
    quit ) kill $OPERATOR_PID; kill $GANACHE_PID; echo "Exiting testbench"; exit;;
    * ) echo "type 'quit' to stop >";;
  esac
done
