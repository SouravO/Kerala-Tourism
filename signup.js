let email = document.getElementById("mail");
let error = document.getElementById("errorm")

function check(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

        if(regexp.test(email.value)){
            error.innerHTML ="valid";
            error.style = "green";
            return true;

        }
        else{
            error.innerHTML= "Invalid !!";
            error.style.color = "red";
            email.style.border = " 2px solid red "
            return false;
        }
        

}
