# Tasks

This section gives step by step instructions on how to create, edit, build, and
serve components documentation.

## Installing styleguidist tool

If you have forked and cloned the nteract monorepo, follow the directions in
the monorepo's README.md file to install the development dependencies including
styleguidist with the command:

`yarn install`

If you are not working with the monorepo or are starting a new project,
you can install the styleguidist tool using:

`npm install --save-dev react-styleguidist`

## Building components documentation

To build the documentation locally from the monorepo's root:

```bash
cd nteract
yarn docs:build
```

To start a running server locally to view the documentation:

```bash
cd nteract
yarn docs
```

Navigate to the URL displayed in the command's output message.

## Documenting a new component

Currently, the components are located in a `components` sub-directory
grouped into a parent directory for a particular group of components, such as
`Presentional Components`, within the GitHub nteract monorepo. The component
may have its own subdirectory or share a directory with similar components.
In either case, there will be a JavaScript (`js`) file and a Markdown (`md`)
file for each component.

Let's look at how to create documentation for the `Cell` component which is
rendered at [here](https://components.nteract.io/#cell) in the
`https://components.nteract.io` documentation.
The source code for the Presentational Component, `Cell` can be found in the `components` source directory,
[`nteract/packages/presentational-components/src/components`](https://github.com/nteract/nteract/tree/master/packages/presentational-components/src/components).
The JavaScript file for the `Cell` component is
[`cell.js`](https://github.com/nteract/nteract/blob/master/packages/presentational-components/src/components/cell.js)
and its associated markdown documentation file is
[`cell.md`](https://github.com/nteract/nteract/blob/master/packages/presentational-components/src/components/cell.md).

Looking at `cell.md`, you can see the following Markdown block:

```markdown
A `<Cell />` can be set as selected to **raise** it up.
```

adds prose to the documentation page for **Cell**. While this
JavaScript block adds the interactive example to the page:

```js
<Cell isSelected>
  <Input>
    <Prompt counter={2} />
    <Source language="python">{`print("Hello World")`}</Source>
  </Input>
  <Outputs>
    <pre>Hello World</pre>
  </Outputs>
</Cell>
```

## Submitting Changes in a Pull Request

Follow the steps found in the monorepo's
[`CONTRIBUTING.md`](https://github.com/nteract/nteract/blob/master/CONTRIBUTING.md)
file.

## Publishing the components documentation

The documentation should after a PR is merged. If it does not,
please contact Safia, Carol, or Kyle on Slack #docs. For your information,
the auto-deploy uses Zeit's now project.
