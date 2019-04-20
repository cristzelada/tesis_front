$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict'
  var data = {
    labels: [
      '2015-1',
      '2015-2',
      '2015-3',
      '2015-4',
      '2015-5',
      '2015-6',
      '2015-7',
      '2015-8',
      '2015-9',
      '2015-10',
      '2015-11',
      '2015-12'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [ 123, 176, 104, 123, 111, 124, 122, 143, 119, 143, 183, 124 ],
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

  if ($('#lineChart-2015').length) {
    var lineChartCanvas = $('#lineChart-2015').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    })
  }
})
