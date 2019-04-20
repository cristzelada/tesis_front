$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict'
  var data = {
    labels: [
      '2013-1',
      '2013-2',
      '2013-3',
      '2013-4',
      '2013-5',
      '2013-6',
      '2013-7',
      '2013-8',
      '2013-9',
      '2013-10',
      '2013-11',
      '2013-12'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [ 218, 129, 139, 122, 138, 125, 136, 121, 126, 221, 234, 141 ],
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

  if ($('#lineChart-2013').length) {
    var lineChartCanvas = $('#lineChart-2013').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    })
  }
})
