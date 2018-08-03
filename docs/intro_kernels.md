---
id: intro-kernels
title: Introducing Kernels 
---


# Introducing Kernels

 Kernels are tools to run code. Kernels receive messages from the front end that contain a user's code and execute the code.  The kernel then sends messages that contain the result of the executed code back to the front end.  Messages are formatted as JSONs and sent using [ZeroMQ](http://zguide.zeromq.org/page:all#ZeroMQ-in-a-Hundred-Words).

![](http://ipython.readthedocs.io/en/stable/_images/other_kernels.png)


 IPython provides wrappers to execute code that
 have been used to develop kernels across [over 100 languages](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels). Notable examples of community-developed kernels include [xeus for C++](https://github.com/QuantStack/xeus-cling), [IJavascript](https://github.com/n-riesco/ijavascript), [IHaskell](https://github.com/gibiansky/IHaskell), [Igo](https://github.com/yunabe/lgo), [IJulia](https://github.com/JuliaLang/IJulia.jl), [IRKernel](https://github.com/IRkernel/IRkernel), and [Calysto for Octave](https://github.com/Calysto/octave_kernel).

 To learn more about creating your own Jupyter Kernel, you may learn more at [Making Kernels for Jupyter](http://jupyter-client.readthedocs.io/en/latest/kernels.html).  An simple example kernel
 is at [dsblank/simple_kernel](https://github.com/dsblank/simple_kernel) on GitHub.
 If you do create a new kernel, [please add it to our list of kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)!
