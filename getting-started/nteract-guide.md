# A guide to nteract

## What is nteract?

Howdy there! This handy guide is here to introduce you to the nteract ecosystem. nteract is a collection of React components, JavaScript packages, and applications built on top of the Jupyter specification. What does all this mean? Let's break it down by looking at the technologies within nteract.

#### React components

React is a user-interface framework that was open-sourced in the spring of 2013. Since then, its adoption has grown and it has become the framework of choice for many front-end developers. This made React the natural choice for the set of components provided within the nteract ecosystem. These components allow you to quickly render editor components, output components, Markdown editors with MathJaX enabled.

You can learn more about nteract's React components at [this documentation site](https://components.nteract.io/).

#### JavaScript packages

In addition to React components, the nteract ecosystem provides JavaScript packages for interacting with the Jupyter specification. These packages make it easy to connect to remote kernel instances on Binder, read and parse the Jupyter notebook format, and interact with messages recieved from Jupyter kernels.

You can learn more about nteract's packages at [this documentation site](https://packages.nteract.io/).

#### Web and desktop applications

Wondering what things you can build by putting nteract's components and packages together? Wonder no more! The nteract ecosystem also consists of several web and desktop-based applications that allow you to work with interactive notebooks.

**nteract desktop** allows you to edit code, write prose, and visualize data within a gorgeous desktop application. **nteract web** allows you to run the nteract experience within a browser context as an extension to the Jupyter Notebook server. **nteract play** is a simple REPL-like interface that allows you to run Python, Scala, or R code in the browser against a Binder instance.

#### Hydrogen for Atom

Hydrogen is an extension for the Atom text editor that allows users to execute code within a text file, render rich media like images and videos, useful inspection information from the kernel, and code completion.

#### Commuter

Commuter is a web application that renders notebooks from a local directory or Amazon S3 store. A Commuter setup will allow you to quickly create an environment where people in your organization can share and view notebooks. You can view a demo of [nteract commuter on Glitch](https://nteract-commuter-glitch-demo.glitch.me/view/). 

#### Papermill

Papermill is a tool to parameterize notebooks, execute and collect metrics across notebooks, and summarize collections of notebooks. Papermill is a great way to generate regulary-scheduled reports or execute workflows in a series of notebooks. You can learn more about Papermill on [this documentation site](https://papermill.readthedocs.io/en/latest/).

#### A bird's eye view

If you've gotten to this point, you're probably aware that the nteract ecosystem offers you a lot of ways to interact with the Jupyter specification. We've created the visualization below to help you get a sense of what the ecosystem provides.

![](../_images/nteract-architecture.png)

## How can the nteract ecosystem help me?

The nteract ecosystem can help you if you are:
- A data scientist looking for an approachable and elegant desktop application to interact with Jupyter Notebooks 
- A developer looking to build an interactive computing application
- A developer, designer, or technical writer looking for a friendly and talented community to develop with
