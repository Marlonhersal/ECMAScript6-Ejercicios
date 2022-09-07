    //Flat
const array = [10,20,30,40,20, ['Marlon', 'Pedro'], 10, [20,[30,29]], 'Final']
console.log(array.flat(3))
    //Flatmap
const array2 = [1,2,3,4,5,10]
console.log(array2.flatMap(v =>[v,v, v + v]))