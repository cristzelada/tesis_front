const calcular = document.getElementById('calcular')

calcular.addEventListener('click', async () => {
  //   Swal.fire('Clasificacion', 'ASISTENSIA', 'success')
  //   Swal.fire('Clasificacion', 'FALTA', 'warning')
  const weekday = document.getElementById('weekday').value
  const chanel = document.getElementById('chanel').value
  const typeroom = document.getElementById('typeroom').value
  const months = document.getElementById('months').value
  const rooms = document.getElementById('rooms').value

  const response = await getClasification({
    weekday,
    chanel,
    typeroom,
    months,
    rooms
  })
  response.clasification === 1
    ? Swal.fire(
        'Clasificacion',
        `ASISTENCIA(${response.clasification}) score : ${response.positive}`,
        'success'
      )
    : Swal.fire(
        'Clasificacion',
        `FALTA(${response.clasification}) score:  ${response.negative}`,
        'warning'
      )
})

const getClasification = async (data) => {
  try {
    waiting(true)
    const response = await axios.post(
      'https://api-peracrist.herokuapp.com/clasification',
      data
    )
    waiting(false)
    return response.data
  } catch (error) {
    console.log(error)
    waiting(false)
  }
}

const waiting = (wait) => {
  const progressbar = document.getElementById('progress')
  wait
    ? progressbar.removeAttribute('style')
    : (progressbar.style.display = 'none')
}
