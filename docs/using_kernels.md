---
id: using-kernels
title: Using Kernels 
---

# Using Kernels

Kernels are installed either by installing the kernel directly or adding the
kernel with [ipykernel](https://github.com/ipython/ipykernel).  Many [community-developed](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) kernels will include installation instructions in their README.md. Kernels are managed with ipykernel.

To install ipykernel with pip call:

```
pip install ipykernel
```

or with conda

```
conda install ipykernel
```

To see what kernels you have already installed:

```
jupyter kernelspec list
```

Python environments are manually added through ipykernel. To add a Python
environment, ipykernel must be installed in the environment. To add a kernel
with ipykernel that is made with a configuration file, e.g. `requirements.txt`
or `environment.yml`, you will need to install ipykernel into the environment
and install the kernel while the environment is activated.


Using pip:

```
python -m pip install ipykernel virtualenv
python -m ipykernel install
python -m virtualenv myenv
source myenv/bin/activate
pip install ipykernel
pip install -r requirements.txt
python -m ipykernel install --user --name myenv --display-name "Python (myenv)"
```

Using conda:

```
conda install ipykernel
python -m ipykernel install
conda env create -f environment.yml
source activate myenv
conda install ipykernel
python -m ipykernel install --user --name myenv --display-name "Python (myenv)"
```
