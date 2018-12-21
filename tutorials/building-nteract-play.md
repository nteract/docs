# Building nteract-play

## Introduction

The goals of this tutorial are to:

- Gain familiarity with the Jupyter specification.
- Gain familiarty with nteract components and packages
- Gain familiarity with binder
- Build our own clone of JSFiddle/repl.it
- Deploy our clone to now

## Process

1. Installing and setting up Next.JS with nteract configuration.

- What tools will we need and why.
- Best practices we will adopt and why.

2. Creating our presentational components.

- Setting up Next.JS pages.
- Creating basic application and UI structure.
- Building a kernel picker component.
  - What is a kernel? Explaining protocol documentation.
- Use nteract's Editor component.
  - Why is the editor built on codemirror?
- Using nteract's Output component.
  - Explaining output formats and types.

3. Connecting our components to redux.

- Explaining how redux actions and reducers and epics play together.
- What is binder and rx-binder?
- Configuring our redux store.
  - What will be included in our state and why.
- Setting up actions and reducers to to connect with server on binder.
- Setting up epics to connect with server.

4. Testing our application.

- Writing tests for our actions and reducers.
- Writing snapshot tests for our components.
- Giving our application a test drive.

5. Deploying our code to **now**.

- Creating a [zeit account](https://zeit.co).
- Setting up our deployment configuration and deploying our app.

## Conclusion

Where can you learn more?

- View our [interactive component and package docs](https://components.nteract.io).
- Explore [RxJS docs](https://reactjs.org/docs/getting-started.html)
- Take a look at [Redux docs](https://redux.js.org)
- Read [Jupyter specific docs](https://jupyter.org)

What you can do next?

- Try the "building a notebook" tutorial.
- Contribute to nteract.
