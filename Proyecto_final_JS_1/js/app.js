let ingresos = [new Ingreso ("Salario",20000), new Ingreso("Venta de auto",50000)];
let egresos = [new Egreso ("Renta",4000),new Egreso("Ropa",800)];

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

    let formatoMoneda = (formatearValor) => {
        return formatearValor.toLocaleString("es-ES", { style: "currency", currency: "MXN", minimumFractionDigits: 2 });
    }
    
    let formatoPorcentaje = (formatearValor) => {
        return formatearValor.toLocaleString("es-ES", { style: "percent", minimumFractionDigits: 2 });
    }


    
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
}


cargarCabecero()
