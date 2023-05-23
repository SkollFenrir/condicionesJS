function adicionBorde() {
    let borderOn = "2px";
    let borderOff = "0px";
    let imagen = document.querySelector("#img");
    // = -> asignacion
    // == -> comprobacion ( 1 == '1') -> true
    // === -> comprobacion estricta ( 1 === '1' ) -> false

    if(imagen.style.borderWidth == borderOff) {
        imagen.style.borderWidth = borderOn;
    } else {
        imagen.style.borderWidth = borderOff;
    }
}