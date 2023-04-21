
let ingresos = [new Ingreso("Salario", 20000), new Ingreso("Venta de auto", 500), new Ingreso("Venta Xbox", 7000), new Ingreso("jsndfjnsdf", 12)];
let egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800), new Egreso("Xbox", 7000)];


let formatoMoneda = (formatearValor) => {
     let valorFormateado =formatearValor.toLocaleString("es-ES", { style: "currency", currency: "MXN", minimumFractionDigits: 2 });
    if(formatearValor < 10000 ){
    return valorFormateado.replace( ",",".");}
    else{
        return valorFormateado.replace(",", ".").replace(".", ",")
    }
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
    cargarEgresos()
}

let eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);

    if (indiceEliminar !== -1) {
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
    }
}

let cargarIngresos = () => {
    let ingresosHTML = "";
    let crearIngresoHTML = (ingreso) => {
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML = `<div class="elemento_descripcion"> ${ingreso.descripcion}</div>`;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML = `<div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;
        let icon = document.createElement('ion-icon');
        let iconA = `<ion-icon name="close-circle-outline">${icon.innerHTML = ""}</ion-icon>`;
        let iconB = `<botton onclick="eliminarIngreso(${ingreso.id})" class="elemento_eliminar_btn">${iconA}</botton>`

        let boton = `<div class="elemento_eliminar">${iconB}</div>`

        let derecha = `<div class="derecha limpiarEstilos">${valor} ${boton}</div>`;


        let ingresoHTML = `<div id="${ingreso.descripcion}" class="elemento limpiarEstilos"> ${descripcion}  ${derecha}</div>`;



        return ingresoHTML;
        ;
    }

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);

    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;

    return ingresosHTML
}


let eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);

    if (indiceEliminar !== -1) {
        egresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgresos();
    }

}
let cargarEgresos = () => {
    let egresosHTML = "";
    let crearEgresoHTML = (egreso) => {
        let totalIngresos = () => {
            let totalIngresos = 0;
            for (let ingreso of ingresos) {
                totalIngresos += ingreso.valor;
            }
            return totalIngresos;
        }
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML = `<div class="elemento_descripcion"> ${egreso.descripcion}</div>`;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML = `<div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>`;
        let icon = document.createElement('ion-icon');
        let iconA = `<ion-icon name="close-circle-outline">${icon.innerHTML = ""}</ion-icon>`;
        let iconB = `<botton onclick="eliminarEgreso(${egreso.id})" class="elemento_eliminar_btn">${iconA}</botton>`

        let boton = `<div class="elemento_eliminar">${iconB}</div>`
        let porcentaje = document.getElementsByClassName("elemento_porcentaje").innerHTML = `<div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>`

        let derecha = `<div class="derecha limpiarEstilos">${valor}${porcentaje} ${boton}</div>`;


        let egresoHTML = `<div id="${egreso.descripcion}" class="elemento limpiarEstilos"> ${descripcion}${derecha}</div>`;



        return egresoHTML;
        ;
    }

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);

    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;

    return egresosHTML


}



let agregarDato = () => {
    let forma = document.getElementById("forma");
    let formaSelect = document.getElementById("tipo");
    let selectTypeOf = formaSelect.value;
    let descripcion = forma.descripcion.value
    let valor = forma.valor.value;

    let nuevoIngreso = new Ingreso(descripcion, parseInt(valor))
    if (valor !== "" && descripcion !== "") {
        if (selectTypeOf == "ingreso") {
            ingresos.push(nuevoIngreso)

        }
        else{
            egresos.push(nuevoIngreso)
        }
    }
    forma.descripcion.value = "";
    forma.valor.value = "";
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
