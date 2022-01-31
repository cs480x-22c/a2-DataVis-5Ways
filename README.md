![rplot](img/carRplot.png)
#R ggplot2

Using the R ggplot library was very simple and easy to use. Initially, it was kind of difficult to get the scatter point sizes to correspond to the weights because we didn't have a column readily accessible like the manufacturer column. So after creating the size column, I was able to assign a size for each data row corresponding the row's weight. After that, it was simple, I just had to input my size column into the size parameter in the scatter plot function. Also to add a little bit more interactivity, I used the ggplotly library which allows the user to see the point statistics when you hover over it. And it is very easy to implement, it only takes a few more words of code rather than using the standard scatter plot function. It was also nice that the legend was automatically included. I think the R ggplot library will always be used in the future, just because of its simplicity and there are lots of ways to customize the graphs. I think the r ggplot library is great for people who don't have an abudance of coding experience, because you can get informational graphs without writing many lines of code

![rplot](img/d3CarScatter.png)
#D3 Visualization

Source Code: https://vizhub.com/forcox43/1c117b41dbdd47769ed9fb9804b015f9?edit=files


Using the d3 library to make the scatterplot was a little more trickier than using Python and R. I think this is because Python and R have dataframe objects where you can look at more interactively. But since JS is more web programming, you don't really have a dataframe to look at while you are coding. Also, R and Python have existing scatter functions to use. But in D3, there is no scatter function, you have to a lot of the work manually, like making the circles, axises, titles, xticks, yticks, etc. Also, it was difficult to get the axises right because again we are working with an html web page. You have to add all the attributes to your layers manually. But since it is more manual work, it is very easy to customize and getting the size and manufacturer categories was extremely easy. I was able to make the circles pop up larger when you hover over it and small again when you move the mouse away, and this was possible with the flexibility that D3 had to offer. I think D3 will continue to be very useful to computer/data scientists with coding background because you can make any type of visual with interactivity because you are not really using existing functions like R and Python, you are writing your own functions. Also, I had to play around with the visualization a lot more, because at times when I changed one thing, the whole visual would render differently.

![rplot](img/matplotlibCarScatter.png)
#Python Matplotlib
Making this graph in matplotlib was very simple because the library has a built in scatter function. It was initally a little hard to get the color groupings, unlike R, I actually had to create a color map which I inputted into the scatter function. I also had to make a size column, similar to r, and I did this by assigning a size based on the weight value. Matplotlib also has built in functions to set the axis titles, xticks, yticks, etc. I think matplotlib was the easiest library to make this scatter plot with because the built in functions perform all the tasks for you and atleast for me, the pandas data frames are much easier to handle than the R dataframes. I think the matplotlib library will continue to be huge in the future because python is one of the most popular programming languages and there are thousands of graphs you can make, including 3-D graphs. Unlike R, I manually had to set the legend. 

![rplot](img/seabornCarScatter.png)
#Python Seaborn

Similarily to matplotlib, using seaborn was extremely easy because of the built in functions. I felt seaborn was easier to use because it had a built in parameter called "hue" and when I passed in the manufacturer column, it color coded the points based on the manufacturer. I didn't have to manually make a color map like matplotlib. I also liked how the seaborn graph automatically produced a legend without specifying it to. I think Seaborn is a great library and will have many applications in the future, because matplotlib is more for exploratory analysis/basic plotting. But seaborn has many visualization pattern capabilities, it is great for heatmaps, and especially pattern visualizations. I think seaborn has more visualization capabilities/flexibility than matplotlib.

![rplot](img/excelCarScatter.png)
#Excel

Even if you aren't a great programmer, I think using python and R is much easier to make this graphs with than excel. With excel, you have to manually create columns for each of the manufacturers to get the color coding. There also isn't any way to change the size of some dots, you either have to change the size of all the dots or none of the dots. I think excel is a great starting place to get used to the data and test some visuals out. But since excel doesn't have too much flexibility, it is difficult to create powerful visuals. With Python and R, with a few lines of code, you can create great visuals and you can customize them very easily by simply justing changing parameter values. I think excel is better than D3 if you do not have programming experience because in D3, you have to manually construct the functions by yourself.

Cars-sample was used in Python and R because it was very easy to remove nan values. But for d3 it was difficult to remove nan values in the code, so I edited the csv file and named it cars-sample2. This allowed me to have no nan issues and it was compatible with d3.js.





Technical Design Achievements:
For the technical design achievement, I focused on using interactivity. The python plots do not have interactivity. But for the R plot, I figured out, instead of just calling the ggplot function, I can actually just import the plotly library. All I did after, was assign the ggplot to a variable p, and then I just ran the ggplotly function on the variable p. Once I did that, I was able to get a scatterplot in which you can hover over a dot and it will tell you the weight, mpg, manufacturer, etc. I was able to also create new size variables by writing a conditional script to assign each data observation a size value. 

I was also able to add some interactivity with the D3 graph. With the help of the "mouse over" function, I was able to add the functionality, when you hover over the points, the circles will appear large with a 0.5 opacity. Once you move your mouse away, the circles will return back to normal. 

For the D3 visualization, I had to hack the x-axis to work. It was initially very frustrating to get the x-axis to work because it was backwards and reversed. But then in the y-scale variable, I was able to subtract values and get the x-scale working.

Design Achievements:
For the design achievement, I utilized a times new roman font for the D3 visualization, because I thought it would add an aesthetic touch. Also, aside from interactivity, the circles have a nice larger design to it because you first see small circles and once you hover, they appear large so the user can really see the color and whats going on. To add a little bit more design, I was able to change the color of the circle to pink and once you unhovered the mouse, the circles would return to regular color and size. For the python graph, I used matplotlib and seaborn. Seaborn uses six versions of the default color palette, deep, pastel, bright, dark, and colorlind. It also has more aesthetically pleasing graphics. I was able to use the matplotlib mpatches function to create a color map (for the legend) and then I was able to pass the five variables created with mpatches into the legend creation function. I also was able to get a grey background grid with white lines. For seaborn, I found out in their functionality, you don't need a color map. You just pass your category column into the hue variable.
