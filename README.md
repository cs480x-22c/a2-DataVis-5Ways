Assignment 2 - Data Visualization, 5 Ways
===

Summary
---

For Assignment 2 in CS480X 

-   **Miles Gregg**

    -   GitHub: https://github.com/MilesGregg

Links
---

- GitHub Pages: https://milesgregg.github.io/a1-ghd3/
- GitHub Repository: https://github.com/MilesGregg/a1-ghd3
- https://public.flourish.studio/visualisation/8558801/

d3
---

d3 is getting easier to use . I started out using d3 to make the graph becuase I tought it would be the most difficult to design and make the replicate. However it wasn't that bad to implement once I got the initial desin of the axis and lines of the graphs done. d3 has so much more flexiablity to making the graphs though compared to the other four tools I used for this assignment. 

Python Plotly
---

Python being one of the most used programming languages has some incredable easy graphing interfaces. I usually use matplotlib for graph but I figured that I needed to explore a different plotting tool for python which I later found plotly. Plotly is a very easy to use graphing interface which takes up only a couple lines of code to parse and display your intended graph. I used pandas to read the csv locally and then graphed with plotly which was super easy to do. Plotly ouputs the data graph to local host browser which displays the graph and points. You can also hover of the points in plotly which will tell you move information about a specific point. 

![alt text](https://github.com/MilesGregg/a2-DataVis-5Ways/blob/master/img/d3-Graph.png?raw=true)

R + ggplot2
---

I used R once before when I took statictics which was useful when graphing the car data. I was able to graph the data correctly only with a few lines of code. Implementing the graph was really straight forward first R has a built in csv reader to read the data and parse it correctly. 

Using only 

Vega-Lite
---

Vega-Lite was a very simple and easy to use grpahing tool that is open sourced also. It uses just a simple json file to read specific graphing paramaters to read the data and output a very nice graph from that data. Vega-Lite doesn't have a nice GUI interface like Flourish does but using the json file is easy to use. The website auto updates when you type new information into the json file. I believe this is the future graphing tool because it is very easy to use. It also allows you to import your csv data imput into Vega-Lite which. The documention for Vega-Lite is very nice to use and there is a ton of examples that you can use to model your plot off of.

Technical Achievement Description
---

For the techical achievement for this assignment I was successfully able to get data from the California Covid-19 Hospital Data Website: https://data.chhs.ca.gov/dataset/covid-19-hospital-data. This allowed me to get certain data from different months to plot using d3. I plotted Covid-19 data in the state of California for  the months of March and December of 2021. Using Node.js http-server I was able to reload the webpage on port: http://127.0.0.1:8080/ whenever the HTML code would change. 

![alt text](https://github.com/MilesGregg/a1-ghd3/blob/master/main.png?raw=true)

Design Achievement Description
---

For the design achievement I was able to make a accurate graph that represents very important data for people to see. I wanted to see the Covid Hospitalizations for the two completely different months of 2021. Designing the graph I made four different shapes for each statisic I am trying to show. The four statistics I'm trying to show are Vax and Unvax Hospitlizations in March 2021 and Vax and Unvax Hospitlizations in December 2021. For the different colors in my graph I was able to use Google Color Picker to choose different colors for different shpaes and lines. 

![alt text](https://github.com/MilesGregg/a1-ghd3/blob/master/color_picker.png?raw=true)

The polygon shapes were very difficult to do since I had to make points around the current point on the graph. I did this with the following code below. Basically it has 5-3 different points around the current point we are trying to plot. The 5-3 varies based of the shape I am trying to plot. It will then draw the polyPoints variable on the svg using the polygon feature in d3js. The only diffence between the triangle and pendagon code is that the array is different on the second line of code. The pendagon is a size of 5 and triangle is a size of 3.

```js
var polyPoints = []
var pendagonSide = [[-10, -10], [10, -10], [15, 5], [0, 20], [-15, 5]]
for (var i = 0; i < vax_hos_march.length; i++) {
    var outputString = "";
    for (var j = 0; j < pendegonSide.length; j++) {
        var x = vax_hos_march[i][0] + (pendegonSide[j][0]*0.025);
        var y = vax_hos_march[i][1] + (pendegonSide[j][1]*0.15);
        outputString += xScaleGraph1(x.toString()) + "," + yScaleGraph1(y.toString()) + " "
    }
    polyPoints.push(outputString);
}

svg.append('g')
    .selectAll("polygon")
    .data(polyPoints)
    .enter()
    .append("polygon")
    .attr("points", function(d) { return d })
    .attr("transform", "translate(100, 100)")
    .style("fill", "#1900ff");
```
