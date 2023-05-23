function verificacion (){
    let cantidad1 = document.querySelector("#sticker1").value;
    let cantidad2 = document.querySelector("#sticker2").value;
    let cantidad3 = document.querySelector("#sticker3").value;
    let total = Number(cantidad1) + Number(cantidad2) + Number(cantidad3);
    let resultado = document.querySelector ("#cantidad"); 

    if ( total <= 10) {
        resultado.innerHTML = "Llevas" + total +"stickers";
    } else {
        resultado.innerHTML = "LLevas demasiados stickers" 
    }

}