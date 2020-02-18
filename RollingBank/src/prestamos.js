import Clientes from "./clientes";

export default class Prestamos {
    
    
    static listarPrestamos(){
        let bodyTableUno = document.getElementById('bodyTableUno')
        let arrayUsuario = Clientes.getCurrentUser();
        let prestamos = Clientes.getPrestamo();
        prestamos.forEach(function(item, i){
            bodyTableUno.innerHTML += `    <tr>
                                          <td style="font-size: 1.1rem">${arrayUsuario.dni}</td>
                                          <td style="font-size: 1.1rem">$${item.valoruno}</td>
                                          <td style="font-size: 1.1rem">${item.valordos}</td>
                                          <td style="font-size: 1.1rem">${item.valortres}</td>
                                        </tr>`
        })
        
    }

    static listarCajaAhorro(){
        let bodyTableCajaAhorro = document.getElementById('bodyTableCajaAhorro')
        let arrayUsuario = Clientes.getCurrentUser();
        let totalPrestamos = 0;
        let prestamos = Clientes.getPrestamo();
        prestamos.forEach(function(item, i){
                totalPrestamos += Number(item.valoruno);
                console.log(totalPrestamos);
        })
        bodyTableCajaAhorro.innerHTML += `    <tr>
        <td style="font-size: 1.1rem">${arrayUsuario.dni}</td>
        <td style="font-size: 1.1rem">$${totalPrestamos}</td>
      </tr>`
        
    }

    static listarInfoTarjeta(){
      
      
      let bodyTableTarjeta = document.getElementById('bodyTableTarjeta');
      let arrayUsuario = Clientes.getCurrentUser();
      bodyTableTarjeta.innerHTML +=  `    <tr>
      <td style="font-size: 1.1rem">${arrayUsuario.tarjeta.num}</td>
      <td style="font-size: 1.1rem">${arrayUsuario.tarjeta.tipo}</td>
      <td style="font-size: 1.1rem">$${arrayUsuario.tarjeta.limite}</td>
    </tr>` 

    }
}