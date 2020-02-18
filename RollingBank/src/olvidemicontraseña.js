import '../src/css/style.css';
import swal from 'sweetalert';

document.getElementById('btn-olvide-mi-contraseña').addEventListener('click', function(){
    swal("Revisa tu mail", "Te enviamos un mail con el codigo de recuperación", "success");
    setTimeout(function(){window.location.href = "index.html";}, 1500); 
})