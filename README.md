# 02-DataVis-5ways

Assignment 2 - Data Visualization, 5 Ways  
===

# R + ggplot2 + R Markdown + plotly

Source: I started with the code from class

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.
Plotly is a library for making interactive plots in python.

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

To create the visualization, i needed to load in the data using the csv function. Then, I created the scales for the x-axis and the y-axis by adding a linear scale 
through the scaleLinear function and added custom domains and ranges for the each of them. Next, I added the labels by appending text and changed their fonts to Calibri using the style function. I then translated the x and y axis to align with eachother properly. Next, I used an ordinal scale and assigned each manufacturer to a color. Then, I created a tooltip and put everything together by appending circles, using a mouse event, and updating the tooltip.

Overall, the graph was the most difficult to create in d3. You had to specify everything you wanted to do explicitly, which can be annoying, but I can also see how it gives you more control over the visualization. The tooltip was also more difficult to create in d3. I can see myself using d3 to creat visualizations when I want to create something that is more unique.



## Technical Achievements
- **Tooltips, mouseover event in d3**: I have tooltips that show up on all of the graphs I made so that if you hover your mouse over the bubble, text will appear that displays information about it. I was able to customize all of them except for the Excel tooltip, which already listed the (x,y) position of the bubble and the manufacturer. On all of the other graphs, I made sure to list at least the Car, the Manufacturer, and the Horsepower. The tooltip that took the most effort to implement was the tooltip in d3, which required me to use a mouseover event. However, with d3, you are able to control the tooltip more.

### Design Achievements
- **Avoided red and green together**: In an effort to make my graphs as accessible as possible, I decided to avoid putting red and green on the same graph. Since color is the only thing that is used to distinguish which cars are from certain manufacturers without hovering over the bubbles, I decided to not include both red and green on the same graph. I think most people should be able to experience a graph the same way.
- **Font Change to Calibri**: I kept my fonts for the graphs consistent by changing the font for each of them to Calibri, except for Flourish which I had to use Source Sans Pro instead. I used Calibri because it is a simple font that is easy to read. This task was easier to do in some tools/libraries than others. It was very easy to do in Excel, but impossible to to in Flourish, which only uses Google fonts.
