export default class TarjetaNoUser{
    constructor(nombreModal, apellidoModal,generoModal, dniModal, correoModal, direccionModal, celularModal, estadocivilModal){
        this.nombreModal = nombreModal;
        this.apellidoModal = apellidoModal;
        this.generoModal = generoModal;
        this.dniModal = dniModal;
        this.correoModal = correoModal;
        this.direccionModal = direccionModal;
        this.celularModal = celularModal;
        this.estadocivilModal = estadocivilModal;
        this.pedido = false;
    }


static getTjNouser(){
    return JSON.parse(localStorage.getItem('TjNoUser')) || [];
}


 solicitarTjNoUser(){
    

            let arrayNoUser = TarjetaNoUser.getTjNouser();
            arrayNoUser.push({
                nombreModal: this.nombreModal,
                apellidoModal: this.apellidoModal,
                generoModal: this.generoModal,
                dniModal: this.dniModal,
                correoModal: this.celularModal,
                direccionModal: this.direccionModal,
                celularModal: this.celularModal,
                estadocivilModal: this.estadocivilModal,
                pedido: this.solicitud,
                
            });
           
            localStorage.setItem('TjNoUser', JSON.stringify(arrayNoUser));
    
}



static ListarTjNoUser(){
    
    let showTjNoUser = document.getElementById('showTjNoUser');
    showTjNoUser.innerHTML = '';
    let noUserTable = document.getElementById('noUserTable');
    noUserTable.innerHTML = '';

  let arrayNoUser = TarjetaNoUser.getTjNouser();
  arrayNoUser.forEach(function(element, i){
 
     let clase = 'd-none';

     if(element.pedido){ 

showTjNoUser.innerHTML += `<div class="card text-center ${clase}" id="showNoUserCard">
                            <div class="card-header">
                            <h5>Un usuario No Registrado Solicita una tarjeta de credito</h5>
                            </div>
                                <div class="card-body">
                                <div class="card-text text-left mb-3">
                                    <p class="list-group-item ">Nombre: ${element.nombreModal}</p>
                                    <p class="list-group-item ">Apellido: ${element.apellidoModal}</p>
                                    <p class="list-group-item ">Numero de Dni: ${element.dniModal}</p>
                                    <p class="list-group-item ">Correo: ${element.correoModal}</p>
                                    <p class="list-group-item ">Genero: ${element.generoModal}</p>
                                    <p class="list-group-item ">Direccion: ${element.direccionModal}</p>
                                    <p class="list-group-item ">Numero de Telefono: ${element.celularModal}</p>
                                    <p class="list-group-item ">Estado Civil: ${element.estadocivilModal}</p>
                                </div>
                            <button id="aceptarNoUsers-${i}" type="button" value="true" class="btn btn-primary">Aceptar</button>
                            <a id="rechazarNoUser-${i}" href="#" class="btn btn-primary">Rechazar</a>
                            </div>
                            </div>`
                            noUserTable.innerHTML +=  `<tr class=""> 
                            <td>${element.nombreModal}</td>
                            <td>${element.apellidoModal}</td>
                            <td>${element.generoModal}</td>
                            <td>${element.dniModal}</td>
                            <td>${element.correoModal}</td>
                            <td>${element.direccionModal}</td>
                            <td>${element.celularModal}</td>
                            <td>${element.estadocivilModal}</td>
                            </tr>`
                        
                            }else {

                                showTjNoUser.innerHTML += `<div class="card text-center" id="showNoUserCard">
                            <div class="card-header">
                            <h5>Un usuario No Registrado Solicita una tarjeta de credito</h5>
                            </div>
                                <div class="card-body">
                                <div class="card-text text-left mb-3">
                                    <p class="list-group-item ">Nombre: ${element.nombreModal}</p>
                                    <p class="list-group-item ">Apellido: ${element.apellidoModal}</p>
                                    <p class="list-group-item ">Numero de Dni: ${element.dniModal}</p>
                                    <p class="list-group-item ">Correo: ${element.correoModal}</p>
                                    <p class="list-group-item ">Genero: ${element.generoModal}</p>
                                    <p class="list-group-item ">Direccion: ${element.direccionModal}</p>
                                    <p class="list-group-item ">Numero de Telefono: ${element.celularModal}</p>
                                    <p class="list-group-item ">Estado Civil: ${element.estadocivilModal}</p>
                                </div>
                            <button id="aceptarNoUsers-${i}" type="button" value="true" class="btn btn-primary">Aceptar</button>
                            <a id="rechazarNoUser-${i}" href="#" class="btn btn-primary">Rechazar</a>
                            </div>
                            </div>`

                            noUserTable.innerHTML +=  `<tr class=""> 
                            <td>${element.nombreModal}</td>
                            <td>${element.apellidoModal}</td>
                            <td>${element.generoModal}</td>
                            <td>${element.dniModal}</td>
                            <td>${element.correoModal}</td>
                            <td>${element.direccionModal}</td>
                            <td>${element.celularModal}</td>
                            <td>${element.estadocivilModal}</td>
                            </tr>`
                        
                            }
                            
                            setTimeout(function(){
                                    
                                let aceptarNoUsers = document.getElementById(`aceptarNoUsers-${i}`);
                                aceptarNoUsers.addEventListener('click', function(){
                                TarjetaNoUser.pedido(i);
                            
                
                                });
                            
                                let rechazarNoUser = document.getElementById(`rechazarNoUser-${i}`);
                                rechazarNoUser.addEventListener('click', function(){
                                TarjetaNoUser.borrarNoUser(i);       
                                });
                            
                                
                            });
                        });
}

// static aceptarNoUser(){
//     let arrayNoUser = TarjetaNoUser.getTjNouser();
//     let noUserTable = document.getElementById('noUserTable');
//     noUserTable.innerHTML = '';

//     noUserTable.innerHTML +=  `<tr class=""> 
//     <td>${arrayNoUser.nombreModal}</td>
//     <td>${arrayNoUser.apellidoModal}</td>
//     <td>${arrayNoUser.generoModal}</td>
//     <td>${arrayNoUser.dniModal}</td>
//     <td>${arrayNoUser.correoModal}</td>
//     <td>${arrayNoUser.direccionModal}</td>
//     <td>${arrayNoUser.celularModal}</td>
//     <td>${arrayNoUser.estadocivilModal}</td>
//     </tr>`

//     localStorage.setItem('TjNoUser', JSON.stringify(arrayNoUser));

                            
// }

static pedido(index){

    let pedir = TarjetaNoUser.getTjNouser();

    if(pedir[index].pedido){
        pedir[index].pedido = false;
     }else{
       pedir[index].pedido= true;
     }

     localStorage.setItem('TjNoUser', JSON.stringify(pedir));
     TarjetaNoUser.ListarTjNoUser();
}

static borrarNoUser(index){
     
    let rechazar = TarjetaNoUser.getTjNouser();
    rechazar.splice(index, 1);
    localStorage.setItem('TjNoUser', JSON.stringify(rechazar));
    TarjetaNoUser.ListarTjNoUser();
 }

}