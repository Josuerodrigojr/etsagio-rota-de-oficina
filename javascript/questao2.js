let cor = 3;

let selecionados = [];

function clicar(posicao){
  clicarEMudarPorId(posicao)
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
console.log(selecionados)
 
}