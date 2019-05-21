const calcular = document.getElementById('calcular')

calcular.addEventListener('click', async () => {
  const weekday = document.getElementById('weekday').value
  const chanel = document.getElementById('chanel').value
  const typeroom = document.getElementById('typeroom').value
  const months = document.getElementById('months').value
  const rooms = document.getElementById('rooms').value
  const date = document.getElementById('date').value

  const response = await postClasification({
    weekday,
    chanel,
    typeroom,
    months,
    rooms,
    date
  })
  response.clasification === 1
    ? Swal.fire(
        'Clasificacion',
        `ASISTENCIA(${response.clasification}) score : ${response.positive}`,
        'success'
      ).then((result) => {
        location.reload()
      })
    : Swal.fire(
        'Clasificacion',
        `FALTA(${response.clasification}) score:  ${response.negative}`,
        'warning'
      )
})

const postClasification = async (data) => {
  try {
    waiting(true)
    const response = await axios.post(url)
    waiting(false)
    return response.data
  } catch (error) {
    console.log(error)
    waiting(false)
  }
}

const getClasification = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const waiting = (wait) => {
  const progressbar = document.getElementById('progress')
  wait
    ? progressbar.removeAttribute('style')
    : (progressbar.style.display = 'none')
}

const printTable = (clasifications) => {
  const $table = document.getElementById('table-body')
  const $tr = document.createElement('tr')
  let num = 1
  for (clasification of clasifications) {
    let line = getTableLine(clasification, num)
    $table.appendChild(line)
    num++
  }
}

const getTableLine = (clasification, num) => {
  const line = `
    <td style="text-align: center;" >${num}</td>
    <td style="text-align: center;" >${getDayName(clasification.weekday)}</td>
    <td style="text-align: center;" >${getCanal(clasification.chanel)}</td>
    <td style="text-align: center;" >${getTipoCuarto(
      clasification.typeroom
    )}</td>
    <td style="text-align: center;" >${clasification.months}</td>
    <td style="text-align: center;" >${clasification.rooms}</td>
    <td style="text-align: center;" >${getTipoAsistencia(
      clasification.clasification
    )}</td>
  `
  const element = document.createElement('tr')
  element.innerHTML = line
  return element
}

const getDayName = (day) => {
  switch (day) {
    case '1':
      return 'Lunes'
    case '2':
      return 'Martes'
    case '3':
      return 'Miercoles'
    case '4':
      return 'Jueves'
    case '5':
      return 'Viernes'
    case '6':
      return 'Sabado'
    case '7':
      return 'Domingo'
  }
}

const getCanal = (chanel) => {
  switch (chanel) {
    case '1':
      return 'Booking'
    case '2':
      return 'Teléfono'
    case '3':
      return 'Correo'
    case '4':
      return 'Otros'
  }
}

const getTipoCuarto = (room) => {
  switch (room) {
    case '1':
      return 'simple'
    case '2':
      return 'matrimonial'
    case '3':
      return 'doble'
    case '4':
      return 'suite'
  }
}

const getTipoAsistencia = (asistencia) => {
  return asistencia == 1 ? 'asistencia' : 'falta'
}
;(async function () {
  const clasifications = await getClasification()
  printTable(clasifications)
})()
