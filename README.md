**#javascript - d3**

https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
I used some starter code for the graph's x and y axes and scaling data to the graph. It can be found at the link above. I only used a portion of what is found in the link above, and what I used is both marked down in my .html file and has been changed at least somewhat by me to add necessary elements (such as axes labels) and to ge the margin sizing right, so I can attest to knowing what I was doing.

d3 is the javascript data vis library we're currently using in this class, so it hardly needs an introduction. While I did need some assistance in setting up the graph (see above link and note), I was able to read the data in adn create the chart just fine, and I felt like I had the most creative freedom in terms of what I could do with the chart. I really wanted to animate things, but all I had time to do was make the chart interative by displaying data. The only snag I really hit was that I couldn't read in the .csv file's MODEL.YEAR column when trying to display data on mouseover because of the "."; please don't use "."'s in spreadsheets. Use underscores. It makes life easier.

I could see d3 being useful in the future for pretty much any vis I want to make. It feels powerful, and I know that animations are a very real possibility, even though I haven't figured them out yet. Also, it's convenient that you can just make a vis and then embed it in a website, since everything is done in js/html.

For hacks and manipulations, I was easily able to highlight/unhighlight datapoints on mouseon/mouseoff, but I had a harder time getting text I displayed about the data point to disappear, so I just appended a white rect over the text on mouseoff and called it a day... haha. Also, the legend text took some trial and error, but I eventually got the spacing right. If only I knew d3 a bit better, it could have been much more elegant.

**NOTE: IMAGE IS MUCH EASIER TO SEE IF YOU CLICK ON IT. APOLOGIES FOR THE POOR SIZING IN THE EMBED**
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/bdbc60b7dc78303589b323bd8bb2d8a3d341fc8b/img/javascript%20-%20d3.png)

**#r - ggplot2**

R and ggplot2... where do I start. I hate R. I had a really bad experience with it in another class and I swore to myself I'd never use it again. HOWEVER, ggplot2 made this the easiest graph out of the 3 coding libraries I used. While I didn't feel that I had as much creative freedom as I did with d3, I was able to make the graph in 2 lines, in 5 minutes: load in the data from the csv, and make the chart. ggplot2 handles the rest.

I would see this being useful in the future for simple of quick charts, but nothing more than that. I wasn't able to make the chart interactive after trying by installing a couple other libraries, and animations are out of the question. d3 just has it beat. That, and I didn't have to use any hacks or data maniipulation to get the right chart. It did it all for me with no effort required. Convenient, powerful, but takes the fun out of things, and very little flexability present.

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/2e64181fa7fc97fc10525b2345f26b49bca22e52/img/r%20-%20ggplot2.png)

**#python - matplotlib & pandas**

Python and matplotlib/pandas was easily the hardest of the 3 libraries I succeeded in making charts in. What took forever was the color-mapping. Python's color mapping is fuuuuuunky. After a few hours of trying, it still didn't come out 100% correct, and I had to give up on adding a legend, but I'm still proud of the result... kind of. d3 was more flexibile, more powerful, and more convenient.

I can't see this tool being very useful in the future unless you have a python specific program that requires a simple vis and you don't know how to link languages or cross-embed elements - a very niche situation. Also, I guess you could consider the panda library my hack for this one, since I had to use it to read in the csv in a more conveniently-usable format than I could with matplotlib in order to color-map at all. 

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/cbce64722c411d923ba33aaad92b24fa9f30fa99/img/python%20-%20matplotlib%20&%20pandas.png)

**Flourish**



Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%201.png)
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%202.png)
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%203.png)

**#SPSS**

**#java - javafx**
I came VERY close to making JavaFX work, but the libraries do not allow you to color individual points/series... shame

**#Technical Achievements**

**#Design Achievements**

*ADDITIONAL NOTES*
**#tableau**
Hot garbage. Absolute flaming trash. Please take this off of the a2 recommendations list in the readme.

**#MicrosoftBI**
Does not work with WPI emails, but requires microsoft customer email (cannot be personal email).
