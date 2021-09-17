class Productos{

    constructor(precio, cantidad, proveedor) {

        this.precio = precio;

        this.cantidad   = cantidad;

        this.proveedor = proveedor; 
        }
        sumarIva(){
            this.precio = this.precio * 1.21;
    }
 }

const mixPetalos = new Productos("$800", 22, "PaloSanto S.A");
const sahumeriosArt = new Productos("$300", 34, "Nuestra Proveeduría")
const sahumeriosPS = new Productos ("250", 14, "PaloSanto S.A")

mixPetalos.sumarIva ();
sahumeriosArt.sumarIva();
sahumeriosPS.sumarIva();
