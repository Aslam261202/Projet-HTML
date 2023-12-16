document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  

  var nom = document.getElementById("name").value;
  var prenom = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var telephone = document.getElementById("num").value;


 
  if (!/^[a-zA-Z]+$/.test(nom) || nom.length < 3) {
    document.getElementById("nomError").innerHTML = "Le nom doit contenir au moins 3 lettres.";
    document.getElementById("nomError").style.color = "red";
  } else {
    document.getElementById("nomError").innerHTML = "";
  }

  if (prenom.length < 4) {
    document.getElementById("prenomError").innerHTML = "Le prénom doit contenir au moins 4 caractères.";
    document.getElementById("prenomError").style.color = "red";
  } else {
    document.getElementById("prenomError").innerHTML = "";
  }

  if (/\D/.test(telephone)) {
    document.getElementById("telephoneError").innerHTML = "Le numéro de téléphone ne doit contenir que des lettres.";
    document.getElementById("telephoneError").style.color = "red";
  } else {
    document.getElementById("telephoneError").innerHTML = "";
  }

  

     
          if (nom == "" || email == "" ||  telephone=="") {
              document.getElementById("error-message").style.display = "block";
              
          }
          else
          {
            document.getElementById("error-message").innerHTML = "";
          }
      
 
});