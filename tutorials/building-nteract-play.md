# Introduction

If you've landed on this tutorial page, you are probably interested in learning more about nteract, the Jupyter ecosystem, and/or building web applications using JavaScript. If so, you're in the right place. By the end of this play-by-play tutorial, you will have built your own version of [nteract Play](https://play.nteract.io/), an application similar to JSFiddle or repl.it, that allows users to write code on one half of the app and view it its output on the other half.

![A screenshot of the nteract Play app with some demo code](https://cldup.com/GYfkokSIUF.png)

We want you to succeed at the end of this tutorial. Here are some things you can do to set yourself up for success by the end of this tutorial.

1. Be sure you're familiar with the JavaScript programming language and the React framework. You can find some great resources to learn [JavaScript](https://github.com/micromata/awesome-javascript-learning) and [React](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6).
2. 

If you've gotten up to this part of the tutorial and you're a little confused, you can post a question on our support forum to get help.

If you feel ready to move forward, then let's go!

# Body

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
5. Deploying our code to now.
- Creating a zeit account.
- Setting up our deployment configuration and deploying our app.

# Conclusion

Where can you learn more?
- Redux docs
- Link to component and pakcage docs.
- RxJS docs
- Jupyter specific docs

What you can do next?
- Try the building a notebook tutorial.
- Contribute to nteract.
