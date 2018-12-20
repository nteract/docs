# nteract Web

Are you familiar with Jupyter and want to use nteract on the web as well?
We have a web version of nteract that runs on top of the jupyter server.

## Installing nteract web

Our current flavor of nteract web runs on top of the jupyter server. If you
have an installation of Jupyter on your system, just follow the next few steps
to run nteract web.

Install nteract web (`nteract_on_jupyter`) with `pip`:

```bash
pip install nteract_on_jupyter
jupyter serverextension enable nteract_on_jupyter
jupyter nteract
```

Now, you're running nteract web on jupyter!
