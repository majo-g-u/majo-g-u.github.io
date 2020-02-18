export default class Clientes {
  constructor(nombre, apellido, genero, dni, nombreusuario, correo, contraseña, repetir, direccion, celular, estadocivil, tarjetaApproved, tarjetaPending,tarjetaRejected, tarjetaNocard){

     this.nombre = nombre;
     this.apellido = apellido;
     this.genero = genero;
     this.dni = dni;
     this.nombreusuario = nombreusuario;
     this.correo = correo;
     this.contraseña = contraseña;
     this.repetir = repetir;
     this.direccion = direccion;
     this.celular = celular;
     this.estadocivil = estadocivil;
     this.solicitud = false;
  }

  save(){

     let usuario = Clientes.getAll();
     usuario.push({
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        dni: this.dni,
        nombreusuario: this.nombreusuario,
        correo: this.correo,
        contraseña: this.contraseña,
        repetir: this.repetir,
        direccion: this.direccion,
        celular: this.celular,
        estadocivil: this.estadocivil,
        solicitud: this.solicitud,
        tarjeta: {
          status: "NoCard", 
          limite: 0,
          num: 0,
          numeroTarjeta: parseInt(Math.random(10)*1111222233334444),
          tipo: "Visa Nacional",
       },
       prestamo:{
         estado: 'nopp',
         monto: 0,
         cuota: 0,
         valorCuota: 0
       }

     })
     localStorage.setItem('nuevo', JSON.stringify(usuario));
  }

  static getAll(){
     return JSON.parse(localStorage.getItem('nuevo')) || [];
  }


  static listAll(){

     let nuevoUsuario = document.getElementById('registros');
     let principal = document.getElementById('principal');
     nuevoUsuario.innerHTML = '';
     principal.innerHTML = '';

     this.getAll().forEach(function(element, i){
       
      let clase = "d-none";

      if(element.solicitud){
        nuevoUsuario.innerHTML += `<div class="card text-center ${clase}">
        <div class="card-header">
        Un nuevo usuario quiere registrarse
        </div>
        <div class="card-body">
        <h5 class="card-title">El usuario "${element.nombre}" quiere registrarse en Rolling Bank</h5>
        <p class="card-text"></p>
        <button id="aceptar-${i}" type="button" value="true" class="btn btn-primary">Aceptar</button>
        <a id="rechazar-${i}" href="#" class="btn btn-primary">Rechazar</a>
        </div>
        </div>`


/* <div class="card text-center ${clase}">
        <div class="card-header">
        Un nuevo usuario quiere registrarse
        </div>
        <div class="card-body">
        <h5 class="card-title">Solicitud de Registro</h5>
        <div class="list-group col">
          <p class="list-group-item ">Nombre: ${element.nombre}</p>
          <p class="list-group-item ">Apellido: ${element.apellido}</p>
          <p class="list-group-item ">Numero de Dni: ${element.dni}</p>
          <p class="list-group-item ">Correo: ${element.correo}</p>
          <p class="list-group-item ">Nombre de Usuario: ${element.nombreusuario}</p>
          <p class="list-group-item ">Genero: ${element.genero}</p>
          <p class="list-group-item ">Direccion: ${element.direccion}</p>
          <p class="list-group-item ">Numero de Telefono: ${element.celular}</p>  
        </div>
        <button id="aceptar-${i}" type="button" value="true" class="btn btn-primary">Aceptar</button>
        <a id="rechazar-${i}" href="#" class="btn btn-primary">Rechazar</a>
        </div>
        </div> */





        

        principal.innerHTML +=  `<tr>
        
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.genero}</td>
        <td>${element.dni}</td>
        <td>${element.nombreusuario}</td>
        <td>${element.correo}</td>
        <td>${element.direccion}</td>
        <td>${element.celular}</td>
        <td>${element.estadocivil}</td>
        <td>${element.tarjeta.status}</td>
        
        </tr>`

      }else{

       nuevoUsuario.innerHTML += `<div class="card text-center">
       <div class="card-header">
       <h5>Un nuevo usuario quiere registrarse</h5>
       </div>
       <div class="card-body">
       <div class="card-text text-left mb-3">
       <p class="list-group-item ">Nombre: ${element.nombre}</p>
       <p class="list-group-item ">Apellido: ${element.apellido}</p>
       <p class="list-group-item ">Numero de Dni: ${element.dni}</p>
       <p class="list-group-item ">Correo: ${element.correo}</p>
       <p class="list-group-item ">Nombre de Usuario: ${element.nombreusuario}</p>
       <p class="list-group-item ">Genero: ${element.genero}</p>
       <p class="list-group-item ">Direccion: ${element.direccion}</p>
       <p class="list-group-item ">Numero de Telefono: ${element.celular}</p>
       </div>
       <button id="aceptar-${i}" type="button" value="true" class="btn btn-primary">Aceptar</button>
       <a id="rechazar-${i}" href="#" class="btn btn-primary">Rechazar</a>
       </div>
       </div>`



       principal.innerHTML +=  `<tr class="${clase}">
       
       <td>${element.nombre}</td>
       <td>${element.apellido}</td>
       <td>${element.genero}</td>
       <td>${element.dni}</td>
       <td>${element.nombreusuario}</td>
       <td>${element.correo}</td>
       <td>${element.direccion}</td>
       <td>${element.celular}</td>
       <td>${element.estadocivil}</td>
       <td>${element.tarjeta.status}</td>
       </tr>`

     }
     



     setTimeout(function(){
       
        let elemento = document.getElementById(`aceptar-${i}`);
        elemento.addEventListener('click', function(){
        Clientes.estado(i);
        });

        let segundoElemento = document.getElementById(`rechazar-${i}`);
        segundoElemento.addEventListener('click', function(){
        Clientes.borrar(i);
        
        });

        
    });
     
  
     });

  }

  static estado(index){
     let solicitar = Clientes.getAll();

     if(solicitar[index].solicitud){
        solicitar[index].solicitud = false;
     }else{
       solicitar[index].solicitud= true;
     }

     localStorage.setItem('nuevo', JSON.stringify(solicitar));
     Clientes.listAll();
  }

  static borrar(index){
     
     let rechazar = Clientes.getAll();
     rechazar.splice(index, 1);
     localStorage.setItem('nuevo', JSON.stringify(rechazar));
     Clientes.listAll();

  }

  static getCurrentUser(){
    
    return  JSON.parse(localStorage.getItem('currentUser'));
  }

  static listAllUser(){
 
 let usuarioLogueado = document.getElementById('buttonUsuario');
    usuarioLogueado.innerHTML = '';
 
    let prueba = this.getCurrentUser();


 usuarioLogueado.innerHTML += ` <button class="btn btn-success  dropdown-toggle ml-3 mt-2 mt-lg-0 btn-personalizado" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <i class="fas fa-user-circle mr-2" style="font-size: 1.2rem;"></i> <span style="font-size: 1.1rem;">${prueba.nombre}</span>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
   <form class="dropdown-item mt-2 ">
     <a href="" class="d-block my-1">Mi perfil</a>
     <a href=""class="d-block  my-1" >Mi cuenta</a>
     <a href="" class="d-block  my-1">Mis comprobantes</a>
<button id="salir" class="btn btn-success btn-block my-1">Salir</button>
   </form>
</div>`;


  }

  static showPendingCard(){
    let solicitarTarjeta = document.getElementById('card');
   
    

    solicitarTarjeta.innerHTML = `<article class="card border-warning card-hb pending">                        
        <h3 class="mt-4 ml-4 mr-4 text-center text-muted">Pendiente de aprobación</h3>
        <img class="loading cargando-tarjeta-img" src="/assets/images/loading.png"> 
        <div class="card__info px-4 pb-4 mb-2 text-center text-muted">
            <p>Recibiras un Email cuando se haya procesado tu pedido</p>    
        </div>
    </article>`;

  }

  static showNoCard(){

    let solicitarTarjeta = document.getElementById('card');
   
    

    solicitarTarjeta.innerHTML += `<div class="card__img">
    
    <div>
    <h3 class="pt-3" style="color: #1cc88a">Tarjeta de crédito </h3>
    </div>
    <div class="text-center pt-3">
    <i class="far fa-credit-card" style="font-size: 100px; color: #c0c0c0"></i>
    </div>
   </div>
   <div class="card__info">
   <button id="pedidoTarjeta" type="button" class="btn btn-outline-warning"> Solicitala Ya!</button>    
   </div>`;


 }

 static showRejectedCard(){

  let solicitarTarjeta = document.getElementById('card');
   
    

    solicitarTarjeta.innerHTML += `
  <div class="mt-4 mx-4 text-center text-muted" ><h3>Su pedido ha sido rechazado</h3></div>
  <div class="card__info px-4 pb-5 mb-4 text-center text-muted">
    <p>Consulta otras posibilidades con nuestro centro de atencion al cliente
    <a href="#" class="my-3  badge badge-warning text-wrap d-block">contacto</a> </p>    
  </div> 
  `


 }

 static showApprovedCard(){

  let solicitarTarjeta = document.getElementById('card');
   
  let arrayUsuario = this.getCurrentUser();

  let b = JSON.stringify(arrayUsuario.tarjeta.numeroTarjeta);
 let numero =  "XXXX-XXXX-XXXX-" + b.substring(11, 16) ;

    solicitarTarjeta.innerHTML += `
  <h3 class="mt-1 ml-4 mr-4 text-center" style="color: #1cc88a";> ${arrayUsuario.tarjeta.tipo}</h3>
    <div class="border border-primary cardApprovalContent  ">
      <span class="d-block m-num-card text-center">${numero}</span>
      <div class="d-flex">
      <span class="font-size-vto mx-auto"> </span>
      </div>
      <span class="d-block name-card mt-2 text-uppercase">${arrayUsuario.nombre} ${arrayUsuario.apellido}</span>
    </div>
    
    <div class="card__info">
    <button type="button" class="btn btn-outline-warning" id="btnVerTarjeta">Más información</button>    
</div>
    `
this.btnVerTarjeta()

 }


static btnVerTarjeta(){
  document.getElementById('btnVerTarjeta').addEventListener('click', function(){
    document.getElementById('tableTarjeta').classList.toggle('d-none');
    document.getElementById('tablePrestamos').classList.add('d-none');
    document.getElementById('tableCajaAhorro').classList.add('d-none');

});
}



 static showAdmin(item, i){
  const currentUserDos = this.getCurrentUser();
  let solicitarTarjeta = document.getElementById('showAdmin');
   
    

    solicitarTarjeta.innerHTML += `<div id="adminAceptarCard" class="card text-center">
    <div class="card-header">
    <h5 class="card-title">Solicitud de Tarjeta de credito</h5>
    </div>
    <div class="card-body text-center">
      <p class="card-text">El usuario  ${item.nombre}, DNI: ${item.dni} ha solicitado una tarjeta de crédito</p>
      <label>Tipo de tarjeta</label>
      <select id="categoriaTarjeta" class="form-control mb-3 col-6 mx-auto">
      <option  value="Visa Nacional">Visa Nacional</option>
      <option  value="Visa Internacional">Visa Internacional</option>
      <option  value="Visa Gold">Visa Gold</option>
      <option value="Visa Platinum">Visa Platinum</option>
      <option value="Visa Signature">Visa Signature</option>
      </select>
      <label>Asignar numero de tarjeta</label>
      <p type="number" class="form-control mb-3 col-6 mx-auto" id="">${item.tarjeta.numeroTarjeta}"</p>
      <label>Asignar limite de compra</label>
      <input type="number" class="form-control mb-3 col-6 mx-auto" id="montoTarjeta"  placeholder="Monto en pesos $">
      <button class="btn btn-primary" id="adminAceptar">Aceptar</button>
      <button class="btn btn-primary" id="adminRechazar">Rechazar</button>
    </div>
  </div>`;

  document.getElementById('adminAceptar').addEventListener("click", function(){

      currentUserDos.tarjeta.status = "Approved";
      currentUserDos.tarjeta.limite = document.getElementById('montoTarjeta').value;
      // currentUserDos.tarjeta.num = document.getElementById('numeroTarjeta').value;
      currentUserDos.tarjeta.tipo = document.getElementById('categoriaTarjeta').value;
         console.log(currentUserDos);

         const usersDos = Clientes.getAll();

         const positionDos = usersDos.findIndex(function(a){
              return a.dni == currentUserDos.dni;
         });

         usersDos[positionDos].tarjeta.status = "Approved";
         usersDos[positionDos].tarjeta.limite =  document.getElementById('montoTarjeta').value;
        //  usersDos[positionDos].tarjeta.num =  document.getElementById('numeroTarjeta').value;
         usersDos[positionDos].tarjeta.tipo =  document.getElementById('categoriaTarjeta').value;
         



         localStorage.setItem("nuevo", JSON.stringify(usersDos));
         localStorage.setItem("currentUser", JSON.stringify(currentUserDos));

         document.getElementById('adminAceptarCard').classList.add('d-none');


  });

  document.getElementById('adminRechazar').addEventListener("click", function(){

    currentUserDos.tarjeta.status = "Rejected";

    const usersTres = Clientes.getAll();
    const positionTres = usersTres.findIndex(function(a){
        return a.dni == currentUserDos.dni;
    });
    
    usersTres[positionTres].tarjeta.status = "Rejected";
    localStorage.setItem("nuevo", JSON.stringify(usersTres));
       localStorage.setItem("currentUser", JSON.stringify(currentUserDos));
      
       document.getElementById('adminAceptarCard').classList.add('d-none');

});
 }
  
//  static getPrestamos(){
//   return JSON.parse(localStorage.getItem('infoPrestamos')) || [];
 
//  }

// static prestamo(item){

//   let solicitarPrestamo = document.getElementById('prestamo');
//    console.log(this.getPrestamos())

//     solicitarPrestamo.innerHTML += `<div id="" class="card text-center">
//     <div class="card-header">
//     <h5 class="card-title">Solicitud de Tarjeta de credito</h5>
//     </div>
//     <div class="card-body text-center">
//       <p class="card-text">El usuario  DNI: ha solicitado un Prestamo</p>
//       <p class="card-text">La cantidad de  en la cantidad de cuotas  a valor de cada una de $</p>
     
//     </div>
//   </div>`;

// }

static showNopp(){
  let sinPrestamoTitulo = document.getElementById('sinPrestamoTitulo');
  let arrayUsuario = this.getCurrentUser();

  sinPrestamoTitulo.innerHTML += `<h3> ${arrayUsuario.nombre} Aún no tenes prestamos con nosotros</h3>`

};

static showPendingpp(){
    let prestamoPendiente = document.getElementById('prestamoPendiente');
    let arrayUsuario = this.getCurrentUser();

    prestamoPendiente.innerHTML += `
    <div class="container">
    <div class="row contenedor-prestamos align-items-center">
      <div class="col text-center">
        <h3>Tu solicitud esta siendo evaluada <i class="fas fa-coins monedas"></i></h3>
        <p class="">Tu solicitud del prestamo, por la suma de $${arrayUsuario.prestamo.monto} esta en analisis crediticio, tu historial de los últimos 24 meses determinara la efectiva aprobacion del prestamo</p>
      </div>
    </div>
  </div>`
  document.getElementById('btnSolicitarPrestamo').classList.add('d-none');
}



static showAdminpp(item, i){

  let solicitarPrestamo = document.getElementById('showAdminpp');
   
  let arrayUsuario = this.getCurrentUser();

    solicitarPrestamo.innerHTML += `<div id="adminAceptarCard" class="card text-center">
    <div class="card-header">
    <h5 class="card-title">Solicitud de un Prestamo Personal</h5>
    </div>
    <div class="card-body text-center">
      <p class="card-text">El usuario: ${arrayUsuario.nombre}  , DNI:${arrayUsuario.dni}  ha solicitado un Prestamo por el monto:$ ${arrayUsuario.prestamo.monto}   ,numero de cuotas: ${arrayUsuario.prestamo.cuota} ,valor de cuotas: ${arrayUsuario.prestamo.valorCuota}</p>
    
      <button class="btn btn-primary" id="adminAceptarpp">Aceptar</button>
      <button class="btn btn-primary" id="adminRechazarpp">Rechazar</button>
    </div>
  </div>`;

  
  
 let adminAceptarpp = document.getElementById('adminAceptarpp');
  let currentUser = this.getCurrentUser();
  adminAceptarpp.addEventListener('click', function(){

    const prestamopp = Clientes.getCurrentUser();
    const userspp = Clientes.getAll();
    prestamopp.prestamo.estado = 'aprobadopp';

    const positionpp = userspp.findIndex(function(a){
      return a.dni == currentUser.dni;
    });
    
  userspp[positionpp].prestamo.estado= "aprobadopp";

  
  localStorage.setItem("nuevo", JSON.stringify(userspp));
  localStorage.setItem("currentUser", JSON.stringify(prestamopp));
  
  Clientes.showNopp();
  Clientes.setnuevo();
  solicitarPrestamo.classList.add('d-none');
 });


  adminRechazarpp.addEventListener('click', function(){

    const prestamopp = Clientes.getCurrentUser();
    const userspp = Clientes.getAll();
    prestamopp.prestamo.estado = 'rechazadopp';

    const positionpp = userspp.findIndex(function(a){
      return a.dni == currentUser.dni;
    });
    
  userspp[positionpp].prestamo.estado= "rechazadopp";

  
  localStorage.setItem("nuevo", JSON.stringify(userspp));
  localStorage.setItem("currentUser", JSON.stringify(prestamopp));
  console.log('rechazado');


 });

}  

// static adminAprobadopp(){
//   let tablaPrestamo = document.getElementById('tablaPrestamo');
//   let arrayUsuario = this.getCurrentUser();

//   tablaPrestamo.innerHTML += `    <tr>
//                                     <td>${arrayUsuario.nombre}</td>
//                                     <td>${arrayUsuario.prestamo.monto}</td>
//                                     <td>${arrayUsuario.prestamo.cuota}</td>
//                                     <td>${arrayUsuario.prestamo.valorCuota}</td>
//                                   </tr>`
  
                              
// }


static showNopp(){
  let currentUser = this.getCurrentUser();
  const prestamopp = Clientes.getCurrentUser();
    const userspp = Clientes.getAll();
    prestamopp.prestamo.estado = 'nopp';

    const positionpp = userspp.findIndex(function(a){
      return a.dni == currentUser.dni;
    });
    
  userspp[positionpp].prestamo.estado= "nopp";

  
  localStorage.setItem("nuevo", JSON.stringify(userspp));
  localStorage.setItem("currentUser", JSON.stringify(prestamopp));
 
}


static setnuevo(){
  
  let arrayUsuario = this.getCurrentUser();
  let prestamovar = this.getPrestamo();
    prestamovar.push({
      valoruno: arrayUsuario.prestamo.monto,
      valordos: arrayUsuario.prestamo.cuota,
      valortres: arrayUsuario.prestamo.valorCuota
    });
    localStorage.setItem("prestamo", JSON.stringify(prestamovar));
    Clientes.listar();
    console.log(prestamovar)
}


static getPrestamo(){
  return JSON.parse(localStorage.getItem('prestamo')) || [];
}

static listar(){

  let arrayUsuario = this.getCurrentUser();
  let prestamos = JSON.parse(localStorage.getItem('prestamo'));
  let tablaPrestamo = document.getElementById('tablaPrestamo');
  tablaPrestamo.innerHTML = '';
  
  prestamos.forEach(function(item, i){
    tablaPrestamo.innerHTML += `    <tr>
                                    <td id="verMas"  data-toggle="modal" data-target="#modalInfo" class="btn btn-outline-primary btn-sm ">ver mas</td>
                                    <td>${arrayUsuario.dni}</td>
                                    <td>$${item.valoruno}</td>
                                    <td>${item.valordos}</td>
                                    <td>${item.valortres}</td>
                                  </tr>`
  })
  this.showInfoCliente();
  
}

static showInfoCliente(){
  let arrayUsuario = this.getCurrentUser();
  let contenidoInfo = document.getElementById('contenidoInfo');

  contenidoInfo.innerHTML = `
 <div class="row">
  <div class="col">
    <h5>Solicitud de registro</h5>
     <div class="list-group col">
    <p class="list-group-item ">Nombre: ${arrayUsuario.nombre}</p>
    <p class="list-group-item ">Apellido: ${arrayUsuario.apellido}</p>
    <p class="list-group-item ">Numero de Dni: ${arrayUsuario.dni}</p>
    <p class="list-group-item ">Correo: ${arrayUsuario.correo}</p>
    <p class="list-group-item ">Nombre de Usuario: ${arrayUsuario.nombreusuario}</p>
    <p class="list-group-item ">Genero: ${arrayUsuario.genero}</p>
    <p class="list-group-item ">Direccion: ${arrayUsuario.direccion}</p>
    <p class="list-group-item ">Numero de Telefono: ${arrayUsuario.celular}</p>  
  </div>
  </div>
</div>
  `
}


}
