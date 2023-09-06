function validaNumero(){
    var numero = document.getElementById("numero").value;
    if(numero>0){
      alert("o número é positivo!")
    }else if(numero <0){
      alert("o número é negativo!")
    }else{
      alert("o número é nulo")
    }
}