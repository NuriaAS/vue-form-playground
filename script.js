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
      password: ""

   },
   methods: {
      errors: function() {
         const maxLength = 10;
         var errorUser = document.getElementById("warning-name-too-long");
         var errorPassword = document.getElementById("warning-name-too-short");
       
         if (this.user.length > maxLength) {
            return errorUser.style.display = "block";  
         }

         if (this.password.length < maxLength) {
            return errorPassword.style.display = "block"; 
         }
      },
      notSendForm: function() {
         if(this.user.length > maxLength && this.password.length < maxLength) {
            returnToPreviousPage();
            console.log(meeec)
            return false;
           
         }
      }         
   }
})


 
       




