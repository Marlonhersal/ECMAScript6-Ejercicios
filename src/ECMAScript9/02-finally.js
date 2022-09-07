const funcionPromesa = (bolean)=>{
    return new Promise(
        (resolve, reject)=>{
            if(bolean){
                resolve('Hey!!')
            }
            else{
                reject('Whooops');
            }
        }
    )
};

funcionPromesa(false)
    .then(info => console.log(info))
    .catch(err => console.log(err))
    .finally(()=>{console.log('Se acabó')});