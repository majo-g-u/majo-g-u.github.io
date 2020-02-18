import '../src/css/style.css';
import Prestamos from "./prestamos";





document.getElementById('simulacion').addEventListener("click", function(){


    let simuladorMonto = Number (document.getElementById('simulador').value);
    let simuladorCuotas = Number(document.getElementById('simuladorPlazo').value);
    let situacionCliente = document.getElementById('cliente').value;
    let TasaAnual = 0.12;
    let costoFinanciero = (TasaAnual * 100) * 2;
    let costoFinancieroConIva = (TasaAnual * 100) * 2 + 4;
 
    

    document.getElementById('requisitosPrestamo').classList.add('d-none');

    let cuotaPromedio = 0;

    if(situacionCliente == 'sueldo'){
     
    cuotaPromedio = ((simuladorMonto + (simuladorMonto * TasaAnual)) / simuladorCuotas).toFixed(2);    
   } 

   if(situacionCliente == 'cliente'){
    
    TasaAnual = 0.25;
    cuotaPromedio = ((simuladorMonto + (simuladorMonto * TasaAnual)) / simuladorCuotas).toFixed(2);    
   }
   
   if(situacionCliente == 'nocliente'){
    
    TasaAnual = 0.30;
    cuotaPromedio = ((simuladorMonto + (simuladorMonto * TasaAnual)) / simuladorCuotas).toFixed(2);    
   }

    document.getElementById('resultadoSimulacion').classList.remove('d-none');
    document.getElementById('montodetalle').innerHTML = '$' + simuladorMonto;
    document.getElementById('cuotadetalle').innerHTML = '$' + cuotaPromedio;
    document.getElementById('plazodetalle').innerHTML = simuladorCuotas + ' ' + 'meses';
    document.getElementById('tasaAnual').innerHTML = TasaAnual * 100 + '%';
    document.getElementById('costoFinanciero').innerHTML = costoFinanciero + '%';
    document.getElementById('costoFinancieroIva').innerHTML = costoFinancieroConIva + '%';

   

})

