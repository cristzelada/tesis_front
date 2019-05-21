const main = async () => {
  const data = await predict(16)
  const historyArray = await getPredictionData()
  const predictLabels = getPredictLabels()
  const historyLabels = getHitoryLabels()
  const predictArray = getPredictArray(historyArray, data)

  new Chart(document.getElementById('predictChart'), {
    type: 'line',
    data: {
      labels: [ ...historyLabels, ...predictLabels ],
      datasets: [
        {
          data: historyArray,
          label: 'Reservas registradas',
          borderColor: '#3e95cd',
          fill: false
        },
        {
          data: predictArray,
          label: 'Predicho',
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
  await setValues(predictArray, [ ...historyLabels, ...predictLabels ])
  document.getElementById('date').addEventListener('change', async () => {
    await setValues(predictArray, [ ...historyLabels, ...predictLabels ])
  })
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
    const response = await axios.get(`/prediction?quantity=${quantity}`)
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
    const response = await axios.get('/prediction')
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
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const setValues = async (data, labels) => {
  deleteValues()

  const date = document.getElementById('date').value

  const dispoReal = document.getElementById('dispoReal')
  const dispoSupuesto = document.getElementById('dispoSupuesta')

  const predictNum = document.getElementById('predictNum')
  const reservasNum = document.getElementById('reservasNum')
  const reservasPosNum = document.getElementById('reservasPosNum')
  const reservasNegNum = document.getElementById('reservasNegNum')
  const realNum = document.getElementById('realNum')
  const overbookingNum = document.getElementById('overbooking')

  const clasifications = await getClasification()

  const reservationsByDate = filterByDate(clasifications, date)

  if (reservationsByDate.length) {
    const reservasFalta = reservationsByDate.filter(
      (x) => x.clasification === 0
    )
    const reservasAsistencia = reservationsByDate.filter(
      (x) => x.clasification === 1
    )

    reservasFaltaRooms = calculateRoomByReservation(reservasFalta)

    reservasAsistenciaRooms = calculateRoomByReservation(reservasAsistencia)

    reservasTotalRooms = reservasAsistenciaRooms + reservasFaltaRooms

    const predictReservationsByDate = getPredictReservationByDate(
      date,
      data,
      labels
    )

    predictNum.value = predictReservationsByDate

    reservasNum.value = reservasTotalRooms
    reservasPosNum.value = reservasAsistenciaRooms
    reservasNegNum.value = reservasFaltaRooms

    const toOverbooking = 24 - reservasTotalRooms < 0 ? true : false

    dispoSupuesto.value = 24 - reservasTotalRooms
    dispoReal.value =
      24 - reservasFaltaRooms < 0
        ? 24 - reservasAsistenciaRooms
        : 24 - reservasFaltaRooms

    overbookingNum.value = !toOverbooking
      ? 'NO HABILITADO'
      : overbookingCalcule(
          predictReservationsByDate,
          reservasTotalRooms,
          dispoReal.value
        )

    realNum.value =
      predictReservationsByDate > reservasTotalRooms
        ? 'BAJO PRONOSTICO'
        : 'SOBRE PRONOSTICO'
  } else {
    alert('No hay reservas para esa semana')
  }
}

const calculateRoomByReservation = (data) => {
  let sum = 0
  for (let d of data) {
    sum = sum + Number(d.rooms)
  }
  return sum
}

const deleteValues = () => {
  const predictNum = document.getElementById('predictNum')
  const reservasNum = document.getElementById('reservasNum')
  const reservasPosNum = document.getElementById('reservasPosNum')
  const reservasNegNum = document.getElementById('reservasNegNum')
  const realNum = document.getElementById('realNum')
  const overbooking = document.getElementById('overbooking')

  predict.value = ''
  reservasNum.value = ''
  reservasPosNum.value = ''
  reservasNegNum.value = ''
  realNum.value = ''
  overbooking.value = ''
}

const getPredictReservationByDate = (date, data, labels) => {
  return data[labels.indexOf(date)]
}

const filterByDate = (data, date) => {
  return data.filter((x) => x.date === date)
}

const overbookingCalcule = (pronosticadas, actuales, real) => {
  return pronosticadas < actuales ? 'NO VENDER' : real
}

main()
