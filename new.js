let Errorsdata=document.getElementById("usernameerror")
let errordata=document.getElementById("mailerror")
let errorrdata=document.getElementById("passerror")
let usernamedata=""
let emaildata=""
let passdata=""
let testcase=/^[a-z A-Z]*$/
let Testcase=/^[ a-z A-Z 0-9]*$/
let tescase= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function username(a){
    console.log(a)
    usernamedata=a
}
function email(c){
    console.log(c)
    emaildata=c
}
function password(b){
    console.log(b)
    passdata=b
}
function Button(){
    console.log(usernamedata.trim().length)
    if(usernamedata.trim().length >>0 && passdata.trim().length>>0 && emaildata.trim().length>>0){
        console.log(testcase.test(usernamedata))
        console.log(testcase.test(emaildata))
        console.log(testcase.test(passdata))
    }
    if(usernamedata.trim().length==0){
        
        Errorsdata.innerText="username is required"
    }
    if(emaildata.trim().length==0){
        
        errordata.innerText="email is required"
    }
    if(passdata.trim().length==0){
        
        errorrdata.innerText="password is required"
    }
    else{
        Errorsdata.innerText="username is required"
       errordata.innerText="email is required"
       errorrdata.innerText="password is required"
    }
}