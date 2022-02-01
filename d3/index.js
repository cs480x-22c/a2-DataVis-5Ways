
d3.csv("../cars-sample.csv", d3.autoType).then(buildGraph);

function buildGraph(data)
{
    //Variables
    const svg_width = 600;
    const svg_height = 600;
    const colors = {
        "bmw":      "#f2b6b2",
        "ford":     "#c8c984",
        "honda":    "#8cd6b7",
        "mercedes": "#8ed1f4",
        "toyota":   "#eeb0f2"
    };

    //Filter NA
    data = data.filter(car => car.MPG != "NA")

    //Setup SVG
    let svg = d3.select("svg")
        .append("g")
        .attr("transform", "translate(50, 30)");

    //Setup x Scale and y Scale
    let xscale = d3.scaleLinear().domain([
        d3.min(data, function (data_point) { return data_point.Weight; }) - 200,
        d3.max(data, function (data_point) { return data_point.Weight; })
    ]).range([0, 540]);

    let yscale = d3.scaleLinear().domain([
        5,
        d3.max(data, function (data_point) { return data_point.MPG; })
    ]).range([540, 0]);

    let xaxis = d3.axisBottom(xscale).ticks(4);
    let yaxis = d3.axisLeft(yscale).ticks(5);

    //Draw Axes
    svg.append("g").attr("transform", "translate(0, 525)").call(xaxis);
    svg.append("g").call(yaxis);

    //Draw Labels
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", svg_width / 2)
        .attr("y", svg_height - 35)
        .attr("font-family", "Arial")
        .text("Weight");

    svg.append("text")
        .attr("x", -250)
        .attr("y", -30)
        .attr("font-family", "Arial")
        .attr("transform", "rotate(-90)")
        .text("MPG");

    //Draw Circles
    svg.append("g")
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr('cx', function(data_point) { return xscale(data_point.Weight); })
        .attr('cy', function(data_point) { return yscale(data_point.MPG); })
        .attr('r', function(data_point) {
            return 10 * (data_point.Weight / 5000);
        })
        .attr("fill", function(data_point) {return colors[data_point.Manufacturer]})
        .attr("opacity", 0.5);
}