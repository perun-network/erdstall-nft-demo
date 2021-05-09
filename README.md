# Erdstall-NFT-Demo

This project contains the front-end for the Erdstall minting/cNFT demo, made for the ETHGlobal Scaling Hackathon.

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
  $ git clone git@github.com:perun-network/erdstall-ext 
```

Use the branches to your liking for each repository and issue a `yarn integration` in the source directory of this repository.
This builds the `nerd-op` executable in `deps/nerd-op` and spins up a `ganache-cli`, which has to be installed globally.
