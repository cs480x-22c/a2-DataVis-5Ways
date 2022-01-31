# 02-DataVis-5ways

Assignment 2 - Data Visualization, 5 Ways  
===



# R + ggplot2
R is really easy to use especially in conjunction with the ggplot2 library. Because R is meant to be used as 
a statistics library, it was really easy to load the data. In order to implement the scatter plot, I used `geom_point()`
for the scatter plot and `aes()` for the color and size. One issue that caught me off guard initially was that I had
to place the alpha outside the `aes()` otherwise, it would show up in the legend. 

![ggplot2](img/ggplot2.png)

# Python + pandas + matplotlib
Python at base is a very easy to use language with a lot of flexibility; however, with that flexibility means that
it was difficult to get the exact customizations correct. In order to load the data conveniently, I ended up using the 
pandas library to convert the csv into a dataframe. Next I used matplotlib to actually plot the points. Because 
matplotlib is a graphing library, it was very easy to set the axes and the actual color and size initially. The 
only difficult part was actually setting the legend. The legend was completely unintuitive, and I ended up having to 
split my scatter plot into five different scatter plots for each of the manufacturers to get the legend to load properly.
Although python is in general a useful language, I would not recommend it for graphing.

![matplotlib](img/python.png)

# d3
d3 was by far the hardest library to work with. Although it is highly customizable, there were so many small details 
that had to be correct in order for the whole graph to function. To start I used this [scatter plot implementation](http://bl.ocks.org/weiglemc/6185069).
Unfortunately, it was written in a deprecated version of d3, so I ended up going through and updating a lot of the functions.
Because d3 is web based, a lot of the initial coordinates had to be manually supplied. I liked that d3 had so many 
features, but they were hard to understand since documentation was poor. Getting the legend to work in d3 was also difficult.
Although the initial code had a legend, that legend did not look like the legend we were trying to copy, so I ended up
having to manually align the dots with the text. The axis labels did not show up when they were appended to an `append`, 
so those also had to be separated which didn't make any sense. Overall, d3 just felt very finicky.

![d3](img/d3.png)

# Excel
Excel is primarily a spreadsheet program which made it incredibly poor for visualization. Although loading the data was 
easy, I had to construct new columns for each manufacturer much like python and populate them with `IF` statements to 
get the colors working properly. For customization options like dot color, border, and axes, I had to work through a GUI 
which was very slow. I also had to manually convert each of the MPG cells to numbers because Excel read them as text 
because of NA. Although I was able to get the color legend working, the bubble plot was only able to show three manufacturers, 
so I was unable to show weight as marker diameter.

![excel](img/excel.png)

# Tableau
Tableau is a data visualization software used widely in both industry and academia. The hardest part about using it was 
actually getting installed in the first place. Because it is paid software, you need to get a license in order to use it; 
however the licensing process was not immediately clear. Initially I thought I could get Tableau through WPI, but WPI 
only provides the license to faculty and staff, so after a few emails back and forth, I was pointed to the free student 
license. Once I actually got in, Tableau was very easy to use. There was a bit of a learning curve figuring out what all 
the menus did, but once I read a few official forums, everything clicked easily. The one issue is that when the data file 
location changes, everything breaks and the path is not updated. It seems like Tableau uses the absolute path to data 
rather than the relative path.

![tableau](img/tableau.png)

## Technical Achievements
- Implemented a color legend in every language

### Design Achievements
- Color matched each of the manufacturer classes
- Matched the ggplot style in Excel
