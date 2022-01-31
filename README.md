Assignment 2 - Data Visualization, 5 Ways  
===



# R + ggplot2 + R Markdown

![ggplot2](https://github.com/trashrat3000/a2-DataVis-5Ways/blob/main/img/a2-r.PNG?raw=true)

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To visualized the cars dataset, I made use of ggplot2's `geom_point()` layer, with aesthetics functions for the color and size.

It didn't take me long to find the correct documentation for this at all, once I downloaded the in-class example and had an idea of what I was doing nearly instantly. Thank you for sharing that with us!

# d3 in Observable

![d3](https://github.com/trashrat3000/a2-DataVis-5Ways/blob/main/img/a2-d3.PNG?raw=true)

d3 is generally very helpful for creating pretty visualizations, so I'm not particularly sure why the developers made it so tricky to make a chart. Maybe something more specialized like JSCharting would have been more up the chart-making alley.

After Assignment 1, the class example, and Observable's example scatterplot notebook, it was fairly easy to create a scatterplot, however, adding colors to the right things at the right times gave me some difficulty. I tried using a different notebook example to add a legend, and that seemed like it would be very difficult, so I decided against it. Furthermore, attempts to edit the axis' and background given didn't work out, so I didn't worry about it and carried on.

I'm not fully convinced the download from Observable is useable, so here's the published page: https://observablehq.com/@trashrat3000/a2-d3

# Python + matplotlib

![matplotlib](https://github.com/trashrat3000/a2-DataVis-5Ways/blob/main/img/a2-matplotlib.PNG?raw=true)

Python is the language that people told me to get into in high school and I never did, and then didn't hear about for a few years. It's very general purpose and modular, which can be shown by the fact that you need to install another module onto it in order to install things (pip), another little fella to get numbers (numpy), and pandas ([pandas](https://miro.medium.com/max/1400/1*6d5dw6dPhy4vBp2vRW6uzw.png)), which [according to someone on StackOverflow](https://stackoverflow.com/questions/3518778/how-do-i-read-csv-data-into-a-record-array-in-numpy), are useful in this situation! Finally, matplotlib was also used, which allows you to create a scatterplot INSTANTLY.

Again, it was tough to change the background and recreate the legend, and I gave it a shot! But arrays are still kind of an enigma to me, and I hope to better understand how to shuffle them around the way that I would like them to be. I was able to get the size legend down, though.

# Excel

![excel](https://github.com/trashrat3000/a2-DataVis-5Ways/blob/main/img/a2-excel.PNG?raw=true)

Excel is my childhood best friend, and we stil hang out together a lot in college. Making a bubble chart using it, however, felt a bit like opening a forbidden book. Features that comprised the graph that I wanted to make felt unintuitive, and even I was making it I felt it was slightly out of reach. Standard charts in Excel generally don't look bad, they just look... standard. I'm impressed with how out there this excel chart looks, despite it not having the size legend. I'm sure if I hunted a little more on the bubble chart documentation I could have found it somewhere, but wasn't able to.

# Flourish

![flourish](https://github.com/trashrat3000/a2-DataVis-5Ways/blob/main/img/a2-flourish.png?raw=true)

I can see why Flourish has been used more and more in recent years, it's lovely and easy to use. I'll definitely consider using this when I have data sets that aren't already in Excel and want a refined, pretty graph that doesn't need to go buck wild with features. 

You can find the interactive version here: https://public.flourish.studio/visualisation/8559488/

## Technical Achievements
- **Ex-pert**: I feel I was able to nail the chart in Excel, and while that means I just spent a lot of time clicking around, it made me feel more competent about the software than I have in the past.
- **Snake Charmer**: With bare minimum coding experience and not a lot provided to me, I feel like I was able to intuitively read into what I needed to do when creating the graph for Python using Matplotlib. It seems trivial but a week or two ago I would have been stumped a lot more frequently, I feel.

### Design Achievements
- **Understanding Color and Sizes Roles in Graphs**: I feel like as I went foreward with creating for this project, I understood a little bit more about what I wanted to see in a graph, and it didn't quite have as much to do with replicating the original as it did creating something analyzeable and readable for all, something you could quickly look at and obtain the information that you need from the visual aid.
