const main = async () => {
  const data = await predict()
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
    '1/06/19',
    '2/06/19',
    '3/06/19',
    '4/06/19',
    '5/06/19',
    '6/06/19',
    '7/06/19',
    '8/06/19',
    '9/06/19',
    '10/06/19',
    '11/06/19',
    '12/06/19',
    '13/06/19',
    '14/06/19',
    '15/06/19',
    '16/06/19',
    '17/06/19',
    '18/06/19',
    '19/06/19',
    '20/06/19',
    '21/06/19',
    '22/06/19',
    '23/06/19',
    '24/06/19',
    '25/06/19',
    '26/06/19',
    '27/06/19',
    '28/06/19',
    '29/06/19',
    '30/06/19',
    '1/07/19',
    '2/07/19',
    '3/07/19',
    '4/07/19',
    '5/07/19',
    '6/07/19',
    '7/07/19',
    '8/07/19',
    '9/07/19',
    '10/07/19',
    '11/07/19',
    '12/07/19',
    '13/07/19',
    '14/07/19',
    '15/07/19',
    '16/07/19',
    '17/07/19',
    '18/07/19',
    '19/07/19',
    '20/07/19',
    '21/07/19',
    '22/07/19',
    '23/07/19',
    '24/07/19',
    '25/07/19',
    '26/07/19',
    '27/07/19',
    '28/07/19',
    '29/07/19',
    '30/07/19',
    '31/07/19',
    '1/08/19',
    '2/08/19',
    '3/08/19',
    '4/08/19',
    '5/08/19',
    '6/08/19',
    '7/08/19',
    '8/08/19',
    '9/08/19',
    '10/08/19',
    '11/08/19',
    '12/08/19',
    '13/08/19',
    '14/08/19',
    '15/08/19',
    '16/08/19',
    '17/08/19',
    '18/08/19',
    '19/08/19',
    '20/08/19',
    '21/08/19',
    '22/08/19',
    '23/08/19',
    '24/08/19',
    '25/08/19',
    '26/08/19',
    '27/08/19',
    '28/08/19',
    '29/08/19',
    '30/08/19',
    '31/08/19',
    '1/09/19',
    '2/09/19',
    '3/09/19',
    '4/09/19'
  ]
}

const predict = async () => {
  return [
    9,
    5,
    2,
    5,
    6,
    3,
    3,
    2,
    1,
    5,
    3,
    6,
    4,
    1,
    6,
    1,
    3,
    3,
    4,
    3,
    3,
    3,
    1,
    1,
    4,
    1,
    4,
    3,
    2,
    3,
    4,
    3,
    2,
    4,
    1,
    1,
    3,
    6,
    5,
    1,
    1,
    3,
    1,
    5,
    1,
    7,
    5,
    3,
    1,
    3,
    1,
    1,
    9,
    5,
    2,
    5,
    6,
    3,
    3,
    2,
    1,
    5,
    3,
    6,
    4,
    1,
    6,
    1,
    3,
    3,
    4,
    3,
    3,
    3,
    1,
    1,
    4,
    1,
    4,
    3,
    2,
    3,
    4,
    3,
    2,
    4,
    1,
    1,
    3,
    6,
    5,
    1,
    1,
    3,
    1,
    5
  ]
}

const getHitoryLabels = (data) => {
  return [
    '1/01/19',
    '2/01/19',
    '3/01/19',
    '4/01/19',
    '5/01/19',
    '6/01/19',
    '7/01/19',
    '8/01/19',
    '9/01/19',
    '10/01/19',
    '11/01/19',
    '12/01/19',
    '13/01/19',
    '14/01/19',
    '15/01/19',
    '16/01/19',
    '17/01/19',
    '18/01/19',
    '19/01/19',
    '20/01/19',
    '21/01/19',
    '22/01/19',
    '23/01/19',
    '24/01/19',
    '25/01/19',
    '26/01/19',
    '27/01/19',
    '28/01/19',
    '29/01/19',
    '30/01/19',
    '31/01/19',
    '1/02/19',
    '2/02/19',
    '3/02/19',
    '4/02/19',
    '5/02/19',
    '6/02/19',
    '7/02/19',
    '8/02/19',
    '9/02/19',
    '10/02/19',
    '11/02/19',
    '12/02/19',
    '13/02/19',
    '14/02/19',
    '15/02/19',
    '16/02/19',
    '17/02/19',
    '18/02/19',
    '19/02/19',
    '20/02/19',
    '21/02/19',
    '22/02/19',
    '23/02/19',
    '24/02/19',
    '25/02/19',
    '26/02/19',
    '27/02/19',
    '28/02/19',
    '1/03/19',
    '2/03/19',
    '3/03/19',
    '4/03/19',
    '5/03/19',
    '6/03/19',
    '7/03/19',
    '8/03/19',
    '9/03/19',
    '10/03/19',
    '11/03/19',
    '12/03/19',
    '13/03/19',
    '14/03/19',
    '15/03/19',
    '16/03/19',
    '17/03/19',
    '18/03/19',
    '19/03/19',
    '20/03/19',
    '21/03/19',
    '22/03/19',
    '23/03/19',
    '24/03/19',
    '25/03/19',
    '26/03/19',
    '27/03/19',
    '28/03/19',
    '29/03/19',
    '30/03/19',
    '31/03/19',
    '1/04/19',
    '2/04/19',
    '3/04/19',
    '4/04/19',
    '5/04/19',
    '6/04/19',
    '7/04/19',
    '8/04/19',
    '9/04/19',
    '10/04/19',
    '11/04/19',
    '12/04/19',
    '13/04/19',
    '14/04/19',
    '15/04/19',
    '16/04/19',
    '17/04/19',
    '18/04/19',
    '19/04/19',
    '20/04/19',
    '21/04/19',
    '22/04/19',
    '23/04/19',
    '24/04/19',
    '25/04/19',
    '26/04/19',
    '27/04/19',
    '28/04/19',
    '29/04/19',
    '30/04/19',
    '1/05/19',
    '2/05/19',
    '3/05/19',
    '4/05/19',
    '5/05/19',
    '6/05/19',
    '7/05/19',
    '8/05/19',
    '9/05/19',
    '10/05/19',
    '11/05/19',
    '12/05/19',
    '13/05/19',
    '14/05/19',
    '15/05/19',
    '16/05/19',
    '17/05/19',
    '18/05/19',
    '19/05/19',
    '20/05/19',
    '21/05/19',
    '22/05/19',
    '23/05/19',
    '24/05/19',
    '25/05/19',
    '26/05/19',
    '27/05/19',
    '28/05/19',
    '29/05/19',
    '30/05/19',
    '31/05/19'
  ]
}

const getPredictionData = async () => {
  return [
    5,
    2,
    5,
    5,
    3,
    1,
    10,
    3,
    4,
    5,
    3,
    2,
    2,
    2,
    2,
    4,
    5,
    3,
    1,
    1,
    8,
    3,
    2,
    1,
    5,
    3,
    2,
    2,
    5,
    4,
    4,
    2,
    9,
    6,
    5,
    1,
    2,
    3,
    4,
    6,
    4,
    7,
    8,
    5,
    8,
    6,
    4,
    4,
    5,
    6,
    2,
    7,
    3,
    12,
    1,
    1,
    12,
    10,
    4,
    6,
    3,
    5,
    4,
    9,
    10,
    5,
    2,
    3,
    2,
    6,
    4,
    7,
    9,
    6,
    6,
    5,
    5,
    13,
    15,
    6,
    1,
    5,
    2,
    8,
    8,
    8,
    9,
    5,
    3,
    9,
    14,
    4,
    6,
    5,
    4,
    6,
    2,
    5,
    7,
    8,
    9,
    1,
    2,
    2,
    5,
    12,
    1,
    7,
    1,
    5,
    1,
    5,
    9,
    2,
    3,
    1,
    3,
    1,
    10,
    5,
    11,
    2,
    8,
    2,
    3,
    8,
    5,
    7,
    2,
    3,
    1,
    2,
    3,
    11,
    6,
    17,
    2,
    1,
    1,
    5,
    9,
    1,
    6,
    3,
    1,
    2,
    8,
    3,
    4,
    6,
    2
  ]
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

    const toOverbooking = 70 - reservasTotalRooms < 0 ? true : false

    dispoSupuesto.value = 70 - reservasTotalRooms
    dispoReal.value =
      70 - reservasFaltaRooms < 0
        ? 70 - reservasAsistenciaRooms
        : 70 - reservasFaltaRooms

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
