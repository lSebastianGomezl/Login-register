// login
const userL = document.getElementById('inputL1');
const passL = document.getElementById('passwordL');
const btn = document.getElementById('btnL')


// userL.addEventListener('keyup', userNameL);
// passL.addEventListener('keyup', passwordL);
btn.addEventListener('click', btnLogin);


const usersL = ['Sebastian', 'Tatiana', 'Carlos', 'Stefany', 'Pedro'];
const passwords = [111, 222, 333, 444, 555];


function btnLogin(){
    for (let i = 0; i < usersL.length; i++) {
        if(userL.value == usersL[i]){
            if(passL.value == passwords[i]){
                alert('Usuario correcto'); 
            }else if(userL.value != usersL[i]){
                alert('usuario incorrecto'); 
            }else if(passL.value != passwords[i]){
                alert('Contraseña incorrecta');
            }else{
                alert('usuario no encontrado');
            }
            break;   
        } 
    }
}
