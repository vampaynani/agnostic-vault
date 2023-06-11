# AgnosticVault

## Proposal

An electron app that can encrypt data to a file and decrypt those files using AES256 encryption based on a password only handled by the user. Keeping it simple and private allowing to share it with others securely. It has a bad UX for the moment, but carries on with cost and reliability benefits within the ethical aspects of user ownership and privacy by design.

## Quick links

[Why Agnostic Vault?](/docs/context.md)
[How do I use it?](/docs/how-to-use.md)

## Development

### Stack

- Electron
- React
- TailwindCSS

### Repo structure

This is the main repository for the AgnosticVault source code. Key components include:

- [src](https://github.com/electric-sql/electric/tree/main/clients/typescript) &mdash; Typescript based react application client that provides an interface to interact with the encryption methods and listeners from the electron application.
- [main](https://github.com/vampaynani/agnostic-vault/tree/main/main) &mdash; Electron Application source code, the `main` script runs the desktop application, `preload` sets some presets to interact with the react application, the `handlers` are in charge of each of the user interactions received from the react application.

### Quickstart

- From the terminal run `yarn install`
- run `yarn electron:dev`

# Team

- [Wenceslao Negrete](https://www.linkedin.com/in/vampaynani/)

It's also super helpful if you leave the project a star here at the [top of the page☝️](#start-of-content)
