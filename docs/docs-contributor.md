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
   in Markdown format. If you are adding a new file, named `style-guide.md`, 
   make sure it has a *title header* similar to this:
   ```
   ---
   id: style-guide
   title: Style Guide

   ---
   ```

3. To add the document to the site's sidebar menu, add the `id` in 
   `website/sidebars.json`.

4. To view your changes locally, change into the `website` directory. Run
   `yarn build start`. This will open a page in your web browser.

