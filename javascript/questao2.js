let cor = 3;
let verificacaoVizinhos = [-1,1,11,10,9,-9,-10,-11]

let selecionados = [];

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

function celulasMortas(posicao){

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
    
    celulasMortas(pintados[i])

    // switch (celulasMortas(pintados[i])) {
    //   case 2:
    //     acender.push(pintados[i]);
        
    //     break;
    
    //   default:
    //     break;
    // }

  }
  


  for (let i = 0; i < apagar.length; i++) {
    clicarEMudarPorId(apagar[i])
    
  }

  // for (let i = 0; i < acender.length; i++) {
  //   clicarEMudarPorId(acender[i])
    
  // }
  
}

function reset(){
  console.log('foi')
  const limite = selecionados.length
  for (let i = 0; i < limite; i++) {
    console.log(selecionados[0], selecionados.length)
    clicarEMudarPorId(selecionados[0]);
    console.log(selecionados)
    
  }
  
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