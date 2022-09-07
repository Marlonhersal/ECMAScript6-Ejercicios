async function* anotherGenerator (){
    yield await Promise.resolve(1)
    yield await Promise.resolve(22)
    yield await Promise.resolve(3)
}

const another = anotherGenerator();

another.next().then(res => console.log(res.value));
another.next().then(res => console.log(res.value));
another.next().then(res => console.log(res.value));

async function funcionAsincrona (array){
    for await (let valor of array){
        console.log(valor)
    }
}

const names = funcionAsincrona([10,20,30,40,50])
console.log('¡¡¡¡Heeeeyy!!!!!')