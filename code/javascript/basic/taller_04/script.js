let mi_carro= {
    marca: 'Alejito',
    modelo: 'Mijito',
    anio: 2023
    detalle_auto: function()
    console.log('Auto:${this.marca}-${this.modelo},Año:${this.anio}')
}

console.log(mi_carro.marca)
mi_carro.marca='Lauco'
mi_carro.detalle_auto()

function carro(marca, modelo, anio){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.detalle_auto = function() {
        console.log('Auto:${this.marca}-${this.modelo},Año:${this.anio}')
    }
}

lat mi_auto = new carro('Ford', 'Focus', 2023)
mi_auto.detalle_auto()