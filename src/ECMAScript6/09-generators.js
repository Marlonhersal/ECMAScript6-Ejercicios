function* iterate(array){
    for(let value of array){
        yield value
    }
}


let func = iterate(['Manzana', 'Pera'])

console.log(func.next())
console.log(func.next())
console.log(func.next())