var contador = 0;

function c() {
    let tituloFormulario = document.getElementById("titulo").value
    let imagenFormulario = document.getElementById("imagen").value
    let descripcionFormulario = document.getElementById("descripcion").value

    if (tituloFormulario == "" || imagenFormulario == "" || descripcionFormulario == "") {
        alert("Rellena todos los campos")
    }
    else {
        var element = document.getElementById("div1");
        var tarjeta = document.createElement("div");
        element.appendChild(tarjeta);
        tarjeta.setAttribute("id", "tarjeta" + contador);
        tarjeta.setAttribute("class", "tarjetaClase");

        element = document.getElementById("tarjeta" + contador)
        var titulo = document.createElement("h1");
        var imagen = document.createElement("img");
        var descripcion = document.createElement("p");

        var botoncerrar = document.createElement("button");
        element.appendChild(botoncerrar);
        botoncerrar.setAttribute("id", "boton" + contador);
        botoncerrar.setAttribute("class", "cerrar");
        botoncerrar.setAttribute("onclick", "e(this)");
        botoncerrar.setAttribute("title", "Eliminar");
        var ntexto = document.createTextNode("x");
        botoncerrar.appendChild(ntexto);

        var botonEditar = document.createElement("button");
        element.appendChild(botonEditar);
        botonEditar.setAttribute("id", "botonEditar" + contador);
        botonEditar.setAttribute("class", "editar");
        botonEditar.setAttribute("title", "Editar");
        botonEditar.setAttribute("onclick", "editar(this)");

        var botonVisualizar = document.createElement("button");
        element.appendChild(botonVisualizar);
        botonVisualizar.setAttribute("id", "botonVisualizbotonVisualizar" + contador);
        botonVisualizar.setAttribute("title", "Visualizar");
        botonVisualizar.setAttribute("class", "visualizar");
        botonVisualizar.setAttribute("onclick", "visualizar(this)");


        imagen.setAttribute("id", "imagen" + contador);

        var ntexto = document.createTextNode(tituloFormulario);
        titulo.appendChild(ntexto);
        titulo.setAttribute("id", "titulo" + contador);
        var ntexto = document.createTextNode(descripcionFormulario);
        descripcion.appendChild(ntexto);
        descripcion.setAttribute("id", "descripcion" + contador)
        element.appendChild(titulo);
        element.appendChild(imagen);

        document.getElementById("imagen" + contador).src = imagenFormulario;

        element.appendChild(descripcion);
        contador++;
        document.getElementById("titulo").value = "";
        document.getElementById("imagen").value = "";
        document.getElementById("descripcion").value = "";
    }


}

function e(e) {
    var idBoton = e.id;

    var idTarjeta = document.getElementById(idBoton).parentNode;

    var element = document.getElementById("div1");
    var tarjeta = document.getElementById(idTarjeta.id);
    element.removeChild(tarjeta);
}

function editar(e) {

    let tituloFormulario = document.getElementById("titulo").value
    let imagenFormulario = document.getElementById("imagen").value
    let descripcionFormulario = document.getElementById("descripcion").value

    if (tituloFormulario == "" || imagenFormulario == "" || descripcionFormulario == "") {
        alert("Rellena todos los campos")
    }
    else {
        var idBoton = e.id;
        var idTarjeta = document.getElementById(idBoton).parentNode;
        var tarjeta = document.getElementById(idTarjeta.id);
        var id = idTarjeta.id.substring(7);

        var titulo = document.getElementById("titulo" + id);
        var tituloNuevo = document.createElement("h1");
        var texto = document.createTextNode(tituloFormulario);
        tituloNuevo.appendChild(texto);
        tituloNuevo.setAttribute("id", "titulo" + id);
        tarjeta.replaceChild(tituloNuevo, titulo);


        var imagen = document.getElementById("imagen" + id);
        var imagenNueva = document.createElement("img");
        imagenNueva.setAttribute("id", "imagen" + id);
        tarjeta.replaceChild(imagenNueva, imagen);
        document.getElementById(imagenNueva.id).src = imagenFormulario;

        var descripcion = document.getElementById("descripcion" + id);
        var descripcionNuevo = document.createElement("p");
        var texto = document.createTextNode(descripcionFormulario);
        descripcionNuevo.appendChild(texto);
        descripcionNuevo.setAttribute("id", "descripcion" + id);
        tarjeta.replaceChild(descripcionNuevo, descripcion);
        document.getElementById("titulo").value = "";
        document.getElementById("imagen").value = "";
        document.getElementById("descripcion").value = "";
    }
}


function visualizar(e){

    var idBoton = e.id;
    var idTarjeta = document.getElementById(idBoton).parentNode;
    var id = idTarjeta.id.substring(7);

    var text = document.getElementById("titulo" + id).innerHTML;
    document.getElementById("titulo").value = text;

    var text = document.getElementById("imagen" + id).src;
    document.getElementById("imagen").value = text;

    var text = document.getElementById("descripcion" + id).innerHTML;
    document.getElementById("descripcion").value = text;
}