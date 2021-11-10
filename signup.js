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
            error.style.color="green"
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
      return chPass();
        }
      else
        {
        alert("PLease Enter a valid phone number ");
        num.style.border ="2px solid red" 
        return false;
        }




}


//password
// let pass = document.getElementById("pd")
// function checkpass(){
//     let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
//     if(strongRegex.test(pass.value)){
        
//         alert("done")
//         return true;
//     }
//     else{
//         alert("false")
//         return false;

//         }

//     }

function chPass(){
    var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        let p = document.getElementById("pd")

        
        if (p.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(p.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(p.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(p.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }
