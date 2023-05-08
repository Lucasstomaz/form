

const button = document.querySelector('button')

const addloading = () => {
  button.innerHTML = '<img src="./images/loading.png" class="loading">'
}

const removeloading = () => {
  button.innerHTML = 'Enviado'
}

const handleSubmit = event => {
  event.preventDefault()
  addloading()

  const name = document.querySelector('input[name=name]').value
  const number = document.querySelector('input[name=number]').value
  const bem = document.querySelector('select[name=bem]').value
  const valor = document.querySelector('input[name=valor]').value

  fetch('https://api.sheetmonkey.io/form/jLPs7hu4zRHMvXf5aQMZ3', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, number, bem, valor })
  }).then(() => removeloading())
}

document.querySelector('form').addEventListener('submit', handleSubmit)


