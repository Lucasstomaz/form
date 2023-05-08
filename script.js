const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name=name]').value;
  const number = document.querySelector('input[name=number]').value;
  const bem = document.querySelector('input[name=bem]').value;
  const valor = document.querySelector('input[name=valor]').value;

  fetch('https://api.sheetmonkey.io/form/jLPs7hu4zRHMvXf5aQMZ3', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, number, bem, valor }),
  });
}

document.querySelector('form').addEventListener('submit', handleSubmit);
