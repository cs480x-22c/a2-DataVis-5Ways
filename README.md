**#javascript - d3**

https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
I used some starter code for the graph's x and y axes and scaling data to the graph. It can be found at the link above. I only used a portion of what is found in the link above, and what I used is both marked down in my .html file and has been changed at least somewhat by me to add necessary elements (such as axes labels) and to ge the margin sizing right, so I can attest to knowing what I was doing.

d3 is the javascript data vis library we're currently using in this class, so it hardly needs an introduction. While I did need some assistance in setting up the graph (see above link and note), I was able to read the data in adn create the chart just fine, and I felt like I had the most creative freedom in terms of what I could do with the chart. I really wanted to animate things, but all I had time to do was make the chart interative by displaying data. The only snag I really hit was that I couldn't read in the .csv file's MODEL.YEAR column when trying to display data on mouseover because of the "."; please don't use "."'s in spreadsheets. Use underscores. It makes life easier.

I could see d3 being useful in the future for pretty much any vis I want to make. It feels powerful, and I know that animations are a very real possibility, even though I haven't figured them out yet. Also, it's convenient that you can just make a vis and then embed it in a website, since everything is done in js/html.

For hacks and manipulations, I was easily able to highlight/unhighlight datapoints on mouseon/mouseoff, but I had a harder time getting text I displayed about the data point to disappear, so I just appended a white rect over the text on mouseoff and called it a day... haha. Also, the legend text took some trial and error, but I eventually got the spacing right. If only I knew d3 a bit better, it could have been much more elegant. (Almost forgot, I had to navigate around the 2 N/A MPG data rows. I hate those rows.)

**NOTE: IMAGE IS MUCH EASIER TO SEE IF YOU CLICK ON IT. APOLOGIES FOR THE POOR SIZING IN THE EMBED**
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/bdbc60b7dc78303589b323bd8bb2d8a3d341fc8b/img/javascript%20-%20d3.png)

**#r - ggplot2**

R and ggplot2... where do I start. I hate R. I had a really bad experience with it in another class and I swore to myself I'd never use it again. HOWEVER, ggplot2 made this the easiest graph out of the 3 coding libraries I used. While I didn't feel that I had as much creative freedom as I did with d3, I was able to make the graph in 2 lines, in 5 minutes: load in the data from the csv, and make the chart. ggplot2 handles the rest.

I would see this being useful in the future for simple of quick charts, but nothing more than that. I wasn't able to make the chart interactive after trying by installing a couple other libraries, and animations are out of the question. d3 just has it beat. That, and I didn't have to use any hacks or data maniipulation to get the right chart. It did it all for me with no effort required. Convenient, powerful, but takes the fun out of things, and very little flexability present.

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/2e64181fa7fc97fc10525b2345f26b49bca22e52/img/r%20-%20ggplot2.png)

**#python - matplotlib & pandas**

Python and matplotlib/pandas was easily the hardest of the 3 libraries I succeeded in making charts in. What took forever was the color-mapping. Python's color mapping is fuuuuuunky. After a few hours of trying, it still didn't come out 100% correct, and I had to give up on adding a legend, but I'm still proud of the result... kind of. Also, the weight mapping worked, but I feel like it's not as pronounced as the rest of the products on this list. Overall, d3 was more flexibile, more powerful, and more convenient.

I can't see this tool being very useful in the future unless you have a python specific program that requires a simple vis and you don't know how to link languages or cross-embed elements - a very niche situation. Also, I guess you could consider the panda library my hack for this one, since I had to use it to read in the csv in a more conveniently-usable format than I could with matplotlib in order to color-map at all. 

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/cbce64722c411d923ba33aaad92b24fa9f30fa99/img/python%20-%20matplotlib%20&%20pandas.png)

**Flourish**

Ah, Flourish... before I found this on the list, I thought I had to hard code all 5 graphs, so you could say that Flourish saved me from losing my mind. Flourish was easy - like, even easier than ggplot2; I gave it the data, it spat out a chart, but at the same time I had so many more customizability options than I did with ggplot2. I could make an interactive chart, give the chart animations. It didn't really feel like a one-and-done deal like ggplot2 did. I still think that d3 takes the edge on flexibility, since the ability to hard code what you want in will always provide more options than a pre-coded site will, but Flourish is really goddam convenient and easy to use.

As far as future use goes, I could see myself using this alongside d3 if I'm ever stripped for time or want to make and embed a really simple chart. I also think it'd be extremely useful for people who are less tech-savvy and don't know how to code. Just like with ggplot2, though, the tool did pretty much everything for me, so no hacks were required. But, unlike ggplot2, it didn't feel as cheap or easy because of the level of customization available to the user. If I chose any 2 tools to learn more about going forward, they'd be d3 in first place and Flourish in a close second.

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%201.png)
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%202.png)
![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/b7d74334aaaefc01d8ddd9cd1c99fa707f986a67/img/Flourish%20-%203.png)

**#SPSS**

By the time I had reached SPSS, I had essentially lost my mind again going through the 3 failed attempts noted below as well as a slew of other datavis sites (visme, adobe kure, excel, google sheets, etc...) that hadn't worked out due to technical restraints. During that time, IBM got the 2 hours it needed to load my webpage so I could download the goddam program :). I don't know what went wrong, but I was pretty livid.

Thankfully, SPSS turned out to be exactly what I needed. It didn't have as many options as d3 or Flourish did, but don't get me wrong when I say that- SPSS has PLENTY of options (just not as many as I would like from a pay-to-use program (don't worry I used the free trial (haha embedded parentheses))). I was able to load in the data and make a grouped scatter plot with sizing and color mapping without much difficulty, and the ability to choose colors with a palette like you would in paint/photoshop was really nice as well. The only thing that was missing was a way to make data transparent. I scoured both the internet and the program itself trying to figure out how to do this, but to no avail. Still, it hit the rest of the requirements, so I stuck with it. Thanks, SPSS!

I could see this being useful in the future... kind of. It's a pay-to-use program that's both less powerful and less flexible than Flourish and d3. Don't get me wrong, Flourish has pay-to-use features as well, but Flourish's free trial is indefinite, while SPSS's is not. As far as data manipulation goes, I did have to remove the 2 MPG N/A rows from the table to get the graphing to work, but other than that not much else was necessary. I still wish there was a clearcut transparency option to go with that color selection, though.

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/e64a53e07bf8c5c29b881ad53bd236a74e404509/img/SPSS.PNG)

**#java - javafx**

JavaFX is the sixth tool on this list, and the fourth library. That's because I didn't manage to get it to work :,( Java, as my first programming language, is somewhat dear to my heart, so I really wanted to make this work, but it just didn't... shame.

The difficulty I ran into was with - drumroll please -  color mapping! And also size mapping, but I didn't give it much thought past not being able to color map. As it turns out, JavaFX is not a great visualization tool! It has no built in support for mapping size, color, or other attributes to inidividual data points or entire data series. Because of this, I don't think this tool can be useful in the future, unfortunately. The libraries would need some serious updating and reworking to change my mind (or maybe I'm just completely missing options I didn't know existed. Oracle doesn't seem to think so, and neither does stack overvlow).

Ironically, this is the library that I'm most proud of my data hack in. I wrote an effective - although somewhat clunky - algorithm to parse through the file data with a scanner and pull out what I needed, since I couldn't find a way to make the libraries do it for me. It's too bad I couldn't get the mapping working in the end. Oh, well. Also, I should note that I wanted to try out Java 2D, but I had a lot of trouble finding anything about it or where/how I can access the libraries, which is why I went with JavaFX, instead. I'll probably reach out at some point looking for info on this library.

![](https://github.com/JoshuaMalcarne/a2-DataVis-5Ways/blob/f526a6776d62eed9121647011bcf9b805ce7dde4/img/java%20-%20javafx.PNG)

**#Technical Achievements**
- Tried to use more than five tools (RIP JavaFX :,( )
- Got familiar with new tools (Flourish, ggplot2, SPSS, python/matplotlib/panda, and JavaFX are all pretty new to me. Flourish and SPSS were fairly easy to figure out, JavaFX required some digging on oracle, and python/matplotlib/panda required some sanity checks and coffee breaks. I'm technically also new to HTML/d3, though I new about the majority of what I used from the last assignment (except for mouseon/mouseoff), so it doesn't really count. I still have to figure out how to do animations in d3, though)
- The d3 graph and the Flourish graph both have interactable datapoints. I'm especially proud of the d3 interactivity, since I made it all myself :)
- Parsed my own data when scanning in the csv file for JavaFX (once again, RIP JavaFX :,( )
- Not sure if it's really an achievement, but managed to avoid the bad data rows in all systems, either by coding an element to check for bad data (d3, python, java) or by removing the bad data (SPSS). Flourish and ggplot 2 dealt with this automatically.

**#Design Achievements**
- 

*ADDITIONAL NOTES*

**#tableau**
Hot garbage. Absolute flaming trash. Please take this off of the a2 recommendations list in the readme.
I don't even want to go into the MULTITUDE of reasons why I've come to hate this program. Just remove it, please.

**#MicrosoftBI**
Does not work with WPI emails, but requires microsoft customer email (cannot be personal email). Is there a registered account we can use this tool on through WPI, like the virtual desktop?
