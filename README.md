# 02-DataVis-5ways

Assignment 2 - Data Visualization, 5 Ways  
===

# R + ggplot2 + R Markdown + plotly

Source: I started with the code from class

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To create the visualization, I used geom_point to create the circles in the scatter plot.
I then used the aesthetic function (aes) to add the x-axis, y-axis, color of the circles, size of the circles, alpha(opacity) of the circles, and text.
I also used the windowsFonts() function to add the Calibri font. Then using the theme function, I was able to change the font family to Calibri.
Next, I changed the default color scheme to "RdYlBu" so that red and green aren't used in the same plot, keeping colorblindness in mind.
Lastly, I added in the plotly library in order to add tooltips when the mouse hovers over each bubble.

Overall, the graph was easy to create in R. Everything was very simple and R handles data sets very well. The only issue I came across was when implementing the tooltip.
You can add text to the tooltip, but it automatically states what data is at that point already. To keep consistency with my other graphs, I decided to add horsepower and 
the car name, and I accepted the fact that this tooltip would just have more information. I can see myself using R if I have a dataset and want a quick, simple graph.

![ggplot2](img/RChart.png)
![ggplot2 with tooltips](img/RChart2.png)

# d3

Source: I referenced https://www.d3-graph-gallery.com/graph/custom_theme.html to learn how to make a scatterplot using d3.

d3 is a JavaScript library used for making custom data visualizations.

(And so on...)


## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI Forever**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: As demonstrated in my colorscheme...
