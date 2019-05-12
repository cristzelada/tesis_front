const main = async () => {
  const clasifications = await getClasification()

  const falta = clasifications.filter((x) => x.clasification === 0)
  const asistencia = clasifications.filter((x) => x.clasification === 1)
  const chart = document.getElementById('chart')
  Chart.defaults.global.defaultFontFamily = 'Lato'
  Chart.defaults.global.defaultFontSize = 18

  var data = {
    labels: [ 'Falta', 'Asistencia' ],
    datasets: [
      {
        data: [ falta.length, asistencia.length ],
        backgroundColor: [ '#FF6384', '#63FF84' ]
      }
    ]
  }

  var pieChart = new Chart(chart, {
    type: 'pie',
    data
  })
}

main()
