import './style.css'
import * as d3 from 'd3'
import txt from 'raw-loader!./cars-sample.csv';

/**
 * Car Data
 */
function Car(name, manufacturer, mpg, weight)
{
    this.name = name
    this.manufacturer = manufacturer
    this.mpg = mpg
    this.weight = weight
}

let cars = []

// Parse Car Data

txt.replaceAll("\"", "")
    .split("\n")
    .forEach(car =>
    {
        const rawCar = car.split(",")
        const newCar = new Car(rawCar[1], rawCar[2], +rawCar[3], +rawCar[7])
        if(!isNaN(newCar.mpg) || !isNaN(newCar.weight))
            cars.push(newCar)
    })

/**
 * Createing SVG
 */

var margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

const svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")

d3.csv("./cars-sample.csv", (data) => {
    console.log(data)
})

/*
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Handling Resizing
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    svg.attr("width", sizes.width)
        .attr("height", sizes.height)

    render()
})

const svg = d3.select("body").append("svg")
    .attr("width", sizes.width)
    .attr("height", sizes.height)
*/

/**
 * Shapes
 */
