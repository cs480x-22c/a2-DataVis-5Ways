console.log(d3); // test if d3 is loaded

//Adapted from http://bl.ocks.org/weiglemc/6185069
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
// setup x 
var xValue = function(d) { return d.Weight;}, // data -> value
    xScale = d3.scaleLinear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.axisBottom(xScale).ticks(4);
// setup y
var yValue = function(d) { return d["MPG"];}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.axisLeft(yScale).ticks(4);

// setup fill color
var cValue = function(d) { return d.Manufacturer;},
    color = d3.scaleOrdinal(["#cdce8e", "#eeb2f2", "#f3b7b4", "#95d9bb", "#93d3f4"]);

// add the graph canvas to the body of the webpage
var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
var z = d3.scaleSqrt()
    .domain([1000, 5000])
    .range([2, 10]);

d3.csv("cars-sample.csv", function(d) {

  // change string (from CSV) into number format
	d.Weight = +d.Weight;
    d["MPG"] = +d["MPG"];
	return d
}).then(function(data) {

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	 .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Weight");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
     .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("MPG");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", function (d) { return z(d.Weight); })
      .attr("cx", xMap)
      .attr("cy", yMap)
	  .attr("fill-opacity", 0.5)
      .style("fill", function(d) { return color(cValue(d));});

  // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored circles
  legend.append("circle")
      .attr("cx", width - 100)
      .attr("cy", function(d,i){return 10}) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("r", 5)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})
});