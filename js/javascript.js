var Name = document.getElementById("upName")
var Email = document.getElementById("upEmail")
var Password = document.getElementById("upPass")
var signUpBtn = document.getElementById("signUpBtn")
var InMail = document.getElementById("inEmail")
var InPass = document.getElementById("inPassword")
var signInBtn = document.getElementById("SignInBtn")
var UserName = document.getElementById("name")
var allUsers =[]
if(localStorage.getItem("allUsersLocal") !=null){
    allUsers = JSON.parse(localStorage.getItem("allUsersLocal"))
}else{
   var allUsers =[] 
}

function GetUser(){
    var emailRegex = /^[A-Za-z0-9]{3,}@[a-z]{3,}.com$/i
    var passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,32}$/;
    var user;
    if(emailRegex.test(Email.value) == true && passwordRegex.test(Password.value) ==true){
    user = {
        userName: Name.value,
        userEmail: Email.value,
        UserPassword: Password.value,
        }
    allUsers.push(user);
    localStorage.setItem("allUsersLocal" , JSON.stringify(allUsers))
    clearInputs()
    } else {
        Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Enter valid Email  or Password must have at least one capital letter ,one small letter and at least one special charachter  ",
});
        
    }
    
}
function clearInputs(){
     Name.value = ""
     Email.value = ""
     Password.value = ""
     InPass.value = ""
     InMail.value = ""
    }
signUpBtn.addEventListener("click" , GetUser)
var ReferToSignIn = document.getElementById("signInLink")
var ReferToSignUP = document.getElementById("signUpLink")
var SignInSection = document.querySelector(".signIn")
var SignUPSection = document.querySelector(".signUp")

ReferToSignIn.addEventListener("click" , function(){
    SignInSection.classList.remove("d-none")
    SignUPSection.classList.add("d-none")
})
ReferToSignUP.addEventListener("click" , function(){
    SignInSection.classList.add("d-none")
    SignUPSection.classList.remove("d-none")
})
var homeSection = document.querySelector(".welcomePage")
function signIn (){
    
    for(var i=0 ; i<allUsers.length ; i++){
        if(InMail.value == allUsers[i].userEmail && InPass.value == allUsers[i].UserPassword){
            SignInSection.classList.add("d-none")
            homeSection.classList.remove("d-none")
            clearInputs()
            UserName.innerHTML = allUsers[i].userName
        }else{
            console.log("there is no user name with this details ")
        }
    }
}
signInBtn.addEventListener("click" , signIn)
var logOutBtn = document.getElementById("logOut")
function logOut(){
    homeSection.classList.add("d-none")
    SignInSection.classList.remove("d-none")



}
logOutBtn.addEventListener("click" , logOut)