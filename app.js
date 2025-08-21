const lettersValidation = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
let friends =[];

/*Función agregar amigo
Esta función se encarga de agregar el nombre del amigo ingresado en el input al array de friends
y cuenta con validaciones para evitar nombre vacios o duplicados, arrojando para estos casos una alerta.
*/
function agregarAmigo(){
    let friendName= document.getElementById('amigo').value;//Obtener el nombre ingresado en el input

    /*validaciones
    1. verifica que el campo no se encuentre vacio
    2. verifica que el nombre ingresado solo contenga letras y espacios
    3. verifica que el nombre no se encuentre ya en la lista de amigos
    */

    //1.
    if(friendName===""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //2.
    if (!lettersValidation.test(friendName)){
        alert("El nombre solo puede contener letras y espacios.");
        document.getElementById('amigo').value=""; //Limpiar el campo de entrada
        return;
    }

    //3.
    if (friends.includes(friendName)){
        alert("El amigo ya existe en la lista.");
        document.getElementById('amigo').value="";
        return;
    }

    //si pasa todas las validaciones, se agrega el amigo al array
        friends.push(friendName);
        document.getElementById('amigo').value="";//Limpiar el campo de entrada
        document.getElementById('amigo').focus(); //Volver el foco al input para facilitar la entrada de nuevos amigos
        mostrarAmigos(); //Llamamos a la función para mostrar la lista actualizada.
}


/*Función mostrar amigos
Esta función se encarga de crear dinamicamente los elementos de la lista de amigos y mostrar a estos en el DOM, permitiendo 
que se visualicen los amigos que hemos ido agregando con la funcion de agregarAmigo.
*/
function mostrarAmigos(){
    let friendList=document.getElementById('listaAmigos');
    friendList.innerHTML=""; //limpiar la lista antes de mostrarla

    for (let i=0; i < friends.length; i++){
        let listElement = document.createElement('li');
        listElement.textContent = friends[i]; //Asignar el nombre del amigo al elemento de la lista

        friendList.appendChild(listElement);//Insertamos el elemento nuevo de la lista en el DOM
    }

}

/*function sortearAmigo
Esta función se encarga de seleccionar a un amigo del array friends de manera aleatoria y lo muestra en el Dom
Tambien maneja casos especiales para cuando no hay amigos en la lista o cuando solo hay uno y antes de
mostrar el resultado, oculta la lista de los amigos agregados.
*/ 

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    let friendList=document.getElementById('listaAmigos');
    if (friends.length === 0){
        alert("No hay amigos para seleccionar")
    }else if(friends.length===1){
        friendList.hidden=true;
        resultado.innerHTML = `El unico amigo para sortear es: ${friends[0]}`
    }else{
        friendList.hidden=true;
        let randomFriend = friends[Math.floor(Math.random() * friends.length)];
        resultado.innerHTML = `El amigo seleccionado es: ${randomFriend}`;
        console.log(friends)
    }
}

mostrarAmigos(); //Hacemos llamado a la función para mostrar la lista al momento de cargar la página.
