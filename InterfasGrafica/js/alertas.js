function Correcto(texto ="Informacion correcta", button =true,redirecciona){

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'success',
        text:texto,
        showConfirmButton: button,
        timer: 1500
      })  
    
      
}
function Alerta(texto ="Informacion correcta",button =true){

  Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'warning',
      text:texto,
      showConfirmButton: button,
      timer: 1500
    })      
}