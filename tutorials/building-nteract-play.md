# Introduction

If you've landed on this tutorial page, you are probably interested in learning more about nteract, the Jupyter ecosystem, and/or building web applications using JavaScript. If so, you're in the right place. By the end of this play-by-play tutorial, you will have built your own version of [nteract Play](https://play.nteract.io/), an application similar to JSFiddle or repl.it, that allows users to write code on one half of the app and view it its output on the other half.

![A screenshot of the nteract Play app with some demo code](https://cldup.com/GYfkokSIUF.png)

We want you to succeed at the end of this tutorial. Here are some things you can do to set yourself up for success by the end of this tutorial.

1. Be sure you're familiar with the JavaScript programming language and the React framework. You can find some great resources to learn [JavaScript](https://github.com/micromata/awesome-javascript-learning) and [React](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6).
2. 

If you've gotten up to this part of the tutorial and you're a little confused, you can post a question on [our support forum](https://spectrum.chat/nteract/help) to get help.

If you feel ready to move forward, then let's go!

# Body

We’ll get started by setting up our codebase. 

We’ll be building our own version of nteract play using Next.JS, Redux, and RxJS. These libraries are used frequently throughout the nteract codebase for a couple of reasons.

Next.JS is a framework built of top of the React front-end library. It adds a couple of neat features to React like server-side rendering.

Redux is a 

```
$ mkdir nteract-play && cd nteract-play
$ npm init —yes
```

We've created a directory to store our code in. Now we'll need to install some of the basic tools that we mentioned above.

```
$ npm install --save next react react-dom
```

Now that we've got everything installed, we'll need to create some pages that we can view in our app. Let's start by creating a `pages/index.js` file that we will use to store the contents of our homepage.

```
$ mkdir pages
$ touch pages/index.js
```

Inside the `index.js` file, we'll set up the basic scaffold of our homepage. We won't worry about making it pretty just yet, for now, we just want to get the ball rolling.

```
class Index extends React.Component {
  render() {
    return (
      <header>
        <h1>nteract play</h1>
      </header>
    );
  }
}

export default Index;
```

Now we will need to run our application. Before we do this, we'll need to configure the npm scripts.

```
...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
...
```

If we visit the webpage, we should see the following.

![A screenshot of our application with the words nteract play in the top-left corner.](https://cldup.com/GbQ9kSJ1cY.png)

For our next step, we are going to augment what we have here a little bit more. We'll do this in a couple of steps. First, we'll create a `components` directory where we can store lower-level components.

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
