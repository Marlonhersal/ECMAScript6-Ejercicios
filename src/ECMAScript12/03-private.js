    //Declaración
    class User{

    };
        // Instancia de una clase  
        // const newUser = new User();
    
    class user{
        saludo(){
            return 'Hello'
        }
    }
    
    const gndx = new user();
    
    console.log(gndx.saludo())
    
        //constructor
    
    class user{
        //Constructor
        constructor(){
            console.log('Nuevo Usuario')
        }
        saludo(){
            return 'Hello'
        }
    }
    
    const user1 = new user();
    
    class user{
        //Constructor
        constructor(name){
            this.name = name;
        }
        speak(){
            return 'Hello'
        }
        saludo(){
            return ` ${this.speak()} ${this.name}`
        }
    };
    
    const user2 = new user('Marlon');
    
    console.log(user2.saludo());
    
        //setters getters
    class user{
        //Constructor
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        //métodos
        #speak(){
            return 'Hello';
        }
    
        saludo(){
            return ` ${this.speak()} ${this.name}`
        }
    
        get #uAge(){
            return this.age;
        }
        set #uAge(n){
            this.age = n;
        }
    }
    
    const ejemplo = new user('Marlon', 18);
    console.log(ejemplo.uAge)
    console.log(ejemplo.uAge = 20)
    console.log(ejemplo.uAge)
    
    
    