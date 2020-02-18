import '../src/css/style.css';
import Clientes from "./clientes";
Clientes.listAllUser();
Clientes.getCurrentUser();
import Prestamos from "./prestamos";
Prestamos.listarPrestamos();
Prestamos.listarCajaAhorro();
Prestamos.listarInfoTarjeta();
saluda();

function saluda(){
    let arrayUsuario = Clientes.getCurrentUser();
    let SaludoHomebanking = document.getElementById('SaludoHomebanking');
    
    SaludoHomebanking.innerHTML = `Hola ${arrayUsuario.nombre} Bienvenido a tu homebanking`
}

document.getElementById('salir').addEventListener("click", function(){
    
    event.preventDefault(); 

    localStorage.removeItem("currentUser");
    window.location = "index.html";
    
})


//Parte de JavaScript del cambio de estado en la solicitud de tarjetas

const currentUser = Clientes.getCurrentUser();

if (currentUser.tarjeta.status == 'Pending') {
  

} else if (currentUser.tarjeta.status == 'Rejected'){
    Clientes.showRejectedCard();

} else if (currentUser.tarjeta.status == 'Approved'){
    
    Clientes.showApprovedCard();

} else {
    console.log("NoCard");
    Clientes.showNoCard();

    document.getElementById("pedidoTarjeta").addEventListener("click", function(){
      
      Clientes.showPendingCard();
      
       currentUser.tarjeta.status = "Pending";
       console.log(currentUser);

       const users = Clientes.getAll();

       const position = users.findIndex(function(a){
            return a.dni == currentUser.dni;
       });

       users[position].tarjeta.status = "Pending";

       localStorage.setItem("nuevo", JSON.stringify(users));
       localStorage.setItem("currentUser", JSON.stringify(currentUser));

      
       
    })

    
}

// ===============================Desplegar tabla=================

document.getElementById('btnVerPrestamos').addEventListener('click', function(){
    document.getElementById('tablePrestamos').classList.toggle('d-none');
    document.getElementById('tableCajaAhorro').classList.add('d-none');
    document.getElementById('tableTarjeta').classList.add('d-none');

});

document.getElementById('btnVerCajaAhorro').addEventListener('click', function(){
    document.getElementById('tableCajaAhorro').classList.toggle('d-none');
    document.getElementById('tablePrestamos').classList.add('d-none');
    document.getElementById('tableTarjeta').classList.add('d-none');

});

// document.getElementById('btnVerTarjeta').addEventListener('click', function(){
//     document.getElementById('tableTarjeta').classList.toggle('d-none');
//     document.getElementById('tablePrestamos').classList.add('d-none');
//     document.getElementById('tableCajaAhorro').classList.add('d-none');

// });



// ===============MODAL PRESTAMOS===================


let montoPrestamo = Number(document.getElementById('montopp').value);
let cantidadCuotas1 = document.getElementById('plazopp').value;
let montoCuota = document.getElementById('cuotaPrecio');

if(montoPrestamo == 10000 && cantidadCuotas1 == 12){

    montoCuota.value = '$' + ((montoPrestamo + (montoPrestamo * 0.12)) / 12).toFixed(2);
}



    document.getElementById('plazopp').addEventListener("change", function(){
    
        let cantidadCuotas1 = Number(document.getElementById('plazopp').value);
        let cantidadPrestamo = Number(document.getElementById('montopp').value);
        
       if(montoPrestamo == 10000 && cantidadCuotas1 == 12){

        montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.12)) / 12).toFixed(2);
       }
       
       if(cantidadCuotas1 == 24){

        montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.12)) / 24).toFixed(2);
   }
   
   if(cantidadCuotas1 == 36){

    montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.24)) / 36).toFixed(2);
}

if(cantidadCuotas1 == 60){

    montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.80)) / 60).toFixed(2);
}
    });

// ==================Prestamo monto dinero================
    



    document.getElementById('montopp').addEventListener("change", function(){
    
        let cantidadCuotas1 = Number(document.getElementById('plazopp').value);
        let cantidadPrestamo = Number(document.getElementById('montopp').value);


       if(cantidadPrestamo == 10000 && cantidadCuotas1 == 12){

        montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.12)) / 12).toFixed(2);
       }
       
       if(cantidadPrestamo == 25000){

        montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.12)) / 24).toFixed(2);
   }
   
   if(cantidadPrestamo == 50000){

    montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.24)) / 36).toFixed(2);
}

if(cantidadPrestamo == 100000){

    montoCuota.value = '$' + ((cantidadPrestamo + (cantidadPrestamo * 0.80)) / 60).toFixed(2);
}
    });





// let btnSolicitarPP = document.getElementById('btnSolicitarPP');

// btnSolicitarPP.addEventListener('click', function(){

//     let montopp = document.getElementById('montopp').value;
//     let plazopp = document.getElementById('plazopp').value;
//     let cuotapp = document.getElementById('cuotaPrecio').value;
//     let bodyTableUno = document.getElementById('bodyTableUno');

// let infopp = (JSON.parse(localStorage.getItem('infoPrestamos')) || []);
//     infopp.push({
//         valoruno: montopp,
//         valordos: plazopp,
//         valortres: cuotapp
//     })



// localStorage.setItem('infoPrestamos', JSON.stringify(infopp));

// alert('Tu solicitud fue enviada')

// // bodyTableUno.innerHTML =+ ``

// Clientes.prestamo();

// })

const prestamopp = Clientes.getCurrentUser();
const userspp = Clientes.getAll();

if(prestamopp.prestamo.estado == 'pendientepp'){
    Clientes.showPendingpp();
    // Clientes.showAdminpp();
}

 else if(prestamopp.prestamo.estado == 'rechazadopp'){}

 else if(prestamopp.prestamo.estado == 'aprobadopp'){}

 else{
     Clientes.showNopp();
     document.getElementById('btnSolicitarPP').addEventListener('click', function(){
         prestamopp.prestamo.estado = 'pendientepp';
         let montopp = document.getElementById('montopp');
         let plazopp = document.getElementById('plazopp');
         let cuotapp = document.getElementById('cuotaPrecio');
         prestamopp.prestamo.monto = montopp.value;
         prestamopp.prestamo.cuota = plazopp.value;
         prestamopp.prestamo.valorCuota = cuotapp.value;
         
         
         
         
         const positionpp = userspp.findIndex(function(a){
          return a.dni == currentUser.dni;
        });
        
        userspp[positionpp].prestamo.estado= "pendientepp";
        userspp[positionpp].prestamo.monto = Number(montopp.value);
        userspp[positionpp].prestamo.cuota = plazopp.value;
        userspp[positionpp].prestamo.valorCuota = cuotapp.value;
        
        localStorage.setItem("nuevo", JSON.stringify(userspp));
        localStorage.setItem("currentUser", JSON.stringify(prestamopp));
        Clientes.showPendingpp();
        // Clientes.showAdminpp();

    });
 }



