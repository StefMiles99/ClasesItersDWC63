const email= document.getElementById("email");
const password= document.getElementById("password");
const form = document.querySelector(".login-form");

email.addEventListener("change",(e)=>{
    
    console.log(e.target.value);
});

password.addEventListener("change",(e)=>{
    console.log(e.target.value);
});


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("SUBMIT!")
})