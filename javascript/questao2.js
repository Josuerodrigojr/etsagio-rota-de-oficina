let cor = 3;
let verificacaoVizinhos = [-1,1,11,10,9,-9,-10,-11]
let quadro = []
let selecionados = [];
let geracao = 0;



function clicar(posicao){
  clicarEMudarPorId(posicao)
}

function celulasVivas (pintado){
  let vizinhosVivo = 0;



  for (let i = 0; i < selecionados.length; i++) {

    for (let j = 0; j < verificacaoVizinhos.length; j++) {
      if (selecionados[i]==(parseInt(pintado) + verificacaoVizinhos[j])){
        vizinhosVivo++;
      }
      
      
    }
    
    
  }
  return vizinhosVivo;
}

function celulasMortas(){
  let aceso = false;
  let quantAceso = 0;
  let acender = []
  for (let i = 1; i <= 100; i++) {
    for (let j = 0; j < selecionados.length; j++) {
      if(selecionados[j]==i){
        aceso = true;
      }
      
    }
    if(aceso == false){

      for (let w = 0; w < selecionados.length; w++) {

        for (let z = 0; z < verificacaoVizinhos.length; z++) {
          if (selecionados[w]==(parseInt(i) + verificacaoVizinhos[z])){

            quantAceso++;
          }
          
          
        }
        
        
          



          
        }
        if(quantAceso===3){
          acender.push(i)

      }
      quantAceso=0;
      
    }
    
    aceso = false;
    
  }
  return acender;

}

function start(){
  let pintados = selecionados
  let apagar = [];
  let acender = [];



  for (let i = 0; i < pintados.length; i++) {

    switch (celulasVivas(pintados[i])) {
      case 0:
        apagar.push(pintados[i])
        break;
      case 1:
        apagar.push(pintados[i]);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        apagar.push(pintados[i]);
        break;
    }
    
   

    

  }
  
  acender = celulasMortas();

  for (let i = 0; i < acender.length; i++) {
    clicarEMudarPorId(acender[i])
  }

  for (let i = 0; i < apagar.length; i++) {
    clicarEMudarPorId(apagar[i])

    
  }

geracao++;
document.getElementById("geracao").innerHTML = geracao + 'º geração'
  
}

function reset(){
  const limite = selecionados.length
  for (let i = 0; i < limite; i++) {
    clicarEMudarPorId(selecionados[0]);
    
  }
  geracao = 0;
  document.getElementById("geracao").innerHTML = geracao + 'º geração'
  
}


function clicarEMudarPorId(posicao) {
  let li = document.getElementById(`${posicao}`);
  let liId = li.id;
  let cor = -1;

  for (let i = 0; i < selecionados.length; i++) {
    if(selecionados[i]==liId){
      cor = i;
    } 
    
  }

  if (cor != -1){
    li.style.backgroundColor = "#ff0010";
    selecionados.splice(cor,1)
    
  } else {
    li.style.backgroundColor = "#7e74";
    selecionados.push(liId)

  }

 
}