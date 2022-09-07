const fnAsync = ()=>{
    return new Promise((resolve,reject)=>{
        true? 
        setTimeout(()=>{resolve('Simón tu hijo')},1000)
        : reject(new Error('Error'))
    })
    
}

const anotherFunction = async ()=>{

    console.log("Yo soy simón")
    const something = await fnAsync();
    console.log(something)
    console.log("Check")
}
console.log('No me conoces')
anotherFunction()
console.log('yo soy simón')

const funcionAsincrona = (boleano)=>{
    return new Promise((resolve,reject)=>{
        boleano?
        setTimeout(
            ()=>{
                resolve('Simón');
            },
            1000
        ):
        setTimeout(()=>{
            reject('Pedro Navaja');
        },1000)
    }
    )
}

const funcion = async(valor)=>{
    let res = await funcionAsincrona(valor);
    return res
}

 console.log( await funcion(false) .catch(res => console.log(res)))
 