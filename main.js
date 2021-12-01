alert('Hola Mundo')

var nombre = "kali LNiux";
var altura = 190;

document.write(nombre)
document.write(altura)

var concatenacion =  nombre + " "  + altura; 

document.write(concatenacion)

/*
var datos = document.getElementById("datos");

// datos.innerHTML = concatenacion;
datos.innerHTML =`<h1> Hola soy la caja de datos
                    </h1>

                <h2> Mi nombre es ${nombre} </h2>
                <h3> Mido : ${altura}  </h3>
`;


if(altura >= 190){
datos.innerHTML += `<h1> Eres una persona Alta </h1>`;

}else{
    datos.innerHTML += `<h1> Eres una persona bajita </h1>`;
}
*/

for (var i=0; i<= 2021; i++){
    //BLoque de instrucciones

    datos.innerHTML += `<h2> Estamos en el año</h2>` +i;


}

function MuestraMiNombre(nombre, altura){

    var misDatos =`<h1> Hola soy la caja de datos
                    </h1>

                <h2> Mi nombre es ${nombre} </h2>
                <h3> Mido : ${altura}  </h3>
`;

return misDatos;
}

function imprimir(){

    var datos = document.getElementById("datos");
    datos.innerHTML =MuestraMiNombre("W", 170);
}

imprimir();

var nombres = ['victor' , 'Annie', 'Joaquin'];
alert(nombres[2]);