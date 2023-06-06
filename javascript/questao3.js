

function adicionar() {
const teste = []

  const clientes = (document.getElementById('clientes').value).split(',');
  const consumo =(document.getElementById("consumo").value).split(',');

  const lista = document.getElementById('lista');

for (let i = 0; i < clientes.length; i++) {
  const teste1 = {
    clientes: clientes[i],
    consumo: consumo[i]
  }
  teste.push(teste1)

}


  

  lista.innerHTML= teste.map(function(element){
    return `<tr>
    <td>${element.clientes}</td>
    <td>  <form>
    
    <INPUT TYPE="text" NAME="OPCAO" VALUE="op1"> ${element.consumo}

    </form> '</td>
    </tr>
    `
    
    
  }).join(""); 
  console.log(clientes)
  console.log(consumo)





}

let consumoIndividual =[];
let consumoColetivo = [];
let gasto = [];
let clientes = []

function adicionarItem (){

  const cliente = document.getElementById('cliente')
  const produto = document.getElementById('produto');
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const preco = parseFloat(document.getElementById('preco').value);
  const individual = document.getElementById('individual');
  let taxa = document.getElementById('taxa');

const consumo = {
  cliente: cliente.value,
  produto: produto.value,
  quantidade: quantidade,
  preco: preco,
  individual: individual.value,
  taxa: taxa.value
}
console.log('preco do pessoal', consumo.preco)
clientes.push(consumo.cliente)

//Verificação no que comeu sozinho
if(consumo.individual == "Não"){
  consumoColetivo.push(consumo.produto)

} else {
  consumoIndividual.push(consumo)
}




gasto.push(consumo)

console.log(consumoColetivo)

let lista = document.getElementById('lista')


  lista.innerHTML = gasto.map(function(element){
    return `<tr>
    <td>${element.cliente}</td>
    <td>${element.produto}</td>
    <td>${element.individual}</td>
    <td>${element.quantidade}</td>
    <td>${element.preco}</td>
    </tr>
    `
  }).join("");


  

}



function total(){

  

      for (let j = 0; j < gasto.length; j++) {
        let quant = 1;

        quant = consumoColetivo.filter(x => x == gasto[j].produto).length;
        console.log(quant, 'quantidade')
        if( quant == 0){
          quant = 1;
        }
        gasto[j].preco = (gasto[j].preco/quant)
        

  }

  console.log('Array ->>>', gasto)



  
  let gastos = 0;
  let taxa = false;
let total = [];
let valorTotal = 0;

//Separando os nomes para não ter repetição

var novaArr = clientes.filter(function(element, i) {
    return clientes.indexOf(element) === i;
});
console.log(novaArr);


for (let i = 0; i < novaArr.length; i++) {
  for (let j = 0; j < gasto.length; j++) {
    
    if(novaArr[i] == gasto[j].cliente){
      console.log(gasto[j].cliente, novaArr[i])
      gastos = gastos + (gasto[j].preco*gasto[j].quantidade)
      console.log(gastos, 'gastos')
      if(gasto[j].taxa == 'Sim'){
        taxa = true
      }
      
    }
    
    
  }
  if(taxa == true){
    gastos = (gastos*1.1);
  }
  valorTotal = valorTotal + gastos

  let conta ={
    cliente: novaArr[i],
    valor: gastos.toFixed(2)
  }
  total.push(conta)
  
  console.log(total)
  gastos = 0;
  taxa = false;

  
}

  let lista = document.getElementById('lista')

  let conta = `<tr>
  <td></td>
  <td>${valorTotal.toFixed(2)}</td>
  
  </tr>
  `


  lista.innerHTML = total.map(function(element){
    return `<tr>
    <td>${element.cliente}</td>
    <td>R$: ${element.valor}</td>
    </tr>
    `
  }).join("") + conta;
}






function teste() {
console.log(2*1.2)


}