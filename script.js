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

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;