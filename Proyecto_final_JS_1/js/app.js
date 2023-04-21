let ingresos = [new Ingreso("Salario", 20000), new Ingreso("Venta de auto", 500)];
let egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];
let formatoMoneda = (formatearValor) => {
    return formatearValor.toLocaleString("es-ES", { style: "currency", currency: "MXN", minimumFractionDigits: 2 });
}

let formatoPorcentaje = (formatearValor) => {
    return formatearValor.toLocaleString("es-ES", { style: "percent", minimumFractionDigits: 2 });
}
let cargarCabecero = () => {

    let totalIngresos = () => {
        let totalIngresos = 0;
        for (let ingreso of ingresos) {
            totalIngresos += ingreso.valor;
        }
        return totalIngresos;
    }

    let totalEgresos = () => {
        let totalEgresos = 0;
        for (let egreso of egresos) {
            totalEgresos += egreso.valor;
        }
        return totalEgresos;
    }

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();





    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

let cargarApp = () => {
    cargarCabecero()
    cargarIngresos()
}

let cargarIngresos = () => {
    let ingresosHTML = "";
    let crearIngresoHTML = (ingreso) => {
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML = `<div class="elemento_descripcion"> ${ingreso.descripcion}</div>`;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML = `<div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;
        let icon = document.createElement('ion-icon');
        icon.setAttribute('name', 'close-circle-outline');
        let boton = `<ion-icon name="close-circle-outline">${icon.innerHTML = ""}</ion-icon>`;
        let derecha =`<div class="derecha limpiarEstilos">${valor} ${boton}</div>`;
        

        let ingresoHTML =  `<div class="elemento limpiarEstilos"> ${descripcion}  ${derecha}</div>` ;
        
        

        return ingresoHTML;
        ;
    }

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);

    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;

    return ingresosHTML
}

