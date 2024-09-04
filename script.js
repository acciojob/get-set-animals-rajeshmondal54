// Define the Animal class
class Animal {
    constructor(species) {
        this._species = species; // Store species in a private variable
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound
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