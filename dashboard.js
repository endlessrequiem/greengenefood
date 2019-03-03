(function ($) {
  $(document).ready(function(){

    // Mini Flush Charts
    var $flushAreaChartBlue = $('#flush-area-chart-blue');
    if ($flushAreaChartBlue.length) {
      var blueData = {
        labels: ['3 days ago', '2 days ago', 'yesterday', 'today'],
        datasets: [{
          backgroundColor: chartColorBlue,
          borderColor: chartColorBlue,
          data: [72, 75, 77, 76],
          label: 'Score'
        }]
      };
      var flushAreaChartBlue = new Chart($flushAreaChartBlue, {
        type: 'line',
        data: blueData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartYellow = $('#flush-area-chart-yellow');
    if ($flushAreaChartYellow.length) {
      var yellowData = {
        labels: ['one', 'two', 'three', 'four', 'five'],
        datasets: [{
          backgroundColor: chartColorYellow,
          borderColor: chartColorYellow,
          data: [5,6,3,3,9],
          label: 'Number'
        }]
      };
      var flushAreaChartYellow = new Chart($flushAreaChartYellow, {
        type: 'line',
        data: yellowData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartPink = $('#flush-area-chart-pink');
    if ($flushAreaChartPink.length) {
      var pinkData = {
        labels: ['3 days ago', '2 days ago', 'yesterday', 'today'],
        datasets: [{
          backgroundColor: chartColorPink,
          borderColor: chartColorPink,
          data: [5,3,6,6],
          label: 'Score'
        }]
      };
      var flushAreaChartPink = new Chart($flushAreaChartPink, {
        type: 'line',
        data: pinkData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartGreen = $('#flush-area-chart-green');
    if ($flushAreaChartGreen.length) {
      var greenData = {
        labels: ['3 days ago', '2 days ago', 'yesterday', 'today'],
        datasets: [{
          backgroundColor: chartColorGreen,
          borderColor: chartColorGreen,
          data: [85,88,76,78],
          label: 'Score'
        }]
      };
      var flushAreaChartGreen = new Chart($flushAreaChartGreen, {
        type: 'line',
        data: greenData,
        options: flushChartOptions
      });
    }


    // Doughnut chart
    var doughnutTooltip = Object.assign({}, tooltipsOpts);
    doughnutTooltip.intersect = true;
    doughnutTooltip.callbacks = { footer: percentageFooterCallback };
    delete doughnutTooltip.mode;

    var doughnutChart = $('#doughnut-chart');
    if (doughnutChart.length) {
      var doughnutChartJS = new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          labels: ["Fruits/Veggies", "Meat", "Wheat", "Other"],
          datasets: [{
            label: 'dataset 1',
            data: [12, 19, 3, 5],
            backgroundColor: [chartColorPink, chartColorBlue, chartColorYellow, chartColorGreen],
            borderWidth: 0
          }],
        },
        options: {
          tooltips: doughnutTooltip,
          legendCallback: doughnutLegendCallback,
          cutoutPercentage: 80
        }
      });
      doughnutChart.closest('.card-content').find('.chart-legend-wrapper').append($(doughnutChartJS.generateLegend()));
    }


    /********************
     *      JQVMAP      *
     ********************/
    var vmap = $('#vmap');
    if (vmap.length) {
      $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: 'transparent',
        color: '#ffffff',
        enableZoom: false,
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        showTooltip: true,
        scaleColors: ['#FFFFFF', rgbToHex(chartColorGreen)],
        values: sample_data,
        normalizeFunction: 'polynomial',
        onLabelShow: function (event, label, code) {
          if(sample_data[code] > 0) {
            var flag = $('<span class="flag-icon flag-icon-' + code + '"></span>');
            label.prepend(flag);
            label.append(': '+sample_data[code]+' Views');
          }
        }
      });
    }

  });
}( jQuery ));
