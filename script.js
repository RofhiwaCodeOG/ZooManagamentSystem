class Animal {
  constructor(name, age, isFed) {
    this.name = name;
    this.age = age;
    this.isFed = isFed;
  }

  healthCheck() {
    const age = this.age;
    if (age <= 10) return "Baby";
    else if (age < 20) return "Young";
    else if (age < 40) return "Adult";
    else if (age <= 100) return "Old";
    else return "Unknown age bracket";
  }

  setFedStatus(status) {
    this.isFed = status;
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
    this.setFedStatus(true);
    return "Tiger is now fed.";
  }
}

class Giraffe extends Animal {
  makeSound() {
    return "Mmmmmmmmmmmmmm";
  }

  specialBehavior() {
    return "Tallest animal in the animal kingdom";
  }
}

function feedingCost() {
  const costFood = 80; // Rands
  const numberOfFeeds = 7;
  return costFood * numberOfFeeds;
}

function handleActions() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const species = document.getElementById("species").value;
  const isFed = document.getElementById("isFed").value === "true";

  let output = "";
  let animal;

  if (species === "Tiger") {
    animal = new Tiger(name, age, isFed);
    output += `<p><strong>Sound:</strong> ${animal.makeSound()}</p>`;
    output += !animal.isFed ? `<p>${animal.feedAnimal()}</p>` : `<p>Already fed.</p>`;
  } else if (species === "Giraffe") {
    animal = new Giraffe(name, age, isFed);
    output += `<p><strong>Sound:</strong> ${animal.makeSound()}</p>`;
  }

  output += `<p><strong>Health Check:</strong> ${animal.healthCheck()}</p>`;
  output += `<p><strong>Special Behavior:</strong> ${animal.specialBehavior()}</p>`;
  output += `<p><strong>Feeding Cost:</strong> R ${feedingCost()}</p>`;

  document.getElementById("output").innerHTML = output;
}
