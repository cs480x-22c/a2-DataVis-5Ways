

# Plotly + Python

Plotly is a Python graphing library similar to Matplotlib, but steered further towards ML/AI and interactivity. It is used by companies such as NVIDIA and Tesla to perform data visualizations. Plotly also integrates natively with Dash, an interactive web visualization platform to show and interact with plots.

With just three lines of code (+ library imports) and only reading the documentation I was able to recreate the plot. I first read the dataset using a Pandas dataframe. I then used the `px.scatter` function to make the plot and the `fig.show` function to show the plot. I simply had to pass the x, y, size, color, and opacity to the function.

Pros:
- Very easy to use
- Powerful
- Can be connected to Dash for larger visualiations and interactivity

Cons:
- (Minor) Need to install Pandas separately to read a dataset

![Plot reproduced in Plotly](plotly%20+%20python/plot.png)

# Flourish

I think Flourish is the best platform for complex data visualizations with no coding knowledge. The platform allows selecting a type of plot, uploading a dataset, and linking each marker property to a column of the data. Marker properties include size, color, shape, and more.

Pros:
- Easy to use for people who don't know how to code
- Minimal setup needed
- Intuitive without reading any documentation

Cons:
- Not as customizable
- Cannot handle the dataset low-level such as using Pandas

![Plot reproduced in FLourish](Flourish/a2-DataVis-5Ways@2x.png)

# R + ggplot2

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To visualized the cars dataset, I made use of ggplot2's `geom_point()` layer, with aesthetics functions for the color and size.

While it takes time to find the correct documentation, these functions made the effort creating this chart minimal.

![ggplot2](img/ggplot2.png)

# Vega-Lite
Vega-Lite allows to create complex plots by defining a JSON-style input that is compiled into a plot. Using the online portal at [https://vega.github.io/editor/#/custom/vega-lite](https://vega.github.io/editor/#/custom/vega-lite), it's possible to code and render the JSON automatically. Compared to previous solutions, Vega-Lite did require me to read multiple pages of documentation and also read a discussion on ObservableHQ. Once understood the structure of the JSON, however, it's easy to customize a plot with minimal effort.

Pros:
- Powerful
- Plot encoded in JSON and easy to share

Cons:
- Need to have the dataset ready to be plotted
- Steeper learning curve than previous solutions

![Plot reproduced in Vega-Lite](Vega-Lite/visualization.png)

# d3.js
d3.js allows to create complex data visualizations using JavaScript. d3.js reads the csv file using a function, maps the data to object fields, and allows to visualize it using SVG components. Compared to other solutions which plot the data directly, d3.js requires to create the parts of the plot one-by-one. For example, the axis have to be added and translated to a specific position, same as the labels, ticks, and numbers. Using d3.js certainly requires to read some documentation and sample code. However, I think d3.js was the most versatile data visualization framework. Compared to the other tools, the developer has full control of the graphical components of the plot. I think this is a great option to make complex visualizations, but if trying to make something simple, other solutions allow for great time-saving.

Pros:
- Powerful
- Complete control over graphic components
- Can manipulate the data before plotting it

Cons:
- Need to read the documentation and sample code
- For simple plots it takes much longer than other data visualization platforms

![Plot reproduced in Vega-Lite](d3/d3js.png)

# Other
## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI Forever**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: As demonstrated in my colorscheme...