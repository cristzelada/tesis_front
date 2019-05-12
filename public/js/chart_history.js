var speedCanvas = document.getElementById('speedChart')

var a_data = {
  label: '2012',
  data: [ 238, 129, 110, 230, 158, 125, 116, 121, 176, 181, 224, 138 ],
  lineTension: 0.3,
  borderColor: 'green',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var b_data = {
  label: '2013',
  data: [ 218, 129, 139, 122, 138, 125, 136, 121, 126, 221, 234, 141 ],
  lineTension: 0.3,
  borderColor: 'blue',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var c_data = {
  label: '2014',
  data: [ 238, 129, 124, 121, 138, 115, 136, 141, 196, 201, 244, 140 ],
  lineTension: 0.3,
  borderColor: 'red',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var d_data = {
  label: '2015',
  data: [ 123, 176, 104, 123, 111, 124, 122, 143, 119, 143, 183, 124 ],
  lineTension: 0.3,
  borderColor: 'yellow',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var e_data = {
  label: '2016',
  data: [ 258, 149, 54, 150, 108, 105, 176, 151, 197, 200, 244, 140 ],
  lineTension: 0.3,
  borderColor: 'purple',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var f_data = {
  label: '2017',
  data: [ 281, 185, 120, 85, 173, 183, 158, 129, 190, 105, 167 ],
  lineTension: 0.3,
  borderColor: 'brown',
  fill: true,
  backgroundColor: 'rgba(179,181,198,0.2)'
}

var speedData = {
  labels: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  datasets: [ a_data, b_data, c_data, d_data, e_data, f_data ]
}

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
})
