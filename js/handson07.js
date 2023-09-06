function nota() {
  var nota1 = parseInt(document.getElementById('nota1').value)
  var nota2 = parseInt(document.getElementById('nota2').value)
  var nota3 = (nota1 + nota2) / 2

  if (nota1 >= 7) {
    alert(nota3 + ' Aprovado ')
  } else {
    alert(nota3 + ' Reprovado ')
  }
}
