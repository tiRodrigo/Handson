function contar() {
  // Solicita o valor total da conta e converte para um número decimal
  var valorConta = parseInt(document.getElementById('val1').value)

  // Solicita o número de clientes e converte para um número inteiro
  var numClientes = parseInt(document.getElementById('val2').value)

  // Calcula o valor a ser pago por cada cliente
  var valorPorCliente = valorConta / numClientes

  // Formata o valor com 2 casas decimais
  valorPorCliente = valorPorCliente.toFixed(2)

  // Exibe o valor a ser pago por cada cliente
  alert('Valor por cliente: R$' + valorPorCliente)
}
