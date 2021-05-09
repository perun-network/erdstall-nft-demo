# Erdstall-NFT-Demo

This project contains the front-end for the Erdstall minting/cNFT demo, made for the ETHGlobal Scaling 2020 Hackathon.

The combined Erdstall Operator and NFT Server can be found at
https://github.com/perun-network/nerd-op . It is also part of the submission.

## Development

To develop issue the following commands and hack away:

```bash
  $ yarn install
  $ yarn start
```

Use this demo with the integrationtest:

```bash
  $ mkdir deps
  $ cd deps
  $ git clone git@github.com:perun-network/nerd-op
  $ git clone git@github.com:perun-network/erdstall-ext erdstall
```

Use the branches to your liking for each repository and issue a `yarn integration` in the source directory of this repository.
This builds the `nerd-op` executable in `deps/nerd-op` and spins up a `ganache-cli`, which has to be installed globally.

* `yarn integration` Commands:
  * `quit` - to stop the integration test and shutdown ganache-cli and operator.

## License
This project is released under the Apache 2.0 license. See LICENSE for further
information.

_Copyright (C) 2021 PolyCrypt GmbH, Darmstadt, Germany_
