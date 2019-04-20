$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict'
  var data = {
    labels: [
      '2014-1',
      '2014-2',
      '2014-3',
      '2014-4',
      '2014-5',
      '2014-6',
      '2014-7',
      '2014-8',
      '2014-9',
      '2014-10',
      '2014-11',
      '2014-12'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [ 238, 129, 124, 121, 138, 115, 136, 141, 196, 201, 244, 140 ],
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

  if ($('#lineChart-2014').length) {
    var lineChartCanvas = $('#lineChart-2014').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    })
  }
})
