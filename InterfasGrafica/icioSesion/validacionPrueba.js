function validaPrueba(correo, clave){
   
   
   if(correo == 'jaunito@gmail.com' && clave =='123'){

    Correcto('Información esta correcta',false);
    
    setTimeout("location.href ='../index.html'",1500)
    
   }else{
    Alerta('Información esta incorrecta',false);
    setTimeout("location. reload()",1500)
    
   }
   
    

}