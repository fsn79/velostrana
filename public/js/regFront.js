const regForm = document.querySelector('#regForm');

if (regForm) {
    regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { method, action, inputName, inputEmail, inputPassw } = event.target;
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassw.value
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