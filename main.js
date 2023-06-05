
// let alquiler, comida, transporte, otros;

// alquiler = parseInt(prompt("Ingrese el monto de su alquiler:"));
// comida = parseInt(prompt("Ingrese el monto de su comida:"));
// transporte = parseInt(prompt("Ingrese el monto de su transporte:"));
// otros = parseInt(prompt("Ingrese el monto de sus otros gastos:"));

// let total = alquiler + comida + transporte + otros;

// let ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

// let lineaDePobreza = 191228;

// function alerta(){
//     if(ingresos >= lineaDePobreza){
//         alert(`Su gasto mensual es de $${total}. Usted actualmente se encuentra por encima de la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de $${lineaDePobreza}`);
//     }
//     else {
//         alert(`Su gasto mensual es de $${total}. Usted actualmente se encuentra bajo la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de $${lineaDePobreza}`);
//     }
// };

// alerta();

// const gastos = [alquiler, comida, transporte, otros];
// alert(`Su lista de gastos: Alquiler: $${gastos[0]}, Comida: $${gastos[1]}, Transporte: $${gastos[2]}, Otros: $${gastos[3]}`);

// let resto = ingresos - total;
// alert(`A usted le sobran $${resto} para usar en lo que desee.`);

// let convivientes = prompt("¿Usted convive con más personas en su hogar? Escriba SÍ o NO.");

// convivientes = convivientes.toLowerCase();

// if ((convivientes === "si") || (convivientes === "sí")){
//     // Constructora de objetos de personas
//     function Personas(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     // Arreglo para guardar los objetos de cada persona y mostrarlos
//     const personas = [];

//     let cantidadConvivientes = parseInt(prompt("Ingrese la cantidad de personas con las que convive:"));
//     for (let i = 1; i <= cantidadConvivientes; i++){
//         let nombre = prompt(`Nombre de la persona ${i}:`);
//         let edad = prompt(`Edad de ${nombre}`);
//         let persona = new Personas(nombre, edad);
//         personas.push(persona);
//     }
//     let alertaConvivientes = "Sus compañeros de casa son: "
//     for (let i = 0; i < personas.length; i++) {
//         alertaConvivientes += `${personas[i].nombre}, de ${personas[i].edad} años. `
//     }
//     alert(alertaConvivientes);
// }else if (convivientes === "no"){
//     alert("Usted vive solo.")
// }else{
//     alert("Recargue la página")
// };

// Formulario: Nombre de usuario y edad.
sessionStorage.clear()

function guardarUsuario(){
    let usuario = document.getElementById("nombreInput").value;
    sessionStorage.setItem("username", usuario);
    let edad = document.getElementById("edadInput").value;
    sessionStorage.setItem("edad", edad);
    let mostrarNombre = document.querySelectorAll(".mostrarNombre");
    mostrarNombre.forEach(function(espacio){
        espacio.innerHTML = usuario;
    });
    let mostrarEdad = document.querySelectorAll(".mostrarEdad");
    mostrarEdad.forEach(function(espacio){
        espacio.innerHTML = edad;
    });
    if (usuario && edad){
        document.getElementById("perfil").style.display = "block";
        document.getElementById("ingreso").style.display = "none";
        document.getElementById("datos").style.display = "block";
        document.getElementById("convivientes").style.display = "block";
    }
    else { 
        Swal.fire('Ingrese valores válidos')}
}

// FORMULARIO INGRESOS

function guardarIngresos(){
    let ingresos = document.getElementById("ingresosMensuales").value;
    if (ingresos){
    // sessionStorage.setItem("ingresos", ingresos);
    document.getElementById("formularioIngresos").style.display = "none";
    document.getElementById("valorIngresos").innerHTML = ingresos;
    document.getElementById("mostrarIngresos").style.display = "block";
}
else {
    Swal.fire("Ingrese un valor")
}
}

// ARRAY DE GASTOS
// let gastosAlquiler = document.getElementById('gastosAlquiler').value;
// let gastosServicios = document.getElementById("gastosServicios").value;
// let gastosComida = document.getElementById("gastosComida").value;
// let gastosTransporte = document.getElementById("gastosTransporte").value;
// let gastosOtros = document.getElementById("gastosOtros").value;

// let gastosArreglo = {
//     gastosAlquiler: gastosAlquiler,
//     gastosServicios: gastosServicios,
//     gastosComida: gastosComida,
//     gastosTransporte: gastosTransporte,
//     gastosOtros: gastosOtros
// }

function guardarGastos() {
    let gastosAlquiler = parseInt(document.getElementById("gastosAlquiler").value);
    let gastosServicios = parseInt(document.getElementById("gastosServicios").value);
    let gastosComida = parseInt(document.getElementById("gastosComida").value);
    let gastosTransporte = parseInt(document.getElementById("gastosTransporte").value);
    let gastosOtros = parseInt(document.getElementById("gastosOtros").value);
    
    if (gastosAlquiler && gastosServicios && gastosComida && gastosTransporte && gastosOtros){

        // sessionStorage.setItem("gastosAlquiler", gastosAlquiler);
        // sessionStorage.setItem("gastosOtros", gastosOtros);
        // sessionStorage.setItem("gastosServicios", gastosServicios);
        // sessionStorage.setItem("gastosComida", gastosComida);
        // sessionStorage.setItem("gastosTransporte", gastosTransporte);

        document.getElementById("formularioGastos").style.display = "none";
        document.getElementById("mostrarGastos").style.display = "block";
        document.getElementById("mostrarAlquiler").innerHTML = gastosAlquiler;
        document.getElementById("mostrarServicios").innerHTML = gastosServicios;
        document.getElementById("mostrarComida").innerHTML = gastosComida;
        document.getElementById("mostrarTransporte").innerHTML = gastosTransporte;
        document.getElementById("mostrarOtros").innerHTML = gastosOtros;
        
        let totalGastos = gastosAlquiler + gastosServicios + gastosComida + gastosTransporte + gastosOtros;
        document.getElementById("mostrarSumaGastos").innerHTML = "<h2>Total Gastos: $" + totalGastos + "</h2>";
        
        let ingresos = parseInt(document.getElementById("ingresosMensuales").value);
        let lineaDePobreza = 191800;
        if (!ingresos){
            alert("Ingrese sus ingresos, sino no podremos ingresar los ingresos de la ingresada... Jeje")
        }
        let sobrante = ingresos - totalGastos;
            document.getElementById("totalSobrante").innerHTML = "<h2>Total sobrante: $" + sobrante + "</h2>";
            document.getElementById("mostrarPobreza").innerHTML = "<h2>Línea de pobreza: $" + lineaDePobreza + "</h2>";
            
            if (ingresos >= lineaDePobreza){
                document.getElementById("mensajePobreza").innerHTML = "<h3>Usted se encuentra por encima de la línea de pobreza</h3>";
                }
            else {
                document.getElementById("mensajePobreza").innerHTML = "<h3>Usted se encuentra por debajo de la línea de pobreza</h3>";
            }
            // JSON.parse(sessionStorage.setItem("sumaGastos", totalGastos));
        }
    else {
        Swal.fire('Ingrese correctamente los valores.')
    }
}


// let ingresosSS = JSON.parse(sessionStorage.getItem("ingresos"));
// let gastosAlquilerSS = JSON.parse(sessionStorage.getItem("gastosAlquiler"));
// let gastosServiciosSS = JSON.parse(sessionStorage.getItem("gastosServicios"));
// let gastosComidaSS = JSON.parse(sessionStorage.getItem("gastosComida"));
// let gastosTransporteSS = JSON.parse(sessionStorage.getItem("gastosTransporte"));
// let gastosOtrosSS = JSON.parse(sessionStorage.getItem("gastosOtros"));


    
    // gastosServicios ? document.getElementById("mostrarAlquiler").style.display = "block" : alert("hola");
    // gastosComida
    // gastosTransporte
    // gastosOtros

// OBJETO DE PERSONAS CONVIVIENTES



function Persona(nombre, edad, trabaja) {
    this.nombre = nombre;
    this.edad = edad;
    this.trabaja = trabaja;
}

    // Guardar datos en array
    const personas = [];

    document.getElementById("personasConvivientesForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let trabaja = document.getElementById("trabaja").value;

    let persona = new Persona(nombre, edad, trabaja);

    personas.push(persona);

    // Mostrar convivientes
    let datosPersonas = document.getElementById("datosConvivientes");

    personas.forEach(function(persona){
        let personaDiv = document.createElement("div");
        personaDiv.innerHTML = "Nombre: " + persona.nombre + "<br>Edad: " + persona.edad + "<br>Trabaja: " + persona.trabaja + "<hr>";
        datosPersonas.appendChild(personaDiv);
    });
    
    document.getElementById("personasConvivientesForm").reset();
});