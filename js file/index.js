const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validname = false;
let validemail = false;
let validphone = false;


name.addEventListener("blur",()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;  // start form a to z or A to Z and in username can contains only 10 letters which is between 0 to 9, a to z or A to Z.
    let str = name.value;
    if(regex.test(str)){
        console.log("Your name is valid");
        name.classList.remove("is-invalid");
        validname = true;
    }
    else{
        console.log("Your name is not valid");
        name.classList.add("is-invalid");
        validname = false;
    };
});


email.addEventListener("blur",()=>{
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
        validemail = true;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add("is-invalid");
        validemail = false;
    };
});


phone.addEventListener("blur",()=>{
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
        validphone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add("is-invalid");
        validphone = false;
    };
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let success = document.getElementById("success");
    let failure = document.getElementById("failure");
    if(validemail && validname && validphone){
        success.classList.add("show"); 
        failure.classList.remove("show");
    }
    else{
        console.log("One of Phone, Email or Name are not valid. Hance not submitting the form. Please correct the errors and try again.");
        failure.classList.add("show");
        success.classList.remove("show"); 
    };
});

