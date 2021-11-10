var email = document.getElementById('mail');
var pwd = document.getElementById('pass');
let error = document.getElementById('error');

function check(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
      
    if(regexp.test(email.value)){
          error.innerHTML = "Valid";            
          error.style.color = "green";    
          return true;

                }
     else {
        error.innerHTML = "Invalid";
        error.style.color="red";
        email.style.border= "2px solid red"
        return false;

        }

    
    }
        
function validate(){
    
}   



    


