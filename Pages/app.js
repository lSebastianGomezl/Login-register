// register
const input1 = document.getElementById('fullName');
const input2 = document.getElementById('userName');
const input3 = document.getElementById('password');
const input4 = document.getElementById('password2');
const btn = document.getElementById('btn1');
const message1 = document.getElementById('alert');
const message2 = document.getElementById('alert2');



input1.addEventListener('keyup',fullName);
input2.addEventListener('keyup',userName);
input3.addEventListener('keyup', password);
input4.addEventListener('keyup', confirmationPassword);
btn.addEventListener('click', successfulRegister);





function users(e){
    console.log(e.target.value);
}

function fullName(e){
    //console.log(e.target.value);
    const re= /^[a-zA-Z\s]{1,16}$/;
    if(re.test(e.target.value)){
        console.log("Caracter valido")
        message1.textContent = "";
        // const min= /^[a-zA-Z\s]{1,3}$/;
        // if(min.test(e.target.value)){
        //     console.log("Minimo 3 caracteres");
        //     message2.textContent = "El usuario debe de tener minimo 3 caracteres";
        //     message2.style.color = "red";
        // }else{
        //     message2.textContent = "";
        //     message2.style.color = "red";
        // }
    }else{
        console.log("Caracter invalido");
        message1.textContent = "Caracter invalido";
        message1.style.color = "red";
    }

}

function userName(e){
    console.log(e.target.value);
    const min= /^[a-zA-Z\s]{1,3}$/;
    if(min.test(e.target.value)){
        console.log("Minimo 3 caracteres");
        message2.textContent = "El usuario debe de tener minimo 3 caracteres";
        message2.style.color ='red';
    }else{
        message2.textContent = "";
    }
}

function password(e){
    console.log(e.target.value);
    let tip = document.getElementById('password');
    if(tip.type == "password"){
        tip.type == "text";
    }else{
        tip.type == "password";
    }
}

function confirmationPassword(e){
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    if(password.value == password2.value){
        console.log('su registro ha sido exitoso');
    }else{
        console.log('contraseña incorrecta')
    }

}

function successfulRegister(){
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    if(password.value == password2.value){
        console.log('su registro ha sido exitoso');
        alert('Se a registrado correctamente');
    }else{
        console.log('contraseña incorrecta');
        alert(' contraseña incorrecta');
    }
}
