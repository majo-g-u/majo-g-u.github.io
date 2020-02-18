let coleccionCosas = JSON.parse(localStorage.getItem('storage')) || [];
let coleccionUnidad = JSON.parse(localStorage.getItem('storageUnidad')) || [];
let tablaListaCosas = document.getElementById('tablaListaCosas');
let listaResumen = document.getElementById('listaResumen');
let tablaUnidad = document.getElementById('tablaUnidad');
// Se crea una variable con valor 0 de la cantidad deseada que se quiere calcular
// en este caso se llama hamburguesasTotal (VER FUNCION LISTAR)
let hamburguesasTotal = 0;
let precioTotal = 0; 

// ===============TABLA PRINCIPAL=================

function listar(){
    tablaListaCosas.innerHTML = "";
    hamburguesasTotal = 0;
    coleccionCosas.forEach(mostrar);

    // Aqui se selecciona el input donde se mostrara el todal de hamburguesasTotal
    // que su id se llama totalHamburguesas (Ver FUNCION MOSTRAR)
    document.getElementById('totalHamburguesas').value = hamburguesasTotal;

    // total personas es la input que suma la cantidad de elementos en el arreglo con la function
    // llamada collecionCosas.length y coloca los numeros en el input
    document.getElementById('totalPersonas').value = coleccionCosas.length;
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputBebida').value = '';
    
}


function mostrar(item, i){
    tablaListaCosas.innerHTML += `<tr>
                                    <th scope="row">1</th>
                                        <td>${item.nombre}</td>
                                        <td>${item.cantidad}</td>
                                        <td>${item.bebida}</td>
                                        <td><button class="btn btn-danger" onclick=" borrarCompra(${i})"> X </button></td>
                                  </tr>`
    // Aqui se coloca la varaible creada al principio cuyo valor es 0 y se le agrega
    // el valor 0 + el item con la propiedad nuevero que trasforma los strings a tipo Number
    // y toma el valor de los items ingresados en la inputCantidad
    hamburguesasTotal += Number(item.cantidad);
};

// ================BOTON COMPRAR DE LA TABLA PRINCIPAL ====================== 

function botonEnviarInfoCompra(){
    let nuevoItem = {
        nombre: document.getElementById('inputNombre').value,
        cantidad: document.getElementById('inputCantidad').value,
        bebida: document.getElementById('inputBebida').value           
    };
    coleccionCosas.push(nuevoItem);
    listar()
    sumar()
    localStorage.setItem('storage', JSON.stringify(coleccionCosas));
}

function borrarCompra(item){
    coleccionCosas.splice(item,1);
    localStorage.setItem('storage', JSON.stringify(coleccionCosas));
    listar();
    sumar()
}



// ========================TABLA DE UNIDADES=====================

function listarUnidad(){
    tablaUnidad.innerHTML = '';
    precioTotal = 0;
    coleccionUnidad.forEach(mostarUnidad);
    document.getElementById('totalPrecio').value = precioTotal;
    document.getElementById('inputUnidad').value = '';
    document.getElementById('inputPrecio').value = '';
}

function mostarUnidad(item,i){
tablaUnidad.innerHTML += `<tr>                                                          
                            <td>${item.unidad}</td>
                            <td>${item.precio}</td>                                                     
                            <td><button class="btn btn-danger" onclick="borrarUnidad(${i})"> X </button></td>
                         </tr> `
                        precioTotal += Number(item.precio);           
}


// ====================BOTON UNIDAD=====================

function botonEnviarUnidad(){
    let nuevaUnidad = {
        unidad: document.getElementById('inputUnidad').value,
        precio: document.getElementById('inputPrecio').value
    };
    coleccionUnidad.push(nuevaUnidad);
    listarUnidad()
    sumar()
    localStorage.setItem('storageUnidad', JSON.stringify(coleccionUnidad));
}
 function borrarUnidad(item){
     coleccionUnidad.splice(item,1);
     localStorage.setItem('storageUnidad', JSON.stringify(coleccionUnidad));
     listarUnidad()
     sumar()
 }
 listar();
 listarUnidad();

 // Aqui tomo el valor de el total de precio que hay en la lista y lo multiplico por la
//  cantidad de hamburguesas que hay en la tabla principal

 function sumar(){
   let total = Number(document.getElementById('totalHamburguesas').value) * Number(document.getElementById('totalPrecio').value);
   let totalPorPersona = total / Number(document.getElementById('totalPersonas').value);
    document.getElementById('totalSuma').value = total;
    document.getElementById('totalPorPersona').value = totalPorPersona;
 }





