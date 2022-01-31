Assignment 2 - Data Visualization, 5 Ways  
===

# Numbers App on Mac

I came upon this visualization tool by accident. When I open the cars-sample.csv file, it automatically opens with the Numbers App on my desktop. Here, you can select to add a chart and then select the data that you would like to use. It is similar to Excel, but I chose to use this tool over excel because you do not have to import the csv file, it is right there in a nice table format to use. There are many capabilities that I was surprised about using this tool: you can choose where the tick marks are, add in grid lines, choose where you would like the axes to start, and have the color opacity. I was also surprised when I was able to select the weight as the factor that determined the circle size. However, with this feature the bubbles are way too big, and there is no way to  scale them down, as they are determined by the weight column.

![numbers](img/Numbers.png)

# Matplotlib + Python

Using Matplotlib contained a lot of built in functions designed exactly for what I was trying to do. In the function scatter(), there are inputs for color and the size of the bubbles which makes it pretty easy to create a graph that has the bubbles a different size, and color. On the other hand, I found it difficult to add in tick marks. There are two functions I used called yticks() and xticks() which are supposed to set the x and y tick marks and locations on the graph, but when I use this function, only the numerical values for each tick is shown, and not the actual tick mark itself. It was easy, though, to have the axes not start at zero and still have the ticks at the desired locations. Some of the other tools made it difficult to have the right tick numbers when altering the axes.

![pythonPlot](img/pythonPlot.png)

# MATLAB

This was a very interesting visualization tool, because it was relatively easy/simple to do everything, but not at the correct time. The function scatter() allows inputs to not only contain the x and y axis, but also to have the plot size relative to its weight value, and the plots filled in. The function gscatter is very nice in that it has the inputs to have the x any y axis and values, and the third argument is how the colors are sorted. This function is super convenient because you do not have to assign any colors to the column, MATLAB takes the different Manufacturers and automatically creates a color pattern. However, with the gscatter function, there no longer are arguments to have the size of the plots relative to the weight column in the csv. Also, the opacity of the plots are not set the same way as before, the line alpha function does not set the opacity. Another thing that I really liked about MATLAB is that it automatically created the correct axes to fit the data, meaning that the graph did not automatically start at zero.
	NOTE: In order to run this code for the colors, comment out line 3 with a “%” and uncomment out line 4.


![MATLABcolor](img/MATLABcolor.png)
![MATLABsize](img/MATLABsize.png)

# R + ggplot2

I think that I was able to use the shortest amount of lines of code for this plot. It is very efficient at reading a csv file and understanding all of the parameters needed for plotting. The function ggplot() has parameters that take in the data frame, and by doing so, the other input parameters are understood to come from that table so for the X and Y coordinates, you only need to state the column names. Other parameters for this function include the color and size and for this you also only need to state the column name it is coming from and ggplot knows how to convert different weights to its plot size and different manufacturers to a different color. Also, the opacity is set to 50% inside of this function, and the rest automatically occurs: axis labels, tick marks and locations, gridlines (both major and minor), and a legend for the size and color. 
	NOTE: when running the rPlot.R file, the path to the csv file needs to be changed since the path created now is a path only on my computer. This is on line 3 of the file.

![MATLABcolor](img/MATLABcolor.png)


## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI Forever**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: As demonstrated in my colorscheme...
