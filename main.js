var alquiler, comida, transporte, otros;

alquiler = parseInt(prompt("Ingrese el monto de su alquiler:"));
comida = parseInt(prompt("Ingrese el monto de su comida:"));
transporte = parseInt(prompt("Ingrese el monto de su transporte:"));
otros = parseInt(prompt("Ingrese el monto de sus otros gastos:"));

var total = alquiler + comida + transporte + otros;

var ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

var lineaDePobreza = 191228;

function alerta(){
    if(total >= lineaDePobreza && total >= ingresos){
        alert(`Su gasto mensual es de ${total}. Usted actualmente se encuentra bajo la línea de pobreza establecida por el gobierno de su país y además está gastando más de lo que gana. El valor actual de la canasta básica es de ${lineaDePobreza}`);
    }
    else if(total >= lineaDePobreza) {
        alert(`Su gasto mensual es de ${total}. Usted actualmente se encuentra bajo la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de ${lineaDePobreza}`);
    }
    else {
        alert(`Su gasto mensual es de ${total}. Usted actualmente se encuentra por encima de la línea de pobreza establecida por el gobierno de su país. El valor actual de la canasta básica es de ${lineaDePobreza}`);
    }
};

alerta();