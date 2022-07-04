let form = document.querySelector('form');
let firstName = document.getElementById('full-name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let btn = document.getElementById('submit');

//====================Email Validation ====================//
let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm(){

   console.clear();

      let dataCollector = {};
      let error = [];

      firstName.value = firstName.value.trim();
      email.value = email.value.trim();
      message.value = message.value.trim();


      if (firstName.value !== ''){
         dataCollector.fullName = firstName.value;
      } else {
         error.push('Please enter your Full Name');
      }

    

      if (email.value !== ''){
         if(validEmail.test(email.value)){
            dataCollector.emailInput = email.value;
         } else {
            error.push('Invalid Email')
         }

      } else {
         error.push('Please enter your Email');
      }

      //=================== Message ==========================

      if (message.value !== ''){
         dataCollector.messageInput = message.value;
      } else {
         error.push('Please enter your Message');
      }

      if (error.length === 0){
         console.log(dataCollector);
         form.reset();
      } else {
         console.log(error);
      }


};

// make validateForm listen for click event OR you could say
// register button btn for 'click' event
btn.addEventListener('click', validateForm);
