console.log( 1 == 1 )
console.log( 1 == '1' )

console.log( 1 === 1 )
console.log( 1 === '1' )

console.log( 1 == true )
console.log( 1 === true )

console.log( 0 == false )
console.log( 0 === false )

console.log( 0 == null )
console.log( 0 == undefined )

// null y undefined no tienen nada.
console.log( null == undefined )
// Aunque no hay nada, null por default se crea el tipo object; en cambio, undefined ni siquiera crea un objeto en la memoria.
console.log( null === undefined )

console.log( false == null )
console.log( null )
console.log( !null )
console.log( !!null )

console.log( !!null == false )
console.log( !!null === false )
// 0 y !undefined van a ser booleanos
console.log( 0 == !!undefined )
console.log( 0 === !!undefined )

var obj1 = { nombre: 'Jordy' }
var obj2 = { nombre: 'Jordy' }

console.log(obj1 == obj2)

console.log(obj1.nombre == obj2.nombre)
console.log(obj2)

var obj3 = obj2

console.log(obj2 == obj3)

obj3.nombre = 'Luis'

console.log(obj2)
