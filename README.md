# 02-DataVis-5ways

Assignment 2 - Data Visualization, 5 Ways  
===
# R + ggplot2 + R Markdown
I used ggplot2 to create this scatter plot. This was not too difficult but I did have some trouble properly importing the cars-sample.csv file into R. I made use of the geom_point() function within ggplot which helps displaying the relationship between two continuous variables in a scatter plot.

## Libraries:
- ggplot2

![Screenshot (55)](https://user-images.githubusercontent.com/48228807/151817989-af94b289-eed9-494a-9e8e-ee6609f07232.png)

# Python 
The first plot I made with Python was with Pandas and Matplotlib. Matplotlib is a datavisualization library in Python that is an extension of numpy. This was easier than using d3 but was difficult to learn the functionality of the Matplotlib function, especially when it came to color mapping. First I imported the cars-sample.cvs file with Pandas and converted it into a dataframe. This made the data easier to work with and compatible with the Matplotlib scatter plot function. Then I applied the scatterplot using the data frame created and Matplotlib functions.

The second plot I made with Python was with Seaborn and Pandas. Seaborn scatterplot is similar to Matplotlib but made the scatterplot more customizable and automatically created a legend for the plot based on manufacturers when specified. 

## Libraries:
- Pandas
- Matplotlib
- Seaborn 

Matlibplot:
![PythonMatlibplot](https://user-images.githubusercontent.com/48228807/151818288-502f6f17-fc42-49b7-b2ea-c39cf86a1b7a.png)

Seaborn:
![PythonSeaborn](https://user-images.githubusercontent.com/48228807/151818406-47ef3c13-e169-447a-b151-ab2f894bce43.png)

# JavaScript + D3
To create the scatterplot in d3 was more difficult than in R. I was able to create this by importing the csv file, scaling the x and y axis, then appending circles to the graph using the data. The d3.scaleOrdinal library was used to color code the data by Manufacturer. 
A new feature I used was D3 Transformation supporting Translate. Translate takes two options from the x and y axis and scales them based on specifications. This is very helpful when setting the display of the scatterplot to properly scale svg and g elements. Another useful tool was d3.scaleLinear(). This tool creates a scale with a linear relationship between input and output. This was helpful to scale the data to the axis when displaying. 
To add some novel functionality, I added a mouseover event. When the user drags their mouse over a data point, the point will increase radius then go back to normal when the mouse is out. 

## Libraries:
- d3
- d3.scaleOrdinal
- d3.scaleLinear

![Screenshot (56)](https://user-images.githubusercontent.com/48228807/151818860-46e59a28-19c5-4bd3-88b5-5dae3316d09c.png)


