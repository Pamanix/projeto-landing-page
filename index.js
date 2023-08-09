var setaDireita = window.document.getElementById("seta_direita");
var setaEsquerda = window.document.getElementById("seta_esquerda");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
// variaveis para pegar as informaçoes do html
//evitar traços no javascript
function RolarDireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:65px"
}
function RolarEsquerda(){
    Bruna.style ="display:none"
    Leonardo.style ="display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}
