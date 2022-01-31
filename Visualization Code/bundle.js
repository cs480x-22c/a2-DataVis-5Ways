(function (d3) {
    'use strict';
    
  

    const svg = d3.select('svg'); 
  
        const height = parseFloat(svg.attr('height'));
        const width = +svg.attr('width');
  
        const render = data => {
        const color = d3.scaleOrdinal(
                data.map((d) => d.Manufacturer),
                d3.schemeCategory10
              )
        const size = d3
              .scaleLinear()
              .domain(d3.extent(data, (d) => d.Weight))
              .nice()
              .range([1, 20])
      const title = 'Cars: Weight Vs MPG';
      const xValue  = d => d.Weight;
      const xAxisLabel = 'Weight';
      const yValue = d => d.MPG;
      const yAxisLabel = 'MPG';
      const margin = {top: 50, right: 40, bottom: 88, left: 150};
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;
      const circleRadius = 10;
      
     

      const xScale = d3.scaleLinear()
          .domain(d3.extent(data,xValue))
        .range([0, innerWidth])
          .nice() 
          ;
          
      const yScale = d3.scaleLinear()
          .domain([40,20,0])
          .range([0,innerHeight-119])
          .nice();
  
      const g = svg.append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
      
      const xAxis = d3.axisBottom(xScale)
          .tickSize(-innerHeight)
          .tickPadding(15);
      
      const yAxis = d3.axisLeft(yScale)
          .tickSize(-innerWidth)
          .tickPadding(10);
      const yAxisG = g.append('g').call(yAxis);
      yAxisG.selectAll('.domain').remove();
      
      yAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('y',-93)
          .attr('x',-innerHeight/2)
          .attr('fill','black')
          .attr('transform', 'rotate(-90)')
          .attr('text-anchor','middle')
          .text(yAxisLabel);
      
     
      const xAxisG = g.append('g').call(xAxis) 
        .attr('transform', `translate(0,${innerHeight})`);
        
      
      xAxisG.append('text')
          .attr('class','axis-label')
          .text(xAxisLabel)
          .attr('y', 75)
          .attr('x', innerWidth/2)
          .attr('fill','black');
      
      
      g.selectAll('circle').data(data)
          .enter().append('circle')
              .attr('cy', d => yScale(yValue(d)))
              .attr('cx', d => xScale(xValue(d)))
              .attr("r", (d) => size(d.Weight))
              .attr("fill", (d) => color(d.Manufacturer))
              .attr('fill-opacity', 0.5)
              .on('mouseover', function () {
                d3.select(this)
                  .transition()
                  .duration(500)
                  .attr('r',100)
                  .attr('stroke-width',3)
                  .attr('fill', 'pink')
              })
              .on('mouseout', function () {
                d3.select(this)
                  .transition()
                  .duration(500)
                  .attr("r", (d) => size(d.Weight))
                  .attr("fill", (d) => color(d.Manufacturer))
                  .attr('stroke-width',1)
                  
              })
              
              

        g.append('text')
        .attr('class','axis-title')
          .text(title)
          .attr('y', -10);
    };
        
  
    d3.csv('cars-sample2.csv')
          .then(data => {   	
     
      data.forEach(d => {
        d.MPG = +d.MPG;
        d.Weight = +d.Weight 
        d.Manufacturer = d.Manufacturer
      });
      render(data);
    });
  
  }(d3));