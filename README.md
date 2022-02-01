# R + ggplot2 + R Markdown

!Note! The code shown in class was used, I used the documentation of `geom_point()` shown in class(https://ggplot2.tidyverse.org/reference/geom_point.html) to complete the size and opacity of the graph.

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To visualized the cars dataset, I made use of ggplot2's `geom_point()` layer, with aesthetics functions for the color and size.

While it takes time to find the correct documentation the prof showed us where it was =), these functions made the effort creating this chart minimal.

This could be usefull for generating simple plots that are easy to implement very quickly.(i.e. plotting 100's of plots it would be very usefull).

No data manipuation was necessary.

![R](img/a2-R.png)

# Matlab

MATLAB is a programming and numeric computing platform used by millions of engineers and scientists to analyze data, develop algorithms, and create models(From their website). Matlab is a language I have used before in many math classes.

It was really easy to plot the dataset as there are many function in matlab that make reading a csv file easy.

Trying to get a legend to work for my data types was impossible. For some reason matlab insists on having the legend partially preset making it incredibly frustrating to work with.

I would only use this for comparing functions as it lacks the functionality of most of the programs and tools I used.

The only data manipulation that was done was replacing car manufacturers with colors, so they could be passed through the scatter() function. As well as shrinking the points as they were originally to large.

![matlab](img/cars-sample-matlab.png)

# d3 + Observable Notebook

!Note! The code shown in class was used, Link to Notebook: https://observablehq.com/d/9817b361aab1c8f5

D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life. Observable Notebook allows you to interact with other peopes code in a front-end heavy environment.

It was really easy to run code and get immediate feedback. I liked how code could be orginized and moved. I thought d3 and R (with their respective tools) were much easier to debug code in.

I though trying to write code in the notebook was more time consuming than an IDE, as it lacked many features that deacrease development time.

Overall I would use this again if I were trying to develop code so people could learn from it(i.e. teaching). I would not use it for personal projects again.

Only manipulated weight data to make data points larger.

FYI: I made the design decision to not include grid lines since they made it less obvious when points were overlapping.

![d3](img/a2-d3Plot.png)

# Flourish

Flourish is where you can turn your data into stunning charts, maps and interactive stories. 

It was the quickest and easiest by far to complete.

Super easy and intuitive. Had amazing load times as well, could not have been faster.

A slight knock is that some small features were missing, such as being able to show a legend for the sizes(might be wrong but i looked for almost an hour).

I would use this again if I needed to get a good scatter plot really fast.

No data manipulation was needed.

![Flourish](img/a2-flourish.png)

# Datawrapper

Datawrapper lets you show your data as beautiful charts, maps or tables with a few clicks.

It was also very easy to use, although the set up was not as easy. One of my favorite things about this site was they had really strong accesibility.(i.e. little motion blur and they also had settings for color blind people)

A slight knock is that some small features were missing, such as being able to show a legend for the sizes(might be wrong but i looked for almost 1/2 hour).

I would use this again if I needed to get a good scatter plot really fast.

No data manipulation was needed.(really similar to flourish but slightly worse)

![datawrapper](img/a2-datawrapper.png)

## Technical Achievements
- **Got all Pictures to be displayed in a webpage I made =)**: I thought it would be cool to post them to a webpage, I included a link back to this github project there. Link: https://5-charts-5-libs-tools.glitch.me/
- **I made the website look decent with CSS**: I would have added more to it like voting on what chart is best and having a db like mongo db record the results but I ran out of time =(
- **First time using Flourish**:
- **First time using R**: Although we did get help from the prof
- **First time using Datawrapper**:



### Design Achievements
- **Used matlab help Center for colors**: https://www.mathworks.com/help/matlab/creating_plots/specify-plot-colors.html 
- **Installed ColorZilla**: Helped me make legends and identify colors in hexadecimal.
- **Used circle outline in d3**: I did this to better highlight cars that were similar to one another in terms of weight and MPG.
- **I made sure colors and sizes were distinguishable**: This took a lot of work on some of the libraries/tools, but was easy for most of them. I also tried to make the colors look nice together.
- **Looked through matlab documentation for legends**: 1 hour of my life i'll never get back
