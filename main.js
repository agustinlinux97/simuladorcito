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
        document.getElementById("convertidorContainer").style.display = "block";
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
        document.getElementById("mostrarSumaGastos").innerHTML = "<h4>Total Gastos: $" + totalGastos + "</h4>";
        
        let ingresos = parseInt(document.getElementById("ingresosMensuales").value);
        let lineaDePobreza = 191800;
        if (!ingresos){
            alert("Ingrese sus ingresos, sino no podremos ingresar los ingresos de la ingresada... Jeje")
        }
        let sobrante = ingresos - totalGastos;
            document.getElementById("totalSobrante").innerHTML = "<h4>Total sobrante: $" + sobrante + "</h4>";
            document.getElementById("mostrarPobreza").innerHTML = "<h4>Línea de pobreza: $" + lineaDePobreza + "</h4>";
            
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

// CONVERSION A MONEDAS EXTRANJERAS

function mostrarConvertidor() {
    document.getElementById('convertidor').style.display = "block";
}

document.getElementById("btnMostrarConvertidor").addEventListener("click", mostrarConvertidor);

let divisaArg = "ARS";
let divisaExt = document.getElementById('divisaExt');
let rateDiv = document.getElementById('rate');
let resultado = document.getElementById('resultadoConversion');

let ingresos = document.getElementById('ingresosMensuales');
let gastosAlquiler = document.getElementById("gastosAlquiler");
let gastosServicios = parseInt(document.getElementById("gastosServicios"));
let gastosComida = parseInt(document.getElementById("gastosComida"));
let gastosTransporte = parseInt(document.getElementById("gastosTransporte"));
let gastosOtros = parseInt(document.getElementById("gastosOtros"));


function convertir() {
    let divisaArg = "ARS";
    let divisa2 = divisaExt.value;

  fetch(`https://v6.exchangerate-api.com/v6/38b88de541fd4f37df741b8a/latest/ARS`)
    .then((res) => res.json())
    .then((data) => {
        let rate = data.conversion_rates[divisa2];
        rateDiv.innerHTML = `<p>1 ${divisaArg} = ${rate} ${divisa2}</p>`;
        resultado.value = (ingresos.value * rate).toFixed(2);
        resultado.innerHTML = `Sus ingresos en ${divisa2} son de: ${resultado.value}`
    });
}

ingresos.addEventListener('input', convertir);
divisaExt.addEventListener('change', convertir);

convertir();

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

    let datosPersonas = document.getElementById("datosConvivientes");

    let personaDiv = document.createElement("div");
    personaDiv.innerHTML = "Nombre: " + persona.nombre + "<br>Edad: " + persona.edad + "<br>Trabaja: " + persona.trabaja + "<hr>";
    datosPersonas.insertBefore(personaDiv, datosPersonas.firstChild);

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("trabaja").value = "";
});
