d3.csv("../cars-sample.csv", d3.autoType)
    .then(function (data) {
        createScatterPlot(data)
    });

function createScatterPlot(data) {

    const margin = {
        top: 10,
        bottom: 10,
        right: 40,
        left: 40,
    }
    let width = 800 - margin.left - margin.right,
        height = 550 - margin.top - margin.bottom;

    let svg = d3.select('.vis')
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", [- margin.left, 0, width + margin.right, height + margin.top + 3 * margin.bottom])
        .attr("transform",
            "translate(" + (margin.left) + "," + margin.top + ")");

    let color = d3.scaleOrdinal()
        .domain(['bmw', 'ford', 'honda', 'mercedes', 'toyota'])
        .range(['orange', '#a9b956', '#5ae6a0', '#5fc0ed', '#b94ec7']);

    const weightScale = d3.scaleLinear()
        .domain([1500, 5100])
        .range([0, width]);

    const mpgScale = d3.scaleLinear()
        .domain([8, 47])
        .range([height, 0]);

    svg.append("g").attr("transform", "translate(0," + height + ")")
        .call(
            d3.axisBottom(weightScale)
                .ticks(4)
        );


    svg.append("g").attr("transform", "translate(" + 0 + ", 0)")
        .call(
            d3.axisLeft(mpgScale)
                .ticks(4)
        );

    svg.append("text")
        .attr("x", width/2)
        .attr("y", height + 30)
        .text("Weight")
        .style("font-family", 'sans-serif');

    svg.append("text")
        .attr("x", -height/2 - margin.bottom - margin.top)
        .attr("y", -20)
        .attr("transform", "rotate(-90)")
        .text("MPG")
        .style("font-family", 'sans-serif');


    svg.append('g')
        .selectAll('circle')
        .data(data.filter(d => !isNaN(d.MPG)))
        .join('circle')
        .attr('r', d => .002 * d.Weight)
        .attr('cx', d => weightScale(d.Weight))
        .attr('cy', d => mpgScale(d.MPG))
        .attr('fill', d => color(d.Manufacturer))
        .attr('stroke', d => color(d.Manufacturer))
        .attr('fill-opacity', '60%');
    console.log(data);
}