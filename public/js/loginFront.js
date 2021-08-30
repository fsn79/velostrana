const loginForm = document.querySelector('#loginFormId')
const fromLoginToMainBtn = document.querySelector('#fromLoginToMainBtn')
const putBodyHere = document.querySelector('#putBodyHere')

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const { method, action, loginEmail, loginPassword } = event.target;

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        loginEmail: loginEmail.value,
        loginPassword: loginPassword.value
      })
    })

    const data = await response.json();
    // клиентский редирект на URL полученный из ответа сервера + обработка ошибки дубликата почты
    if (data.registration) {
      window.location.href = data.message
    } else {
    //   feedback.textContent = data.message
    //   feedback.style.display = 'block'
  }
})
}
