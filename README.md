# Assignment 2 - Data Visualization: 5 Ways
### Mattheus Faria 
===

# R + ggplot2 Visualization

![alt text](https://github.com/MFaria27/a2-DataVis-5Ways/blob/main/img/MFaria_As2-R_Plot.PNG?raw=true)

ggplot2 is a visualization package used in R programming that is mostly used for statistical visualizations.

The ggplot function automatically maps colors to a specific label using its 'aes' variable in a single line without any extra work  (I.E. color=Mannufacturer) which was easily the shortest amount of code needed to map color to manufacturer, and geom_point let me map point size to car weight in a single line.

Recreating the scatter plot with ggplot2 was actually the quickest and easiest implementation out of the five methods used. I was able to create the visualization in just 5 lines of R, which is significantly small for creating such a nice looking graph. R and the ggplot2 library have to be the best coding tools for creating quick graphs, but I haven't used the tool enough to know its capabilities with a larger, more detailed graph.

Sources:

http://www.sthda.com/english/wiki/ggplot2-scatter-plots-quick-start-guide-r-software-and-data-visualization

===

# Matplotlib / Python

![alt text](https://github.com/MFaria27/a2-DataVis-5Ways/blob/main/img/MFaria_As2-matplotlib.PNG?raw=true)

Python is one of the best programming languages for data science today, with Matplotlib being a very useful visualization library.

Creating the graph was fairly simple, as the bulk of the graph was created using the scatter() function. Inside this function, you can set the size of each point based on a value, but one issue presented is that it automatically raises the number input by an exponent of 2. This made making the varying sizes of each point a little harder to see, but with a closer look at the graph, it works fine. Mapping color was also fairly simple, as the map() function allows mapping color as long as I provided a dictionary.

Matplotlib took me a fair amount of time to get used to before I got a proper visualization down. Most of my problems came from finding how to create multiple legends, but after looking at documnetation, it was fairly simple to get down. Compared to the javascript and R methods of visual creation, I'd definitely say this one is a bit weaker in terms of creating a simple graph easily. From the documentation I read, it seems like it can be used for a lot more, but the same could be done without much hassle using javascript.

Sources:

https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html
https://matplotlib.org/stable/gallery/text_labels_and_annotations/custom_legends.html

===

# Microsoft Excel

![alt text](https://github.com/MFaria27/a2-DataVis-5Ways/blob/main/img/MFaria_As2-excel.PNG?raw=true)

Microsoft Excel is a spreadsheet software that can open most lists of data and create visualizations using that loaded data. 

After loading in the csv of car data, I created new columns that each had a specific car's MPG and weight, with each column being a different manufacturer. This was the easiest way to separate the data so that it could be colored by manufacturer when formatting the graph. To map car weight to point size, I made more columns with each car's weight divided by 1000 to get a "size" value. This would be needed when setting up a bubble scatter plot, which takes x, y, and size values for each point. After loading all the data into the graph, it was fairly simple to give each point a color and opacity.

Despite being the tool I had the most experience with, recreating the graph in excel was by far the most frustrating out of the five methods. The process of seperating each manufacturer by MPG and weight to get a single graph of all of the data was very difficult to get to, as it was the most straight-forward, yet time-consuming, method I used. Before getting to that, I would go through many different methods of visual creation through excel, all of which would be missing one or two required traits, and I would eventually scrap them for the next. Excel is good when working with data, but creating visuals is a clunky experience which is better suited for the other methods.

Sources:

https://peltiertech.com/multiple-series-in-one-excel-chart/#:~:text=Report%20Ad-,Select%20Series%20Data%3A%20Right%20click%20the%20chart%20and%20choose%20Select,the%20chart%20shows%20two%20series

===

# Vega-Lite

![alt text](https://github.com/MFaria27/a2-DataVis-5Ways/blob/main/img/MFaria_As2-Vegalite.PNG?raw=true)

Vega-Lite is a new, high-level visualization tool that uses JSON syntax to create and format graphs. The creators of Vega-Lite provide a browser IDE to try it out, but it can also be imported to a javascript/html file to be used as a webpage.

Setting up Vega-Lite in a webpage was suprisingly very easy, as the github page/website of vega provided a simple guide for the whole process. Once the frame of the webpage was set up, all I had to do was create/format the chart inside of a single variable. Using JSON syntax, creating the graph was very simple, as encoding x, y, color, and point size was as easy as pointing to the variable they would be based on and mapping it.

The only difficulty I had when creating the visual was loading the csv into the index file outside of directly making it through github (Attempted using sublime, not recommended). Once I managed to properly load the data, making the visual was a breeze. With a little bit of studying documentation, Vega-Lite easily became a simple, easy-to-use visualization tool. I don't think it can go into the fine details such as d3, but for a quick to set up graph, it is pretty good.

Sources:

Website Index : https://mfaria27.github.io/a2-DataVis-5Ways/MFaria27_As2-Vega/index.html

https://vega.github.io/vega-lite/examples/circle_natural_disasters.html

===

# D3 / Javascript

![alt text](https://github.com/MFaria27/a2-DataVis-5Ways/blob/main/img/MFaria_As2-d3.PNG?raw=true)

Sources:

D3 is a javascript library that can be used to make various visualizations on a webpage, including normal, interactable shapes and charts.

Loading the data into the webpage was relatively easy, as d3.csv() loaded the data into a function that could be created to add everything needed from the dataset into the visualization. Creating the axises was pretty strange, as I had to define the length and position of each axis individually in the svg. Adding axis titles was very annoying, as I needed the percise location of the text in order to line it up properly. Making points using the data was a little bit tricky to understand, but after looking at some examples, it was fairly easy to implement.

D3 was the method of visualization that took me the longest to complete. While d3 can be used to create pretty much anything in terms of visualization, it is the method that requires the most finite details out of all of them. Every single aspect/trait in the visualization had to be defined someway. While it was difficult to create, d3 is definitely the best visualization tool for creating anything, as there are too many ways to make visuals.

Website Index : https://mfaria27.github.io/a2-DataVis-5Ways/MFaria27_As2-d3/index.html

https://www.tutorialspoint.com/d3js/d3js_axis_api.htm

https://www.d3-graph-gallery.com/graph/scatter_basic.html

===

## Technical Achievements
<ul>
  <li>Other than Excel, all of the visualization methods were things I was learning from with little to no previous experience, so having some of the basics of all of these languages/graph creation methods under my belt is very nice.</li>
  <li>In Excel, separating all the necessary data into columns by manufacturer, MPG, and weight was a pretty technical/brute force solution to my troubles setting up a graph in excel.</li>
  <li>Creating two legends using matplotlib by creating a second artist and adding it to the graph before the first one to make it so that the second legend didn't overwrite the first was a difficult solution to adding multiple legends.</li>
</ul>

## Design Achievements
<ul>
  <li>Excel and D3 javascript did not have direct mapping on weight to size, so I had to manually map values in order to get an accurate size by weight.</li>
  <li>Working with hex colors to get visibile colors that stayed accurate to the original graph that we had to create.</li>
</ul>
