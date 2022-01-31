// JS 
var chart; 
  
JSC.fetch('./cars-sample.csv') 
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
      name: 'MPG', 
      type: 'marker', 
      points: key 
        .pointRollup(function(key, val) { 
          var values = val[0]; 
          return { 
            x: values.Weight, 
            y: values.MPG, 
            attributes_country: values.Car 
          }; 
        }) 
        .points(data) 
    } 
  ]; 
  return JSC.chart('chartDiv', { 
    title_label_text: 
      '', 
    defaultPoint: { 
      tooltip: 
        '<b>%Car</b><br>Weight: <b>%xValue</b><br>MPG: <b>%yValue</b>', 
      opacity: 0.8, 
      marker: { 
        type: 'circle', 
        outline_width: 0, 
        size: 12 
      } 
    }, 
    axisToZoom: 'xy', 
    legend_visible: false, 
    yAxis: { 
      label_text: 
        'MPG', 
      alternateGridFill: 'none', 
      scale_zoomLimit: 5000 
    }, 
    xAxis: { 
      label_text: 
        'Weight', 
      scale_zoomLimit: 100 
    }, 
    series: series 
  }); 
} 