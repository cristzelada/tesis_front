$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict'
  var data = {
    labels: [
      '2012-1',
      '2012-2',
      '2012-3',
      '2012-4',
      '2012-5',
      '2012-6',
      '2012-7',
      '2012-8',
      '2012-9',
      '2012-10',
      '2012-11',
      '2012-12'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [ 238, 129, 110, 230, 158, 125, 116, 121, 176, 181, 224, 138 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  var options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }

  if ($('#lineChart-2012').length) {
    var lineChartCanvas = $('#lineChart-2012').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    })
  }
})
