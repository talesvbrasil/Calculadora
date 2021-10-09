var valorA = 0;
var valorB = 0;
var operacao = '?';
var flagOp ='OFF';
var flagIgual = 'OFF';
var flagDig ='OFF';

function inserir(param) {
 
  var valorAtual = document.getElementById("visor").innerHTML;

  if(flagOp=='ON'){
    valorA = document.getElementById("visor").innerHTML;
  }
  if(flagDig=='OFF'){
    document.getElementById("visor").innerHTML = '';
  }
  if(valorAtual == 0) {
    document.getElementById("visor").innerHTML = param;
  } else {
    document.getElementById("visor").innerHTML = document.getElementById("visor").innerHTML + param;
  }

  flagDig = 'ON'; 

}

function limpar(param) {
  
  valor = '?';
  operacao = '?';
  flagOp ='OFF';
  flagIgual = 'OFF';
  flagDig ='OFF';
  document.getElementById("visor").innerHTML = "0";

}

function deletar() {

  var valorAtual = document.getElementById("visor").innerHTML;

  if(valorAtual.length <= 1) {
    valorAtual = 0
  } else {
    valorAtual = valorAtual.slice(0, -1);
  }
  document.getElementById("visor").innerHTML = valorAtual;

}

function inserirop(param){

  if(flagOp == 'ON'){
    valorB = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = operador(operacao);
  }
  operacao = param;
  flagOp = 'ON';
  flagIgual = 'OFF';
  flagDig = 'OFF';

}

function operador(param){

  switch(param){
    case '+':
      resultado = Number(valorA) + Number(valorB);
      break;
    case '-':        
      resultado = Number(valorA) - Number(valorB);
      break;  
    case '*':
      resultado = Number(valorA) * Number(valorB);
      break;
    case '/':
      resultado = Number(valorA) / Number(valorB);
      break;
    case '?':
      resultado = document.getElementById("visor").innerHTML;
    default:
      document.getElementById("visor").innerHTML = 'ERRO'
      break;
  }

  return(resultado);

}

function calcular(param){

  if(flagIgual == 'OFF'){
    valorB = document.getElementById("visor").innerHTML;
  }else{
    valorA = document.getElementById("visor").innerHTML;
  }

  document.getElementById("visor").innerHTML = operador(operacao);
  teclaAnterior = param;
  flagIgual = 'ON';
  flagOp = 'OFF';
  flagDig = 'OFF';
  
}