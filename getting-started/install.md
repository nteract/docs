Here you are! You're ready to get started tinkering with nteract. This guide will help you install the nteract monorepo and begin developing on nteract.
To get started developing, [set up the nteract monorepo](#set-the-monorepo-up-in-dev-mode).

#### Set the monorepo up in dev mode

Requires [Node.js and npm 3+](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-the-nodejs-site).

1. Fork this repo
2. Clone your fork or this repo `git clone https://github.com/nteract/nteract`
3. `cd` to the directory where you `clone`d it
4. `yarn install`

To keep up-to-date with changes to the root nteract/nteract branch:

5. Set the root as a remote: `git remote add upstream https://github.com/nteract/nteract.git`

When changes are made, they can then be pulled from the master branch:

6. `git pull upstream master`
7. `yarn clean`
8. `yarn install`

#### Windows Caveats

When building nteract on a Windows machine, you'll need to have vcbuild
installed for node-gyp to be able to build the ZMQ bindings required by the
Jupyter spec. If you do not have it installed, you may do so by running the
following from a Windows PowerShell launched as an Adminstrator:

```
npm install -g --production windows-build-tools
```

Additionally, you'll need to install GTK 2 for node-canvas. Follow [step 2 of
this instruction
set](https://github.com/Automattic/node-canvas/wiki/Installation%3A-Windows#2-installing-gtk-2)
to do this.