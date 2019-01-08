# Getting started with nteract

Interactive notebooks are a great tool for data scientists looking to document their code, experiment with models, generate visualizations, and prototype code. The most popular interactive notebook format in the data science ecosystem is the Jupyter notebook format.

### Setting up the nteract desktop application

The fastest way to get started with nteract is to download the desktop application to your machine. You can download the installer for your operating system on the [nteract homepage](https://nteract.io/desktop). Once you've downloaded and installed nteract, you can launch the program from the install directory. Note that this guide assumes you are using the nteract desktop application.

### Setting up the nteract web application

In addition to using nteract on the desktop, you can also use nteract within your web browser. To do so, you'll need to install the `nteract_on_jupyter` Python package using the following command.

```bash
$ pip install nteract_on_jupyter
```

Then, run Jupyter with the nteract extension installed using the following command.

```bash
$ jupyter nteract
```

Your default browser should open to the nteract web interface where you can open, create, and edit notebooks.

### How to create a new notebook

Depending on your preference, you can create a new notebook in nteract in multiple ways.

If you're comfortable with the command line, you can use the `nteract` command to create or open a notebook from the command line.

Altneratively, you can open a notebook by either double clicking on the notebook file anywhere on your machine or selecting File > Open from the nteract menubar.

### Writing code in interactive notebooks

Now that we've got the nteract application installed, we can create our first notebook. New notbooks in nteract launch with a an empty code cell. You can use this code cell to write code that can be executed. Code must be written in the language of the kernel that you are connected to in order to execute. For example, the example below shows Python 3 code executing within an interactive notebook.

![Executing a Python code cell within a notebook](https://cldup.com/6RzV6bYyKa.gif)

### Writing documentation in interactive notebooks

In addition to code cells, you can also create textual cells that can provide documentation and narrative for your code. These textual cells are formatted using the [Markdown formatting language](https://daringfireball.net/projects/markdown/). There are two ways to create a new Markdown cell in the nteract application. You can hover over the space after a cell and click the Markdown icon (it resembles an M with a down arrow next to it). Alternatively, you can select Edit > Insert Text Cell Below from the menubar.

Once the new Markdown cell has been created, you can double click to edit the Markdown cell and write your formatted text content.

![Creating and editing a new Markdown cell in nteract Desktop](https://cldup.com/a2nH48tNPm.gif)

### Organizing cells within a notebook

Like any written document, the organization of the content matters. nteract allows you to rearrange the cells within a notebook using drag-and-drop. You can click on the left hand side of a cell and drag it to the desired position.

![Using drag and drop to rearrange cells in a notebook](https://cldup.com/HgCrZl9zXW.gif)

### Speed things up with keyboard shortcuts

As you use notebooks more and more, you'll probably want to start taking advantage of some of the keyboard shortcuts that are provided within nteract. You can view a full list of these keyboard shortcuts, and how they compare to those provided within the JupyterLab and classic Jupyter front ends [here](https://docs.nteract.io/#/desktop/shortcut-keys).

### Rendering rich media in interactive notebooks

One of the most powerful features of notebooks is the ability to render rich media, like images and maps, within the notebook. Let's try this out by exploring one of the example notebooks bundled with nteract. First, we'll need to install a dependency Navigate to File > Open Example Notebook > python > Gallery of Plotly Plots.

![A screenshot of a Plotly visualization rendered within nteract](https://cldup.com/KUFuj4P5_L.png)

### Creating visualizations with the nteract Data Explorer

The nteract Data Explorer is a built-in tool for visualizing pandas DataFrames within a notebook. To see an example of the Data Explorer in action, navigate to File > Open Example Notebook > python > Try the Data Explorer. By default, the Data Explorer renders the data in a rich, paginated table table.

![Data rendered in a rich table within the nteract Data Explorer](https://cldup.com/-0UimYM3wH.png)

Using the buttons on the right of the Data Explorer, you can switch to different views of the same data. For example, here's the data from the table categorized and filtered into a bar plot.

![The nteract Data Explorer rendering a customized bar plot](https://cldup.com/54aF-NFjS3.png)

At this point, you're hopefully excited about all the notebooks you can create using nteract. You can view some of the example notebooks to view the possibilities that are available to you with nteract. You can open the example notebooks by selecting File > Open Example Notebook from the nteract menubar.