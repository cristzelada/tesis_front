const main = async () => {
  const data = await predict(16)
  const historyData = await getPredictionData()
  const predictLabels = getPredictLabels()
  const historyLabels = getHitoryLabels()
  const predictArray = getPredictArray(historyData, data)
  new Chart(document.getElementById('predictChart'), {
    type: 'line',
    data: {
      labels: [ ...historyLabels, ...predictLabels ],
      datasets: [
        {
          data: [ ...historyData ],
          label: 'Reservas registradas',
          borderColor: '#3e95cd',
          fill: false
        },
        {
          data: predictArray,
          label: 'Predict',
          borderColor: '#8e5ea2',
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Linea de reservas predichas'
      }
    }
  })
  await setValues(predictArray)
}

const getPredictLabels = () => {
  return [
    'A-S1-2019',
    'A-S2-2019',
    'A-S3-2019',
    'A-S4-2019',
    'M-S1-2019',
    'M-S2-2019',
    'M-S3-2019',
    'M-S4-2019',
    'J-S1-2019',
    'J-S2-2019',
    'J-S3-2019',
    'J-S4-2019',
    'JL-S1-2019',
    'JL-S2-2019',
    'JL-S3-2019',
    'JL-S4-2019'
  ]
}

const predict = async (quantity) => {
  try {
    const response = await axios.get(
      `https://api-peracrist.herokuapp.com/prediction?quantity=${quantity}`
      // `http://localhost:3000/prediction?quantity=${quantity}`
    )
    return response.data.prediction
  } catch (error) {
    console.log(error)
  }
}

const getHitoryLabels = (data) => {
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
      'https://api-peracrist.herokuapp.com/prediction'
      // 'http://localhost:3000/prediction'
    )
    return response.data.prediction
  } catch (error) {
    console.log(error)
  }
}

const getPredictArray = (historyData, predictData) => {
  let array = []
  for (let i = 0; i < historyData.length; i++) {
    if (i === historyData.length - 1) {
      array.push(historyData[i])
    } else {
      array.push(null)
    }
  }
  return [ ...array, ...predictData ]
}

const getClasification = async () => {
  try {
    const response = await axios.get(
      'https://api-peracrist.herokuapp.com/clasification'
      // 'http://127.0.0.1:5000/clasification'
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const setValues = async (data) => {
  const topeNum = document.getElementById('topeNum')
  const predictNum = document.getElementById('predictNum')
  const reservasNum = document.getElementById('reservasNum')
  const reservasPosNum = document.getElementById('reservasPosNum')
  const reservasNegNum = document.getElementById('reservasNegNum')
  const realNum = document.getElementById('realNum')
  const clasifications = await getClasification()
  const falta = clasifications.filter((x) => x.clasification === 0)
  const asistencia = clasifications.filter((x) => x.clasification === 1)

  topeNum.value = 30
  predictNum.value = data[113]
  reservasNum.value = clasifications.length
  reservasPosNum.value = asistencia.length
  reservasNegNum.value = falta.length
  realNum.value = data[113] - falta.length
}

main()
