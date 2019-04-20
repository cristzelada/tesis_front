$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict'
  var data = {
    labels: [
      '2016-1',
      '2016-2',
      '2016-3',
      '2016-4',
      '2016-5',
      '2016-6',
      '2016-7',
      '2016-8',
      '2016-9',
      '2016-10',
      '2016-11',
      '2016-12'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [ 258, 149, 54, 150, 108, 105, 176, 151, 197, 200, 244, 140 ],
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

  if ($('#lineChart-2016').length) {
    var lineChartCanvas = $('#lineChart-2016').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    })
  }
})
