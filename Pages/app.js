// register
const input1 = document.getElementById('fullName');
const input2 = document.getElementById('userName');
const input3 = document.getElementById('password');
const input4 = document.getElementById('password2');
const btn = document.getElementById('btn1');
const message1 = document.getElementById('alert');
const message2 = document.getElementById('alert2');
const lista = document.getElementById('list');

const usersL = [];
// let session = localStorage.setItem('personas',JSON.stringify(usersL));

// login
const userL = document.getElementById('inputL1');
const passL = document.getElementById('passwordL');
const btn1 = document.getElementById('btnL');

//validacion registro
if(input1){
input1.addEventListener('keyup',fullName);
input2.addEventListener('keyup',userName);
input3.addEventListener('keyup', password);
input4.addEventListener('keyup', confirmationPassword);
btn.addEventListener('click', successfulRegister);
}

// validacion login
if(btn1){
    btn1.addEventListener('click', btnLogin);
}

//=================================================================================================

//register

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
    const min= /^[a-zA-Z\s]{1,2}$/;
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
    usersL.push(input2.value);
    usersL.push(input3.value);
    lista.textContent = usersL;
    let session = localStorage.setItem(input2.value,JSON.stringify(usersL));
    console.log(session);

}

//login



// const usersL = ['Sebastian', 'Tatiana', 'Carlos', 'Stefany', 'Pedro'];
// const passwords = [111, 222, 333, 444, 555];


function btnLogin(){
    // let keyUser = $.parseJSON(localStorage.getItem(localStorage.key(0)));
    for(let i = 0; i < localStorage.length;i++){
        let key1 = localStorage.key[i];

        if(localStorage.key1[i] == passL.value){
            // alert('registro exitoso');
            console.log(localStorage.key1[i]);
        }else{
            // alert('.l.');
            console.log(localStorage.key1[i]);
        }
    }

}

    // for (let i = 0; i < usersL.length; i++) {
    //     if(userL.value == usersL[i]){
    //         if(passL.value == passwords[i]){
    //             alert('Usuario correcto');
    //         }else if(userL.value != usersL[i]){
    //             alert('usuario incorrecto');
    //         }else if(passL.value != passwords[i]){
    //             alert('Contraseña incorrecta');
    //         }else{
    //             alert('usuario no encontrado');
    //         }
    //         break;
    //     }
    // }
