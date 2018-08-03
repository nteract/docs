---
id: docs-contributor
title: Documentation: How to Contribute
---

## Welcome documentarians

We're glad you are here. Excellent documentation empowers users and contributors.

### Contributing content

When adding information to the contents directory, the contents directory should
include:

* Markdown files
* Notebooks!

📝 Keep your filenames lowercase please due to case sensitivity on some systems.

It's ok if we're not sure of the organization at first. We want to get started on writing together first and foremost. If you are doing an example with multiple files, please make a folder.

### Building docs locally

We use [docusaurus](https://docusaurus.io/) for structuring and building our
documentation.

1. There are two main directories: `docs` and `website`.
2. Change directory to `docs`. `docs` contains all of the documentation source
   in Markdown format. If you are adding a new file, make sure it has a *title header*
   similar to this:
   ```
   ---
   title: Documentation: How to Contribute

   ---
   ```

1. On a Mac, you can `brew install hugo`. On other systems, please follow the
hugo installation steps.

2. Get the documentation source or update the source.

3. From the root of the repo, type `hugo server` to build and serve the docs
   locally

4. Navigate to `localhost:1313`
