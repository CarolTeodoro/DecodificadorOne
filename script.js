//*textoDigitado* id do text area que será manipulado
//*botaoUm* id do botão para incriptografar
//*botaoDois* id do botão para descriptografar
//*imageminicial* id da imagem que deve sumir assim que for clicado em criptografar
//*mensagemInicial* id da mensagem inicial que deve ser substituido pelo retorno do texto criptografado 


var inputDoUsuario = document.getElementById("textoDigitado");
var entradaDoUsuario = String(inputDoUsuario);
var inputSplitado = entradaDoUsuario.split("");

var textoCriptografado = document.getElementById("mensagemTranscrita");

var imgASermostrada = document.getElementById("nadaPorAqui")


var botaoCopia = document.getElementById("botaoCopy");
botaoCopia.style.display = "none";

var textoIndicaDecodificacao = document.getElementById("estaESuaMensagem");
textoIndicaDecodificacao.style.display = "none";

function codifica(inputSplitado){

  inputDoUsuario = document.getElementById("textoDigitado");
  entradaDoUsuario = String(inputDoUsuario.value);
  inputSplitado = entradaDoUsuario.split("");
  let resultado = "";

 for(let i = 0; i< inputSplitado.length; i++){
     switch (inputSplitado[i]) {
       case "a":
         inputSplitado[i] = "ai";
         break;
       case "e":
         inputSplitado[i] = "enter";
         break;
       case "i":
         inputSplitado[i] = "imes";
         break;
       case 'o':
         inputSplitado[i] = "ober";
         break;
       case "u":
         inputSplitado[i] = "ufat";
         break;
     };
  
   }
     inputSplitado = String(inputSplitado.join(""));
 
    resultado += inputSplitado;

    function mostraResultado(){
      if(codifica){
        imgASermostrada.style.display = "none"
        textoCriptografado.value = resultado;
        inputDoUsuario.value = ""
        botaoCopia.style.display = "flex";
        textoIndicaDecodificacao.style.display = "flex"

        }
      }
            
      mostraResultado();

    
    
  };


function decodifica(){
  
  //console.log(inputDoUsuario.value);

        if(inputDoUsuario.value === ""){

          textodaArea = document.getElementById("mensagemTranscrita");
          //textoCriptografado.value = String(textodaArea.value);
          let newStr = String(textodaArea.value).split(" ");
          let resultadoDecodifica = "";
  
          for(let i = 0; i< newStr.length; i++){
  
            for (let j = 0; j < newStr[i].length; j++) {
    
                if(newStr[i].includes("ai")){
            
                    newStr[i]= newStr[i].replace("ai", "a")
                }
                if(newStr[i].includes("enter")){
                    
                    newStr[i] = newStr[i].replace("enter", "e")
                }
                if(newStr[i].includes("imes")){
                    
                    newStr[i] = newStr[i].replace("imes", "i")
                }
                if(newStr[i].includes("ober")){
                    
                    newStr[i] = newStr[i].replace("ober", "o")
                }
                if(newStr[i].includes("ufat")){
                    
                    newStr[i] = newStr[i].replace("ufat", "u")
                }
                
            }    
          
  
          };
      
  //Aqui estou juntando tudo de novo na novaa variável
          newStr= String(newStr.join(" "));
  
          resultadoDecodifica += newStr;
          console.log(resultadoDecodifica)
  
          function mostraResultadoDecodifica(){
              if(decodifica){
  
              imgASermostrada.style.display = "none";
              inputDoUsuario.value = resultadoDecodifica;
              textodaArea.value = "";
              botaoCopia.style.display = "none";
  
              }
          }      
        
        mostraResultadoDecodifica();


        } else if(inputDoUsuario.value !== ""){
            console.log(inputDoUsuario.value);
            textodaArea = document.getElementById("textoDigitado");
            console.log(textodaArea);
            textoCriptografado.value = String(textodaArea.value);
            let newStr = textoCriptografado.value.split(" ");
            let resultadoDecodifica = "";
  
              for(let i = 0; i< newStr.length; i++){
  
                    for (let j = 0; j < newStr[i].length; j++) {
  
                        if(newStr[i].includes("ai")){
          
                            newStr[i]= newStr[i].replace("ai", "a")
                          }
                        if(newStr[i].includes("enter")){
                  
                            newStr[i] = newStr[i].replace("enter", "e")
                          }         
                        if(newStr[i].includes("imes")){
                  
                            newStr[i] = newStr[i].replace("imes", "i")
                          }
                        if(newStr[i].includes("ober")){
                  
                            newStr[i] = newStr[i].replace("ober", "o")
                          }
                        if(newStr[i].includes("ufat")){
                  
                            newStr[i] = newStr[i].replace("ufat", "u")
                        }
              
                      }    
          
  
      }
      
  //Aqui estou juntando tudo de novo na novaa variável
            newStr= String(newStr.join(" "));
  
            resultadoDecodifica += newStr;
            console.log(resultadoDecodifica)
  
            function mostraResultadoDecodifica(){
                if(decodifica){
  
                    imgASermostrada.style.display = "none";
                    textoCriptografado.value = resultadoDecodifica;
                    inputDoUsuario.value = "";
                    botaoCopia.style.display = "flex";
  
                }
            }      
        
        mostraResultadoDecodifica();


        }

}




function copy(){
    //copiar o texto e poder colar em outro lugar
    let textoCopiado = document.getElementById("mensagemTranscrita");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
};