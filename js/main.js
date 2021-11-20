

var contador = 0;

function c(){
    let tituloFormulario = document.getElementById("titulo").value
    let imagenFormulario = document.getElementById("imagen").value
    let descripcionFormulario = document.getElementById("descripcion").value

    if(tituloFormulario == "" || imagenFormulario == "" || descripcionFormulario == ""){
        alert("Rellena todos los campos")
    }
    else{
        var element = document.getElementById("div1");
        var tarjeta = document.createElement("div");
        element.appendChild(tarjeta);
        tarjeta.setAttribute("id","tarjeta"+contador);
        tarjeta.setAttribute("class","tarjetaClase");

        element = document.getElementById("tarjeta"+contador)
        var titulo = document.createElement("h1");
        var imagen = document.createElement("img");
        var descripcion = document.createElement("p");

        imagen.setAttribute("id","imagen"+contador);
        

        var ntexto = document.createTextNode(tituloFormulario);
        titulo.appendChild(ntexto);
        var ntexto = document.createTextNode(descripcionFormulario);
        descripcion.appendChild(ntexto);


        element.appendChild(titulo);
        element.appendChild(imagen);

        document.getElementById("imagen"+contador).src = imagenFormulario;

        element.appendChild(descripcion);
        contador++;
    }

    }