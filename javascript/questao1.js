const element2 = "7";

function converter(){
  const palavra = document.getElementById("converter").value;
  let arabico = 0;
  for (let i = 0; i < palavra.length; i++) {
    const element1 = palavra[i].toUpperCase();
    

    switch (element1) {
      case "M":
        arabico = arabico + 1000;
        break;
        
        case "D":
        arabico = arabico + 500;
        break;

        case "C":
          if (palavra[i+1].toUpperCase() === "D"){
            arabico = arabico + 400;
            i++;
          } else if(palavra[i+1].toUpperCase() === "M") {
            arabico = arabico + 900;
            i++;
          } else {
            arabico = arabico + 100;
          }
        
        break;
        
        case "L":
          if (palavra[i+1].toUpperCase() ==="C"){
            arabico = arabico + 50;
            i++;
          } else if (palavra[i+1].toUpperCase() === "D"){
            arabico = arabico + 450;
            i++;
          } else if(palavra[i+1].toUpperCase() === "M") {
            arabico = arabico + 950;
            i++;
          } else {
            arabico = arabico + 50;
          }
        
        break;
        
      case "X":
        if (palavra[i+1].toUpperCase() ==="L"){
          arabico = arabico + 40;
          i++;
        } else if (palavra[i+1].toUpperCase() === "C"){
          arabico = arabico + 90;
          i++;
        } else if(palavra[i+1].toUpperCase() === "D") {
          arabico = arabico + 40;
          i++;
        } else if(palavra[i+1].toUpperCase() === "M"){
          arabico = arabico + 990;
          i++;
        } else {
          arabico = arabico + 10;
        }
        break;

      case "V":
        if (palavra[i+1].toUpperCase() ==="L"){
          arabico = arabico + 45;
          i++;
        } else if (palavra[i+1].toUpperCase() === "C"){
          arabico = arabico + 95;
          i++;
        } else if(palavra[i+1].toUpperCase() === "D") {
          arabico = arabico + 495;
          i++;
        } else if(palavra[i+1].toUpperCase() === "M"){
          arabico = arabico + 995;
          i++;
        } else if(palavra[i+1].toUpperCase() === "X"){
          arabico = arabico + 5;
          i++;
        } 
        else {
          arabico = arabico + 5;
        }
        break;

      case "I" || 'i':
        if (palavra[i+1].toUpperCase() ==="L"){
          arabico = arabico + 49;
          i++;
        } else if (palavra[i+1].toUpperCase() === "C"){
          arabico = arabico + 99;
          i++;
        } else if(palavra[i+1].toUpperCase() === "D") {
          arabico = arabico + 499;
          i++;
        } else if(palavra[i+1].toUpperCase() === "M"){
          arabico = arabico + 999;
          i++;
        } else if(palavra[i+1].toUpperCase() === "X"){
          arabico = arabico + 9;
          i++;
        } else if(palavra[i+1].toUpperCase() === "V"){
          arabico = arabico + 4;
          i++;
        }
        else {
          arabico = arabico + 1;
        }


        break;
        
        
    
      default:
        break;
    }
    
  }



  console.log(arabico)
}