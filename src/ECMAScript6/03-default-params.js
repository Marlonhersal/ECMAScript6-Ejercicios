function newUser(name,age,country){
    var name = name || 'Marlon';
    var age = age || 18
    var country = country || 'Mexico wey'
    console.log(name,age,country)
}

newUser();
newUser('Emanuel', 18, 'USA');

function newAdmin(name = 'Marlon', age = 18, country = 'Mexico'){
    console.log(name,age,country)
}
newAdmin();
newAdmin('Emanuel', 18, 'USA');
