let free = false;

const validarCliente = (Time)=>{
    let edad = prompt("cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis pa");
            free = true;
        } else {
            alert("podes pasar pero tienes que pagar la entrada")
        }
    } else {
        alert("mira papu , sos menor de edad por ende no vas a pásar, MAQUINOLA ")
    }
}



validarCliente(23)
validarCliente(24)
validarCliente(0.3)
validarCliente(0.8)
validarCliente(1)
validarCliente(2)
validarCliente(2.9)
validarCliente(5)