import '../src/css/style.css';
import Clientes from "./clientes";
import TarjetaNoUser from "./tarjetaNoUser"
Clientes.listAll();
Clientes.getCurrentUser();
Clientes.getAll();
TarjetaNoUser.ListarTjNoUser();

           
 const currentUser = Clientes.getCurrentUser();

    if (currentUser.tarjeta.status == 'Pending'){

    Clientes.showAdmin(currentUser);
    }

        

// const currentUserpp = Clientes.getCurrentUser();

    if (currentUser.prestamo.estado == 'pendientepp'){
        Clientes.showAdminpp(currentUser);
        Clientes.listar();
    }

    if (currentUser.prestamo.estado == 'nopp'){

        Clientes.listar();
    }





