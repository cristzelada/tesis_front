const login = document.getElementById('login')

login.addEventListener('click', async () => {
  const user = document.getElementById('user').value
  const password = document.getElementById('password').value
  try {
    waiting(true)
    const response = await axios.post('/login', {
      user,
      password
    })
    localStorage.setItem('token', response.data.token)
    waiting(false)
    window.location.href = '/'
  } catch (error) {
    Swal.fire('Error', 'Credenciales incorrectas', 'warning')
    waiting(false)
  }
})

const waiting = (wait) => {
  const progressbar = document.getElementById('progress')
  wait
    ? progressbar.removeAttribute('style')
    : (progressbar.style.display = 'none')
}
