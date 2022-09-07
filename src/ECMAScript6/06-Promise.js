    //Promisse
const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            console.log('En espera')
            setTimeout(() => {
                resolve('Funciona')
            }, 2000);
        }
        else{
            reject('No funciona');
        }
    },
    );
}

anotherFunction()
    .then(response => {console.log(response)})
    .catch(err => console.log(err));

