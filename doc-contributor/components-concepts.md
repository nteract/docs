# Components Documentation Concepts

## Overview

The **components documentation**, https://components.nteract.io/, provides
definitions of the different components that we use in nteract. These components
are available openly for other React projects to use.

The components documentation categorizes individual components into logical
groups. It also enables users to try out the components while reading the
documentation which helps users see a component in action.

## Styleguidist Tool

[Styleguidist](https://react-styleguidist.js.org/) is the documentation tool
which nteract uses to build the components documentation. Styleguidist enables
you to document a component using Markdown files as well as to configure
style of the served documentation using a JavaScript file.

## Components and Source Code

The components are found in the
[nteract monorepo](https://github.com/nteract/nteract). The documentation of
an individual component is found in the same subdirectory as the component's
source code. This makes it convenient for developers to document components
as they are created or modified.

## Styling and Deployment

The styling settings for the Components Documentation is found in the nteract
monorepo in the [`styleguide.config.js`](https://github.com/nteract/nteract/blob/master/styleguide.config.js) file.

We use Zeit's [now](https://zeit.co/now) to deploy the documentation for
preview and production.
