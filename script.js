const button = document.querySelector('.btn')
const form   = document.querySelector('.form')

button.addEventListener('click', function() {
   form.classList.add('form--no') 
});

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

new Vue({
	el: "#app",
	data: {
      user: "",
      mail: "",
      password: "",
      regions: "espana",
      message: "",
      passwordErrors: [
         "12345",
         "admin",
         "password"
      ],
      checkedInfo: false,
      mailRequiredCharacter: "@"
   },
   watch: {
      password(newPass) {
         if(this.passwordErrors.indexOf(newPass) > -1) {
            this.message = "La contraseña no pude ser: '12345', 'admin' o 'password'";
            return false;
         }
         if(newPass.length < 8) {
            this.message = "La contraseña debe tener el menos 8 caracteres";
            return false;
         }
         this.message = null;
      },
      mail(newEmail) {
         if(newEmail.includes(this.mailRequiredCharacter)) {
            this.message = null;
         } else {
            this.message = "Introduce un mail con el carácter @";
         }
      },
      user(userName) {
         if(userName.length > 10) {
            this.message = "El numbre de usuario no puede superar los 10 caracteres";
            return false;
         }
      }  
   }
})


 
       




