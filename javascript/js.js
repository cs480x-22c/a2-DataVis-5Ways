// JS 
var chart; 
  
JSC.fetch( 
  './cars-sample.csv'
) 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    var data = JSC.csv2Json(text); 
    chart = renderChart(data); 
  }); 
function renderChart(data) { 
  var key = JSC.nest().key('Car'); 
  var series = [ 
    { 
      name: 'ford', 
      type: 'marker', 
      points: key 
        .pointRollup(function(key, val) { 
          var values = val[0]; 
          return { 
            x: values.Weight, 
            y: values.MPG, 
            attributes_country: key 
          }; 
        }) 
        .points(data) 
    }, 
    { 
      name: 'toyota', 
      type: 'marker', 
      points: key 
        .pointRollup(function(key, val) { 
          var values = val[0]; 
          return { 
            x: values.fertility_rate1990, 
            y: values.life_expectancy1990, 
            attributes_country: key 
          }; 
        }) 
        .points(data) 
    }, 
    { 
      name: 'bmw', 
      type: 'marker', 
      points: key 
        .pointRollup(function(key, val) { 
          var values = val[0]; 
          return { 
            x: values.fertility_rate2016, 
            y: values.life_expectancy2016, 
            attributes_country: key 
          }; 
        }) 
        .points(data) 
    } 
  ]; 
  return JSC.chart('chartDiv', { 
    axisToZoom: 'xy', 
    defaultPoint: { 
      tooltip: 
        '<b>%country</b><br>%xAxisLabel: <b>%xValue</b><br>%yAxisLabel: <b>%yValue</b>', 
      opacity: 0.5, 
      marker: { 
        type: 'circle', 
        outline_width: 0, 
        size: 12 
      } 
    }, 
    legend_template: '%icon %name', 
    yAxis: { 
      label_text: 'MPG', 
      alternateGridFill: 'none'
    }, 
    xAxis: { 
      scale_range: [0, 10], 
      label_text: 'Weight'
    }, 
    series: series 
  }); 
} 