function validaIdade() {
  var idade = document.getElementById('idade').value
  if (idade >= 18) {
    alert('de maior!')
  } else {
    alert('de menor!')
  }
}
