---
id: docs-deploy
title: Documentation: Build and Deploy
---

## Build

1. Change directory to `~/code/user-guide/website`.
2. Run `yarn run build`
3. This may take a while especially while building (note: the output does not
   provide a progress bar) since it is indexing all of the files for search.
   The output will look similar to this:

   ```
   $ yarn run build
     yarn run v1.9.2
     warning package.json: No license field
     $ docusaurus-build
     generate.js triggered...
     feed.js triggered...
     feed.js triggered...
     sitemap.js triggered...
     Site built successfully. Generated files in 'build' folder.
     ✨  Done in 300.52s.
    ```

4. You should now have a **build** directory within the **website** directory.


## Deploy

To deploy using [ZEIT `now`](https://zeit.co/docs):

1. Complete a new Build.
2. Change directory to `~/code/user-guide/website/build/docs-nteract`.
3. Run `now`.
4. You should see something similar to:
    ```
    $ now
    > Deploying ~/code/user-guide/website/build/docs-nteract under nteract
    > Synced 28 files (2.28MB) [4s]
    > https://docs-nteract-qdflfeywdh.now.sh [in clipboard] [2s]
    > Deployment complete!
    ```