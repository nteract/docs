---
id: doc-deploy
title: Documentation: Build and Deploy
sidebar_label: contributing
---

## Build

1. Change directory to `~/code/user-guide/website`.
2. Run `yarn run build`
3. You should now have a **build** directory within the **website** directory.


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