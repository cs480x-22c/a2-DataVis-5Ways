# 02-DataVis-5ways

# Python + matplotlib

Matplotlib is a visualization library for Python. I've used this library in other classes so it was very easy to generate the scatterplot. I was able to find everything I needed in the documentation. The only challenge was adding the legend, but I found a post on StackOverflow that I was able to adapt. Matplotlib is very easy to get started with if you look at the documentation, especially if you are already familiar with Python. It is flexible enough so that you can customize your plot to some degree.

References:

https://stackoverflow.com/questions/11423369/matplotlib-legend-circle-markers

![matplotlib](img/matplotlib.PNG)

# d3

d3 is a JavaScript library that helps with document manipulation. The d3 plot took me the longest because it is a lot more low-level than the other tools. I referred to the documentation and examples from class. I struggled with drawing the axes but I found a tutorial that I followed to get started. d3 is more challenging to use for visualization because you have to do a lot of things manually but it affords you the most flexibility. In addition, using JavaScript allows you to add interactivity that can improve the visualization.  

References:

https://www.tutorialspoint.com/d3js/d3js_axis_api.htm

![d3](img/d3.PNG)

# R + ggplot2

ggplot

difficult: super easy

used documentation

![ggplot](img/r-ggplot.PNG)

# excel

Excel was the only non language-based tool that I used. It was easy to create a basic scatterplot but difficult to add my own customizations beyond that. For example, to map color to manufacturer, I had to create pairs of dummy columns for each value of the manufacturer column, then go into the settings and specify which columns to plot against which. I was able to create a bubble chart instead of a standard scatterplot in order to get the size mappings. Using Excel I was not able to set the range of the axes and the values of the tick marks. I found documentation on Microsoft's website on how to do this but when I followed the instructions the interval settings were missing from my version. Overall, I think that Excel is a good tool if you want to create some basic plots, but if you want to add more customization it may be better to use another tool.

References:

https://nikkimarinsek.com/blog/how-to-format-different-conditions-in-excel

https://support.microsoft.com/en-us/topic/change-the-scale-of-the-horizontal-category-axis-in-a-chart-637897f6-0d51-4ec5-bef9-25d2c83a8450

![excel](img/excel.PNG)

# vega-lite

vega-lite

difficulty: some

used documentation

hard to get set up

![vega-lite](img/vega-lite.PNG)

## Technical Achievements
I added interactivity to the d3 plot. Data tips are displayed when the user hovers over a point on the scatterplot. I also added a search bar so users can filter through the points based on model, manufacturer, and year. I used the mouseover and mouseout events for the data tips and the keyup event and the array filter function for the filtering.

## Design Achievements
I matched the colors to those from the original image. I also added legends to all my plots because without them, viewers wouldn't understand why there are different colors.
