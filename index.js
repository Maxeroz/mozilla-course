// Object Basics Mozilla Tasks

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.score = 0;
    }
    login() {
      console.log(this.name, "just logged in");
      // return this;
    }
    logout() {
      console.log(this.name, "just logged out");
      // return this;
    }
    updateScore() {
      // debugger
      this.score++;
      // console.log(this.name, "score is now", this.score);
      return this;
    }
  }
  
  // let personOne = new Person("Maxim", 25);
  // let personTwo = new Person("Danila", 24);
  
  // console.log(personTwo)
  // console.log(personOne.updateScore())
  
  const firstName = "Maksim";
  const lastName = "Ozerskii"
  
  const newFunction = function() {
    let fullName = firstName + " " + lastName;
    fullName = "Danila Matushin"
    // console.log(fullName)
    // console.log("Hello World")
  }
  // console.log(newFunction())
  
  const person = {
    name: {
      first: "Bob",
      last: "Smith"
    },
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  
  const myDataName = "height";
  const myDataValue = "1.75m";
  person[myDataName] = myDataValue;
  
  console.log(person.height)
  
  // tasks
  
  // const cat = {
  //   name : 'Bertie',
  //   breed : 'Cymric',
  //   color : 'white',
  //   greeting: function() {
  //     console.log('Meow!');
  //   }
  // }
  
  // Put your code here
  
  // const catName = cat["name"];
  // cat.greeting()
  // cat.color = "black"
  
  const myFavouriteDj = {
    name: "Armin",
    nationality: "Dutch",
    genre: "Progressive Trance",
    formed: 1995,
    split: false,
    albums: [{
        name: 76,
        released: 2003
      },
      {
        name: "Shivers",
        released: 2005
      },
    ]
  }
  
  let bandInfo = "Armin Jozef Jacobus Daniël van Buuren was born 25 December 1976) is a Dutch DJ and record producer from Leiden, South Holland"
  
  class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
    greeting() {
      console.log(`Hello, said ${this.name} the ${this.breed}`)
    }
  }
  
  const cat1 = new Cat("Bertie","Cymric")
  
  const cat2 = new Cat("None","None")