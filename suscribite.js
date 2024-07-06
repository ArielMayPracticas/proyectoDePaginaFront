/*******VALIDACION DEL FORMULARIO DE SUSCRIPCION *********/
/******************************************************* */

/*document.getElementById('archivo').addEventListener('change', function(){
  let url_elegido = document.getElementById("archivo").files[0].name;
  console.log(url_elegido);
  if(url_elegido)
    {
      document.getElementById('foto').src = "imagenes/"+url_elegido;
    }else {
      document.getElementById('foto').src = "imagenes/foto_perfil3.jpg";
    }
});*/

function validateForm(event)
{
  event.preventDefault();

  
  let name = document.getElementById("nombre").value;
  let lastname = document.getElementById("apellidos").value;
  let email = document.getElementById("email").value;  
  
  if(name.trim() === "")
  {
    alert("Por favor ingresa tu nombre");
    /*document.getElementById("nombre").focus();*/
    return false; // EVITA QUE SE ENVIE EL FORMULARIO
  }

  if(lastname.trim() === "")
    {
      alert("Por favor ingresa tu apellido");
      return false; // EVITA QUE SE ENVIE EL FORMULARIO
    }

  if(email.trim() === "")
    {
    alert("Por favor ingresa un mail");
    return false;
   }

  if(!isValidEmail(email))
   {
    alert("Por favor ingresa un MAIL VALIDO");
    return true;
   }



  function isValidEmail(email)
   {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
   }



  alert("Formulario enviado correctamente");
  return true;

}  

document.getElementById('file-input').addEventListener('change', function(){
  let url_elegido = document.getElementById("file-input").files[0].name;
  console.log(url_elegido);
  if(url_elegido)
    {
      document.getElementById('foto').src = "imagenes/"+url_elegido;
    }else {
      document.getElementById('foto').src = "imagenes/foto_perfil3.jpg";
    }
});


document.getElementById("myForm").addEventListener("submit", validateForm);

  


  