const showPassword=()=>{
    const passwordElement=document.getElementById('password')
    if (passwordElement.type=="password"){
        passwordElement.type="text"
    }else{
        passwordElement.type="password"
    }
}

