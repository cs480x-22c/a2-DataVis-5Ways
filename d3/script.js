let fordColor = "rgba(180, 180, 75, .5)";
let toyotaColor = "rgba(240, 100, 240, .5)";
let bmwColor = "rgba(240, 135, 135, .5)";
let hondaColor = "rgba(40, 210, 175, .5)";
let mercedesColor = "rgba(80, 200, 245, .5)";
let backgroundColor = "#ECECEC";

d3.csv("cars-sample.csv")
    .then(d => drawPlot(filterNA(d)));

let xScale = d3.scaleLinear()
    .domain([1600, 5100])
    .range([0, 400]);

let yScale = d3.scaleLinear()
    .domain([46, 9])
    .range([0, 400])

const filterNA = (d) => {
    return d.filter(item => item.MPG != "NA");
}

const mapColor = (m) => {
    if (m == "ford")
        return fordColor;
    else if (m == "toyota")
        return toyotaColor;
    else if (m == "bmw")
        return bmwColor;
    else if (m == "honda")
        return hondaColor;
    else if (m == "mercedes")
        return mercedesColor;
}

const drawPlot = (d) => {
    drawAxes();
    drawBackground();
    drawPoints(d);
    drawLegend();
};

const drawAxes = () => {
    let xAxis = d3.axisBottom()
        .scale(xScale)
        .tickValues([2000, 3000, 4000, 5000]);
    let yAxis = d3.axisLeft()
        .scale(yScale)
        .tickValues([10, 20 , 30, 40]);

    d3.select("svg")
        .append("g")
        .attr("transform", "translate(50, 400)")
        .call(xAxis);

    d3.select("svg")
        .append("g")
        .attr("transform", "translate(50, 0)")
        .call(yAxis);

    d3.select("svg")
        .append("text")
        .attr("x", 0)
        .attr("y", 200)
        .attr("transform", "translate(-175, 210) rotate(-90)")
        .text("MPG");

    d3.select("svg")
        .append("text")
        .attr("x", 225)
        .attr("y", 435)
        .text("Weight");
};

const drawBackground = () => {
    d3.select("svg")
        .append("rect")
        .attr("x", 50)
        .attr("y", 0)
        .attr("width", 400)
        .attr("height", 400)
        .attr("fill", backgroundColor);

    //draw lines
    drawBackgroundHelper(50, 65, 450, 65);
    drawBackgroundHelper(50, 173, 450, 173);
    drawBackgroundHelper(50, 281, 450, 281);
    drawBackgroundHelper(50, 389, 450, 389);
    drawBackgroundHelper(96, 0, 96, 400);
    drawBackgroundHelper(210, 0, 210, 400);
    drawBackgroundHelper(324, 0, 324, 400);
    drawBackgroundHelper(438, 0, 438, 400);
}

const drawBackgroundHelper = (x1, y1, x2, y2) => {
    d3.select("svg")
        .append("line")
        .attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2)
        .attr("stroke", "white").attr("stroke-width", 1);
};

const drawPoints = (d) => {
    d3.select("svg")
        .selectAll("circle")
        .data(d)
        .enter().append("circle")
        .attr("cx", d => 50 + xScale(d.Weight))
        .attr("cy", d => yScale(d.MPG))
        .attr("r", d => d.Weight / 500)
        .attr("fill", d => mapColor(d.Manufacturer))
        .attr("class", "point")
        .attr("data-cardata", d => `${d.Manufacturer} ${d.Car} '${d["Model.Year"]}`)
        .attr("data-id", d => d[""]);
}

const drawLegend = () => {
    d3.select("svg")
        .append("text")
        .attr("x", 475)
        .attr("y", 150)
        .text("Manufacturer");

    drawLegendHelper(bmwColor, "bmw", 160);
    drawLegendHelper(fordColor, "ford", 185);
    drawLegendHelper(hondaColor, "honda", 210);
    drawLegendHelper(mercedesColor, "mercedes", 235);
    drawLegendHelper(toyotaColor, "toyota", 260 );
};

const drawLegendHelper = (color, manufacturer, height) => {
    d3.select("svg")
        .append("rect")
        .attr("x", 475)
        .attr("y", height)
        .attr("height", 20)
        .attr("width", 20)
        .attr("fill", backgroundColor);

    d3.select("svg")
        .append("circle")
        .attr("cx", 485)
        .attr("cy", height + 10)
        .attr("r", 4)
        .attr("fill", color);

    d3.select("svg")
        .append("text")
        .attr("x", 500)
        .attr("y", height + 15)
        .text(manufacturer);
};

const drawDataTip = (d, id, x, y) => {
    d3.select("svg")
        .append("text")
        .attr("x", x + 10)
        .attr("y", y)
        .attr("class", `id${id}`)
        .text(d);
};

//events
d3.select("svg")
    .on("mouseover", e => {
        if (e.target.classList.contains("point")) {
            drawDataTip(e.target.getAttribute("data-cardata"),
            e.target.getAttribute("data-id"),
            e.target.cx.animVal.value,
            e.target.cy.animVal.value);
        }
    });

d3.select("svg")
    .on("mouseout", e => {
        if (e.target.classList.contains("point")) {
            d3.select("svg").select(`.id${e.target.getAttribute("data-id")}`).remove();
        }
    });

d3.select("input")
    .on("keyup", e => {
        let filter = e.target.value.trim().toLowerCase();
        let circles = Array.from(d3.selectAll(".point")._groups[0]);
        
        circles.filter(circle => !circle.getAttribute("data-cardata").includes(filter))
            .forEach(circle => circle.style.display = "none");
        
        circles.filter(circle => circle.getAttribute("data-cardata").includes(filter))
            .forEach(circle => circle.style.display = "block");
    });