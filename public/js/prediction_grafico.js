const main = async () => {
  const data = await getPredictionData()
  new Chart(document.getElementById('predictionChart'), {
    type: 'line',
    data: {
      labels: getLabels(),
      datasets: [
        {
          data,
          label: 'Reservas',
          borderColor: '#3e95cd',
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Historial de reservas'
      }
    }
  })
}

const getLabels = (data) => {
  return [
    'E-S1-2017',
    'E-S2-2017',
    'E-S3-2017',
    'E-S4-2017',
    'F-S1-2017',
    'F-S2-2017',
    'F-S3-2017',
    'F-S4-2017',
    'M-S1-2017',
    'M-S2-2017',
    'M-S3-2017',
    'M-S4-2017',
    'A-S1-2017',
    'A-S2-2017',
    'A-S3-2017',
    'A-S4-2017',
    'M-S1-2017',
    'M-S2-2017',
    'M-S3-2017',
    'M-S4-2017',
    'J-S1-2017',
    'J-S2-2017',
    'J-S3-2017',
    'J-S4-2017',
    'JL-S1-2017',
    'JL-S2-2017',
    'JL-S3-2017',
    'JL-S4-2017',
    'A-S1-2017',
    'A-S2-2017',
    'A-S3-2017',
    'A-S4-2017',
    'S-S1-2017',
    'S-S2-2017',
    'S-S3-2017',
    'S-S4-2017',
    'O-S1-2017',
    'O-S2-2017',
    'O-S3-2017',
    'O-S4-2017',
    'N-S1-2017',
    'N-S2-2017',
    'N-S3-2017',
    'N-S4-2017',
    'D-S1-2017',
    'D-S2-2017',
    'D-S3-2017',
    'D-S4-2017',
    'E-S1-2018',
    'E-S2-2018',
    'E-S3-2018',
    'E-S4-2018',
    'F-S1-2018',
    'F-S2-2018',
    'F-S3-2018',
    'F-S4-2018',
    'M-S1-2018',
    'M-S2-2018',
    'M-S3-2018',
    'M-S4-2018',
    'A-S1-2018',
    'A-S2-2018',
    'A-S3-2018',
    'A-S4-2018',
    'M-S1-2018',
    'M-S2-2018',
    'M-S3-2018',
    'M-S4-2018',
    'J-S1-2018',
    'J-S2-2018',
    'J-S3-2018',
    'J-S4-2018',
    'JL-S1-2018',
    'JL-S2-2018',
    'JL-S3-2018',
    'JL-S4-2018',
    'A-S1-2018',
    'A-S2-2018',
    'A-S3-2018',
    'A-S4-2018',
    'S-S1-2018',
    'S-S2-2018',
    'S-S3-2018',
    'S-S4-2018',
    'O-S1-2018',
    'O-S2-2018',
    'O-S3-2018',
    'O-S4-2018',
    'N-S1-2018',
    'N-S2-2018',
    'N-S3-2018',
    'N-S4-2018',
    'D-S1-2018',
    'D-S2-2018',
    'D-S3-2018',
    'D-S4-2018',
    'E-S1-2019',
    'E-S2-2019',
    'E-S3-2019',
    'E-S4-2019',
    'F-S1-2019',
    'F-S2-2019',
    'F-S3-2019',
    'F-S4-2019',
    'M-S1-2019',
    'M-S2-2019',
    'M-S3-2019',
    'M-S4-2019'
  ]
}

const getPredictionData = async () => {
  try {
    const response = await axios.get(
      '/prediction'
    )
    return response.data.prediction
  } catch (error) {
    console.log(error)
  }
}

main()
