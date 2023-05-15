let alquiler, comida, transporte, otros;

alquiler = parseInt(prompt("Ingrese el monto de su alquiler:"));
comida = parseInt(prompt("Ingrese el monto de su comida:"));
transporte = parseInt(prompt("Ingrese el monto de su transporte:"));
otros = parseInt(prompt("Ingrese el monto de sus otros gastos:"));

let total = alquiler + comida + transporte + otros;

let ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

let lineaDePobreza = 191228;

function alerta(){
    if(ingresos >= lineaDePobreza){
        alert(`Su gasto mensual es de $${total}. Usted actualmente se encuentra por encima de la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de $${lineaDePobreza}`);
    }
    else {
        alert(`Su gasto mensual es de $${total}. Usted actualmente se encuentra bajo la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de $${lineaDePobreza}`);
    }
};

alerta();

const gastos = [alquiler, comida, transporte, otros];
alert(`Su lista de gastos: Alquiler: $${gastos[0]}, Comida: $${gastos[1]}, Transporte: $${gastos[2]}, Otros: $${gastos[3]}`);

let resto = ingresos - total;
alert(`A usted le sobran $${resto} para usar en lo que desee.`);

let convivientes = prompt("¿Usted convive con más personas en su hogar? Escriba SÍ o NO.");

convivientes = convivientes.toLowerCase();

if ((convivientes === "si") || (convivientes === "sí")){
    // Constructora de objetos de personas
    function Personas(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Arreglo para guardar los objetos de cada persona y mostrarlos
    const personas = [];

    let cantidadConvivientes = parseInt(prompt("Ingrese la cantidad de personas con las que convive:"));
    for (let i = 1; i <= cantidadConvivientes; i++){
        let nombre = prompt(`Nombre de la persona ${i}:`);
        let edad = prompt(`Edad de ${nombre}`);
        let persona = new Personas(nombre, edad);
        personas.push(persona);
    }
    let alertaConvivientes = "Sus compañeros de casa son: "
    for (let i = 0; i < personas.length; i++) {
        alertaConvivientes += `${personas[i].nombre}, de ${personas[i].edad} años. `
    }
    alert(alertaConvivientes);
}else if (convivientes === "no"){
    alert("Usted vive solo.")
}else{
    alert("Recargue la página")
};

