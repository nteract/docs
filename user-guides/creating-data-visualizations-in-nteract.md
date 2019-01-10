# Creating data visualizations in nteract

They say a picture is worth a thousand words and that's certainly the case when it comes to data. Data visualizations are a great way to communicate large amounts of information clearly and efficiently. This guide will explore different ways to create visualizations in the nteract app.

### Plotting with matplotlib and seaborn

Matplotlib is one of the most popular plotting tools in the open source ecosystem. It's used in a variety of academic and industry contexts and is a great starting point for anyone looking to dive into data visualization.

To get started with matplotlib, we'll use another nteract example notebook. Before we get started, make sure you have the dependencies needed for this example notebook installed. The installation process will vary depending on your Python setup, but here is an example of the dependencies that need to be installed assuming a global Python3 installation.

```
$ python3 -m pip install pandas requests matplotlib seaborn
```

Once you've installed these dependencies on your machine, you'll need to open the example notebook by navigating to **FIle > Open Example Notebook > python > Glean the Download Statistics for nteract Desktop**. Navigate to **Cell > Run All** to execute all the cells in this notebook.

This notebook uses the GitHub API to fetch download statistics for OS-specific versions of the nteract desktop and renders the number of downloads per release. If you scroll to the last cell in the notebook, you'll see the following.

![A matptlotlib visualization within an nteract notebook](https://cldup.com/M-dPmjYXgL.png)

The plot is rendered as a static image. You can save the image to your desktop or laptop. You can also export this notebook as a PDF with this image inline.

### Visualizing with Plotly

In addition to rendering with matplotlib and other language-specific plotting tools, nteract also provides a custom renderer for visualizations rendered using [Plotly's](https://plot.ly/) open source visualization tools. We'll use another example notebook to explore this, but first, make sure that you have the `plotly` Python package installed in your setup.

```
$ python3 -m pip install plotly
```

Next, navigate to **File > Open Example Notebook > python > Gallery of Plotly Plots**. This notebook defines a `plotize` function that takes the data and layout of a visualization and renders it inline using the Plotly transform.

![A Plotly visualization](https://cldup.com/dlhVzlypSi.png)

Within this transform, you can zoom in and out of a visualization, full screen it, save the image, and more.

### Exploring with the Data Explorer

Last but not least, nteract ships with the nteract Data Explorer, a tool that takes all the pain out of creating data visualizations in your workflow. Instead of writing your own visualization code, the data explorer provides several visualization and customization options.

Let's try the Data Explorer out by using one of the example notebooks. Navigate to **File > Open Example Notebook > python > Try the Data Explorer**. The last cell of the notebook shows a data frame rendered within the Data Explorer. To the right, you'll see several visualization formats for the data. From top to bottom, you can view the data in tabular format, a bar plot, a scatter plot, an area plot, a network diagram, a hierarchy diagram, and a line plot.

![A display of the Data Explorer](https://cldup.com/ZRhONURThl.png)

Each visualization type gives you the options to modify the category, filters, color palette, and more for each visualization type.

#### Which visualization option should I use?

With so many visualization options available in nteract, which should you use? Here's a handy guide to help you choose.

- If you're planning on publishing your notebook or exporting it to a static format, you should use matplotlib or any other language-specific plotting tool.
- If you already know what kind of data visualization you want to create and visualization format you want to use and you're familiar with Plotly, you should use the Plotly transform.
- If you're looking to use the visualizations for exploratory purposes, don't have any custom needs for your visualization, and are sharing your notebooks with others using nteract, you should use the Data Explorer.