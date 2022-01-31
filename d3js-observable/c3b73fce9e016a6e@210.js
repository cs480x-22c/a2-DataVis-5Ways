export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["cars-sample.csv",new URL("./files/ea0a3cb237bf69c96d91b39a91637d42d70fef9b769e6917d9d5123f33b3d22494553be08503991d5b8adc7550d89155c095d93da5f98f96325225786ddda95b",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# CARS

GET YOUR FREAKING CARS HERE`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","xAxis","yAxis","data","x","y"], function(d3,width,height,xAxis,yAxis,data,x,y)
{ //idk what is happening up here, most of it was just here on observable's sample scatterplot and you know what i'll take that
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);
  
//define the colors
  var color = d3.scaleOrdinal()
      .domain(["bmw", "ford", "honda", "mercedes", "toyota"])
      .range(["crimson", "goldenrod", "mediumseagreen", "DeepSkyBlue", "orchid"])
  
//pretty cirmcle
  svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("cx", d => x(d.Weight))
      .attr("cy", d => y(d.MPG))
      .attr("r", d => [d.Weight/300])
      .style("opacity", 0.5)
      .style("fill", function (d) { return color(d.Manufacturer) })
      /*.attr("fill", function color(data) {
        if(d.Manufacturer = "Honda")
          return("green")
          else return("blue")});
        for (var i=0; i<data.length; i++) {
          if(data[i].manufacturer="ford")
            return("red")
          else return("blue")
        }})*/
  ;
//label x
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 0)
    .text("Weight (lbs)");
//label y
svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 0)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Miles per Gallon");

  return svg.node();
}
);
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("cars-sample.csv").csv({typed: true})
)});
  main.variable(observer("height")).define("height", function(){return(
400
)});
  main.variable(observer("x")).define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3.scaleLinear()
    .domain(d3.extent(data, d => d.Weight)).nice()
    .range([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","data","height","margin"], function(d3,data,height,margin){return(
d3.scaleLinear()
    .domain(d3.extent(data, d => d.MPG)).nice()
    .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x"], function(height,margin,d3,x){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y"], function(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 25, right: 20, bottom: 35, left: 40}
)});
  return main;
}
