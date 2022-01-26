# 02-DataVis-5ways

# Assignment 2 - Data Visualization, 5 Ways

Using the dataset "cars-sample.csv", I created five visualization using various libraries and languages.  
The goal was to use this chart as reference and recreate it using each tool.

![ggplot2](img/ggplot2.png)

Features preserved in replication included the following:

- Data positioning: it should be a downward-trending scatterplot as shown. Weight should be on the x-axis and MPG on the y-axis.
- Scales: Note the scales do not start at 0.
- Axis ticks and labels: both axes are labeled and there are tick marks at 10, 20, 30, etcetera.
- Color mapping to Manufacturer.
- Size mapping to Weight.
- Opacity of circles set to 0.5 or 50%.

Other features are not required. This includes:

- The background grid.
- The legends.

Note: For the missing MPG for the two Ford cars, I sub'd them with the MPG from the closest weight of that car type (Ford) this allowed me to complete the data set for visuals instead of a point that was not likely accurate (high weight and zero MPG, which is what is shown when you plot the missing data without changes)

Note that some software packages will make it **impossible** to perfectly preserve the above requirements.
Be sure to note where these deviate.

## Libraries, Tools, Languages Choosen

- R + ggplot2
  -Javascript + d3
  -Python + mathplotlib
  -Tableau
  -Excel

## Tips

- If you're using d3, key to this assignment is knowing how to load data.
  You will likely use the [`d3.json` or `d3.csv` functions](https://github.com/mbostock/d3/wiki/Requests) to load the data you found.
  Beware that these functions are _asynchronous_, meaning it's possible to "build" an empty visualization before the data actually loads.

- _For web languages like d3_ Don't forget to run a local webserver when you're debugging.
  See this [ebook](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server) if you're stuck.

# R + ggplot2 + R Markdown

Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.

- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

# Javascript + D3

Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.

- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

# Python + Matplotlib

Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.

- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

# Excel

![excelcars](img/excelcars.png)

This tool was something popular in workplaces but far from my favroite, Microsoft Excel. Importing the data is easy enough and autoloads CSV files correctly, however there are major drawbacks that make it not my favorite. Excel does not allow you to add white space before the start of the axis bounds, which made it impossible to have the x axis start at 2000 and the y-axis start at 10, since it cuts off the data. To avoid missing points, I set the axis bounds lower than the example, so the x-axis started at 1000 and the y-axis start at 0. Knowing how to use formulas in Excel is useful when working on larger data sets and manipluation of the CSV itself, but the system starts to lag when creating charts and graphs and slows down my system. If working with smaller sets, this is a fine tool, but for larger sets of data I would not use this again by choice.

# Tableau

Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.

- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

## Technical Achievements

- Description of the Technical achievements you attempted with this visualization.
  - Some ideas include interaction, such as mousing over to see more detail about the point selected.

### Design Achievements

- Description of the Design achievements you attempted with this visualization.
  - Some ideas include consistent color choice, font choice, element size (e.g. the size of the circles).
