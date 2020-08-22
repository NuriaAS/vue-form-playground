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
      userNameHasWrongLength: false,
      mail: "",
      mailHasNoRequiredCharacter: false,
      password: "",
      passwordHasWrongString: false, 
      passwordHasWrongLength: false,
      regions: "espana",
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
            this.passwordHasWrongString = true;
         } else {
            this.passwordHasWrongString = false; 
         }

         if(newPass.length < 8) {
            this.passwordHasWrongLength = true; 
         } else {
            this.passwordHasWrongLength = false; 
         }
      },
      mail(newEmail) {
         if(newEmail.includes(this.mailRequiredCharacter)) {
            this.mailHasNoRequiredCharacter = false;
         } else {
            this.mailHasNoRequiredCharacter = true;
         }
      },
      user(userName) {
         if(userName.length > 10) {
            this.userNameHasWrongLength = true;
         } else {
            this.userNameHasWrongLength = false;
         }
      }  
   }
})


 
       




