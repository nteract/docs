# Introduction

If you've landed on this tutorial page, you are probably interested in learning more about nteract, the Jupyter ecosystem, and/or building web applications using JavaScript. If so, you're in the right place. By the end of this play-by-play tutorial, you will have built your own version of [nteract Play](https://play.nteract.io/), an application similar to JSFiddle or repl.it, that allows users to write code on one half of the app and view it its output on the other half.

![A screenshot of the nteract Play app with some demo code](https://cldup.com/GYfkokSIUF.png)

We want you to succeed at the end of this tutorial. Here are some things you can do to set yourself up for success by the end of this tutorial.

1. Be sure you're familiar with the JavaScript programming language and the React framework. You can find some great resources to learn [JavaScript](https://github.com/micromata/awesome-javascript-learning) and [React](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6).
2. 

If you've gotten up to this part of the tutorial and you're a little confused, you can post a question on [our support forum](https://spectrum.chat/nteract/help) to get help.

If you feel ready to move forward, then let's go!

### Setting up our application

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

### Creating our components

For our next step, we are going to augment what we have here a little bit more. We'll do this in a couple of steps. First, we'll create a `components` directory where we can store lower-level components.

```
$ mkdir components
```

If you visit [nteract play](https://play.nteract.io/), you will see that there are three main elements on our website: the header, the code editor on the left, the output display on the right, and panel under "Show logs". We'll create components for each of these elements.

```
$ touch components/header.js components/editor.js components/output.js components/logs.js
```

Great! We'll start off by creating our header component. There are five key elements in the header component: the nteract logo, the "Run" button, the "Show logs" button, the kernel dropdown, and the kernel status indicator.

Let's start by creating a `header` element with the nteract logo aligned to the left.

```
<header>
</header>
```

Next, we'll add the run button to our header component.

Then, we'll add the show/hide logs toggle button.

Next, we'll need to create a dropdown that will allow our users to select the kernel that they would like to connect to.

Finally, we'll need to create an indicator for the kernel status.

Now that we've completed the `Header` components, we'll need to create the editor component. This is where the nteract ecosystem will shine! The `@nteract/editor` package will do a lot of the heavy lifting here, so we'll start by adding it as an import at the top of our file.

```
import CodeMirrorEditor from "@nteract/editor";
```

Then, we'll put the `CodeMirrorEditor` component to work.

Next, we'll need to create a components to display our Outputs. The nteract ecosystem will do a lot of the heavy lifting here too. We'll leverage the `@nteract/presentational-components` and `@nteract/display-area` pa

### Creating our Redux state and store

Now that we've generated the basic user interface for our application. We'll need to add some functionality to it. We'll start with the first step, adding the ability to connect to a kernel.

We'll start by creating a redux store to represent the information that we would like to hold about the state of our application.

We'll also need to generate the initial state for our redux application.

Once we've set up this initial state, we will also need to create reducers that are associated with each part of our state.

Our state roughly looks like this,

```
{
  ui: {
    repo,
    gitref,
    source,
    showPanel,
    currentServerId,
    platform,
    currentKernelName,
    codeMirrorMode
  },
  entities: {
    serversById
  }
}
```

Here's a rough overview of what each part of our state will be used for and a sneak peak of what we will be building in the rest of the tutorial.

- ui.repo: The 
- ui.gitref:
- ui.source: The source code that is contained within the editor element that the user provided.
- ui.showPanel: Whether or not to show the Binder logs drawer.
- ui.currentServerId: A reference to the current Binder isntance that we are connected to.
- ui.platform: The operating system that we are on to create OS-specific tooltips and help text.
- ui.codeMirrorMode: The language that we would like to use in our code editor, defaults to Python.
- entities.serversById:

### Creating our actions

Now that we've got our store and initial state setup, we'll start by invoking the actions that we'd like to use in places where it is appropriate and work from their.

We'll start by adding the code to initialize a kernel connection in our main index page.

Next.JS provides a special static method called `getInitialProps` that is 

Inside this method, we'll start by 

The `detectPlatform` function is a utility function that allows us to determine what operating system the user is on. This will allow us to render operating system-specific help indicators.

The `initializeFromQuery` action will be used to. We'll create an action creator for it in our `redux/actions.js` file.

We'll add the reducers associated with these actions to the `redux/reducer.js` folder.

Next, we'll add the functions that will be used to initialize our connection to the kernel.

In our `initializeFromQuery` function, we initialized the git repository that we would like to reference. Now we need to initialize a kernel based on this information.

We will do this by invoking the `activateServer` function in our `componentDidMOunt` which will initialize the connection on page load.

First, we will create a `makeServerId` utility function that we will use to create a server id. The nteract ecosystem will help us here as well as we will be using the `rx-binder` package.

We will pass all this information to the activateeServer action. We'll start by defining the action for this in our actions.js file.

We'll define the code that will be executed when this action is called in our reducer.js file.

This will pipe over to the activateServerEpic which will initiate the connection to Binder.

Now that we've got a connection to the kernel initiated, we'll set up the actions that occur during different events in the lifecycle of the app.

Let's create a `handleSourceSubmit` function that will be invoked when the user clicks the "Run" button. 


```
handleSourceSubmit = () => {
  const { currentServerId, currentKernelName, runSource } = this.props;
  const { sourceValue: source } = this.state;
  runSource({
    serverId: currentServerId,
    kernelName: currentKernelName,
    source
  });
};
```

The `runSource` function is mapped from our actions.

```
export const runSource = (payload: {
  serverId: string,
  kernelName: string,
  source: string
}) => ({
  type: actionTypes.RUN_SOURCE,
  payload
});
```

We'll create a `runSourceEpic` that sends an execution request to the kernel that we are connected to.

```
const runSourceEpic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.RUN_SOURCE),
    mergeMap(({ payload: { serverId, kernelName, source } }) => {
      const channelPath = [
        "entities",
        "serversById",
        serverId,
        "server",
        "activeKernelsByName",
        kernelName,
        "kernel",
        "channel"
      ];
      const channel = objectPath.get(state$.value, channelPath);
      if (channel) {
        channel.next(executeRequest(source));
      }
      return of(
        actions.clearKernelOutputs({ serverId, kernelName }),
        actions.setSource(source)
      );
    })
  );
```

Next, we'll add a `handleKernelChange` that will be executed whenever the user changes the language of the kernel that they are connected to via the dropdown.

This handler will be associated with the `setActiveKernel` action. We'll define the action for this in our actions.js file.

```
export const setActiveKernel = (payload: {
  serverId: string,
  kernelName: string
}) => ({
  type: actionTypes.SET_ACTIVE_KERNEL,
  payload
});
```

Then we'll create a `setActiveKernelEpic` method.

```
const setActiveKernelEpic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.SET_ACTIVE_KERNEL),
    mergeMap(({ payload: { serverId, kernelName } }) => {
      const channelPath = [
        "entities",
        "serversById",
        serverId,
        "server",
        "activeKernelsByName",
        kernelName,
        "kernel",
        "channel"
      ];
      const channel = objectPath.get(state$.value, channelPath);
      const actionsArray = [actions.setCurrentKernelName(kernelName)];
      if (!channel) {
        actionsArray.push(actions.activateKernel({ serverId, kernelName }));
      }
      // $FlowFixMe
      return of(...actionsArray);
    })
  );
```

We'll also need to create some functions that will apply changes to the git refs and repos when they are modified by the user. We'll create the handlers in the appropriate components.

```
  handleRepoChange = event => {
    this.setState({ repoValue: event.target.value });
  };
  handleGitrefChange = event => {
    this.setState({ gitrefValue: event.target.value });
  };
  ```

  And then we will create 

  ```
    handleFormSubmit = event => {
    const {
      currentServerId: oldServerId,
      activateServer,
      submitBinderForm
    } = this.props;
    const { gitrefValue: gitref, repoValue: repo } = this.state;
    event.preventDefault();
    const serverId = utils.makeServerId({ gitref, repo });

    activateServer({ gitref, repo, serverId, oldServerId });
    submitBinderForm({ gitref, repo });
  };
```

Then we'll create the associated `submitBinderForm` action.

```
export const submitBinderForm = (payload: {
  repo: string,
  gitref: string
}) => ({
  type: actionTypes.SUBMIT_BINDER_FORM,
  payload
});
```

Then we'll create the reducers associated with these actions.

```
const repo = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_BINDER_FORM: {
      return action.payload.repo;
    }
    case actionTypes.INITIALIZE_FROM_QUERY: {
      if (action.payload.repo) {
        return action.payload.repo;
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

const gitref = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_BINDER_FORM: {
      return action.payload.gitref;
    }
    case actionTypes.INITIALIZE_FROM_QUERY: {
      if (action.payload.gitref) {
        return action.payload.gitref;
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
```

Let's start by setting up an action to update the Redux state whenever the contents of the code editor are updated. We'll create a `handleEditorChange` function.


