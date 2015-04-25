Highlighter.init();


// Bar single serie

  var data = [
      {values : [20], label : "jan", legendLabel : "january", fillStyle : "#55B473"},
      {values : [25], label : "feb", legendLabel : "february", fillStyle : "#4FB0C1"},
      {values : [30], label : "mar", legendLabel : "march", fillStyle : "#3B69C1"},
      {values : [25], label : "apr", legendLabel : "april", fillStyle : "#6766C1"},
      {values : [20], label : "may", legendLabel : "may", fillStyle : "#9157C1"},
      {values : [20], label : "jun", legendLabel : "june", fillStyle : "#B44D8B"},
      {values : [20], label : "jul", legendLabel : "july", fillStyle : "#C13B48"}
  ];

  var config = {
      legend : true,
      title : "Simple bar",
      maxValue : undefined,
      gridValue : 6,
      barWidth : undefined,
      barSpacing : 20,
      paddingRight : 100,
      paddingLeft : 60,
      paddingTop : 60,
      paddingBottom : 60,
      fillStyle : "white",
      gridStrokeStyle : "black",
      labelColor : "black",
      xLabel : "Months",
      yLabel : "Unique pageviews",
      xLabelFillStyle : "#404040",
      yLabelFillStyle : "#404040",
      fileName : "simple_bar.png"
  };

  var graph = new Graph("Bar", document.getElementById("graphBarOneSerie"), data, config);
  graph.draw();
  
  
  
  
  // bar multiple series
  
  var data2 = [
      {values : [20, 30, 10], label : "jan"},
      {values : [25, 15, 0], label : "feb"},
      {values : [30, 20, 10], label : "mar"},
      {values : [25, 25, 5], label : "apr"},
      {values : [15, 65, 25], label : "may"},
      {values : [45, 40, 30], label : "jun"},
      {values : [25, 25, 15], label : "jul"},
      {values : [15, 5, 10], label : "aug"},
      {values : [5, 15, 10], label : "sep"}
  ];
  var config2 = {
      series : [
          {label : "male", fillStyle : "#66D9EF"},
          {label : "female", fillStyle : "#F92672"},
          {label : "unknown", fillStyle : "#E6DB74"}
      ],
      legend : true,
      title : "Mulitple series",
      maxValue : undefined,
      gridValue : undefined,
      barWidth : undefined,
      barSpacing : 10,
      seriesSpacing : 4,
      paddingRight : 90,
      paddingLeft : 40,
      paddingTop : 60,
      paddingBottom : 40
  };
  var graph2 = new Graph("Bar", document.getElementById("graphBarSeries"), data2, config2);
  graph2.draw();
  
  
  
  
  // stacked bar
  
  var data3 = [
      {values : [20, 30, 10], label : "jan"},
      {values : [25, 15, 0], label : "feb"},
      {values : [30, 20, 10], label : "mar"},
      {values : [25, 25, 5], label : "apr"},
      {values : [15, 65, 20], label : "may"},
      {values : [40, 40, 30], label : "jun"},
      {values : [25, 25, 15], label : "jul"},
      {values : [10, 10, 10], label : "aug"},
      {values : [5, 15, 10], label : "sep"}
  ];
  var config3 = {
      series : [
          {label : "male", fillStyle : "#66D9EF"},
          {label : "female", fillStyle : "#F92672"},
          {label : "unknown", fillStyle : "#E6DB74"}
      ],
      legend : true,
      stacked : true,
      title : "Stacked",
      maxValue : undefined,
      gridValue : 10,
      barWidth : undefined,
      barSpacing : 10,
      seriesSpacing : 4,
      paddingRight : 90,
      paddingLeft : 40,
      paddingTop : 60,
      paddingBottom : 40,
      fileName : "stacked_bar.png"
  };
  var graph3 = new Graph("Bar", document.getElementById("graphStacked"), data3, config3);
  graph3.draw();
  
  
  
  // Pie
  var data = [
      {values : [5], label : "jan", legendLabel : "january", fillStyle : "#55B473"},
      {values : [25], label : "feb", legendLabel : "february", fillStyle : "#4FB0C1"},
      {values : [10], label : "mar", legendLabel : "march", fillStyle : "#3B69C1"},
      {values : [25], label : "apr", legendLabel : "april", fillStyle : "#6766C1"},
      {values : [20], label : "may", legendLabel : "may", fillStyle : "#9157C1"},
      {values : [40], label : "jun", legendLabel : "june", fillStyle : "#B44D8B"},
      {values : [20], label : "jul", legendLabel : "july", fillStyle : "#C13B48"}
  ];

  var config = {
      legend : true,
      title : "Simple pie",
      maxValue : undefined,
      gridValue : 6,
      paddingRight : 60,
      paddingLeft : 40,
      paddingTop : 60,
      paddingBottom : 40,
      fillStyle : "white",
      gridStrokeStyle : "black",
      labelColor : "black",
      fileName : "simple_pie.png"
  };

  var graph = new Graph("Pie", document.getElementById("graphPie"), data, config);
  graph.draw();