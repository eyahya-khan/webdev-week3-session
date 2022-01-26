document.getElementById('form').onsubmit = event => {
  event.preventDefault()

  // console.log('Form submitted')
  // alert('Form submitted')
  const inputValue = document.getElementById('nameInput').value

  // document.getElementById('greeting').innerText = 'Hello ' + inputValue
  document.getElementById('greeting').innerText = `Hello ${inputValue}!`
}
