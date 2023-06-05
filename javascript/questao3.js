

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

function adicionarItem (){

  const cliente = document.getElementById('cliente')
  const produto = document.getElementById('produto');
  const quantidade = document.getElementById('quantidade');
  const preco = document.getElementById('preco');

const consumo = {
  cliente: cliente.value,
  produto: produto.value,
  quantidade: quantidade.value,
  preco: preco.value
}

consumoIndividual.push(consumo)

let lista = document.getElementById('lista')


  lista.innerHTML = consumoIndividual.map(function(element){
    return `<tr>
    <td>${element.cliente}</td>
    <td>${element.produto}</td>
    <td>${element.quantidade}</td>
    <td>${element.preco}</td>
    </tr>
    `
  }).join("");

  

}

