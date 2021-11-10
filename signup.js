// let show = document.getElementById("shpass")
function shpass(){
    var p = document.getElementById("pd");
    if (p.type == "password") {
      p.type = "text";
    } else {
      p.type = "password";
    }
}


let email = document.getElementById("mail");
let error = document.getElementById("errorm")


//main function
function check(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

        if(regexp.test(email.value)){
            error.innerHTML ="valid";
            email.style.border = "2px solid green";
            return pcheck();
            

        }
        else {
            error.innerHTML= "Invalid !!";
            error.style.color = "red";
            email.style.border = " 2px solid red "
            return false;
        }
        

            
}

//number 

let num = document.getElementById("number") ;
function pcheck(){
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(num.value))
        {
        num.style.border = "2px solid green"
      return checkpass();
        }
      else
        {
        alert("PLease Enter a valid phone number ");
        num.style.border ="2px solid red" 
        return false;
        }




}


//password
let pass = document.getElementById("pd")
function checkpass(){
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if(strongRegex.test(pass.value)){
        
        alert("done")
        return true;
    }
    else{
        alert("false")
        return false;

        }

    }
