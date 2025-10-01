class Animal {
    constructor(name, age, isFed) {
        this.name = name;
        this.age = age;
        this.isFed = isFed;
    }

    makeSound() {
        throw "makeSound() must be implemented";
    }

    getName() { return this.name; }
    getAge() { return this.age; }
    getIsFed() { return this.isFed; }

    setIsFed(isFed) {
        this.isFed = isFed;
    }

    healthCheck() {
        let age = this.getAge();
        if (age <= 10) {
            return "Baby";
        } else if (age > 10 && age < 20) {
            return "Young";
        } else if (age >= 20 && age < 40) {
            return "Adult";
        } else if (age >= 40 && age <= 100) {
            return "Old";
        } else {
            return "Age out of expected range";
        }
    }
}

class Tiger extends Animal {
    makeSound() {
        return "Rrrrrr";
    }

    specialBehavior() {
        return "Fastest animal in the animal kingdom";
    }

    feedAnimal() {
        this.setIsFed(true);
        return "Tiger is now fed.";
    }
}

class Giraffe extends Animal {
    makeSound() {
        return "mmmmmmmmmmmmm";
    }

    specialBehavior() {
        return "Tallest animal in the animal kingdom";
    }
}

function feedingCost() {
    const costFood = 80;
    const numberOfFeeds = 7;
    return costFood * numberOfFeeds;
}

function handleActions() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const species = document.getElementById("species").value;
    const isFed = document.getElementById("isFed").value === "true";

    let animal;
    let output = "";

    if (species === "Tiger") {
        animal = new Tiger(name, age, isFed);
        output += `<p><strong>Sound:</strong> ${animal.makeSound()}</p>`;
        if (!animal.getIsFed()) {
            output += `<p>${animal.feedAnimal()}</p>`;
        } else {
            output += `<p>Tiger is already fed.</p>`;
        }
    } else if (species === "Giraffe") {
        animal = new Giraffe(name, age, isFed);
        output += `<p><strong>Sound:</strong> ${animal.makeSound()}</p>`;
    }

    output += `<p><strong>Health:</strong> ${animal.healthCheck()}</p>`;
    output += `<p><strong>Special Behavior:</strong> ${animal.specialBehavior()}</p>`;
    output += `<p><strong>Feeding Cost:</strong> $${feedingCost()}</p>`;

    document.getElementById("output").innerHTML = output;
}
