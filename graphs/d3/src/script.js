import "./style.css"
import * as d3 from 'D3'

/**
 * Graph Sizes
 */

const margin = {
    top: 10,
    right: 30,
    bottom: 60,
    left: 60
}

const sizes = {
    width: 800 - margin.left - margin.right,
    height: 600 - margin.top - margin.bottom
}

/**
 * Creating Graph
 */

let svg = d3.select("#cars-chart")
            .append("svg")
                .attr("width", sizes.width + margin.left + margin.right)
                .attr("height", sizes.height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")")


/**
 * Loading Car Data into Graph
 */

d3.csv("./cars-sample.csv").then(data =>
{
    // Removing incomplete data
    data = data.filter(data => (!isNaN(data.MPG) && !isNaN(data.Weight)))
    
    // Creating Axis'
    let x = d3.scaleLinear()
        .domain([1500, 5100])
        .range([0, sizes.width])

    // Creating x axis and moving it
    svg.append("g")
        .attr("transform", "translate(0," + sizes.height + ")")
        .call(d3.axisBottom(x))

    let y = d3.scaleLinear()
        .domain([7, 43])
        .range([sizes.height, 0])

    // Creating y axis
    svg.append("g")
        .call(d3.axisLeft(y))

    //Axis Labelss
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', sizes.width / 2 )
        .attr('y', margin.top + sizes.height + 20)
        .text("Weight")

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left + 20)
        .attr('x', -margin.top - sizes.height/2)
        .text('MPG')
    // Adding Data 
    const color = d3.scaleOrdinal()
        .domain(["bmw", "ford", "honda", "mercedes", "toyota"])
        .range(["#FA252580", "#939E0080", "#44E39380", "#29E7F580" , "#F73FFA80"])

    svg.append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", (d) => { return x(d.Weight)})
            .attr("cy", (d) => { return y(d.MPG)})
            .attr("r", (d) => {return d.Weight / 300})
            .style("fill", (d) => { return color(d.Manufacturer)})

})

/**
 * Learning Notes
 * 
 * appending g in the svg is so you can group all the elements
 */