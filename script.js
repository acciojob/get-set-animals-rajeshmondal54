    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }


    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
    // Method to log "woof" to the console
    bark() {
        console.log("woof");
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    // Method to log "purr" to the console
    purr() {
        console.log("purr");
    }
}

// Expose the classes to the window object for Cypress tests
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;