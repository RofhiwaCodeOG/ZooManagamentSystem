class Animal {
  constructor(name, age, isFed) {
    this.name = name;
    this.age = age;
    this.isFed = isFed;
  }

  makeSound() {
    throw new Error("makeSound() must be implemented by subclass");
  }

  healthCheck() {
    const age = this.age;
    if (age <= 10) {
      return "Baby";
    } else if (age > 10 && age < 20) {
      return "Young";
    } else if (age >= 20 && age < 40) {
      return "Adult";
    } else if (age >= 40 && age <= 100) {
      return "Old";
    } else {
      return "Unknown age bracket";
    }
  }

  setFedStatus(isFed) {
    this.isFed = isFed;
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
  const costFood = 80; // in Rands per feed
  const numberOfFeeds = 7;
  return costFood * numberOfFeeds; // in Rands
}

function handleActions() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const species = document.getElementById("species").value;
  const isFed = (document.getElementById("isFed").value === "true");

  if (!name || isNaN(age)) {
    alert("Please enter valid name and age.");
    return;
  }

  let animal;
  let html = `<h2>Results for ${name} (${species})</h2>`;

  if (species === "Tiger") {
    animal = new Tiger(name, age, isFed);
    html += `<p><i class="fas fa-volume-up"></i> <strong>Sound:</strong> ${animal.makeSound()}</p>`;

    if (!animal.isFed) {
      html += `<p>${animal.feedAnimal()}</p>`;
    } else {
      html += `<p>The tiger is already fed.</p>`;
    }
  } else if (species === "Giraffe") {
    animal = new Giraffe(name, age, isFed);
    html += `<p><i class="fas fa-volume-up"></i> <strong>Sound:</strong> ${animal.makeSound()}</p>`;
  }

  html += `<p><i class="fas fa-heartbeat"></i> <strong>Health Status:</strong> ${animal.healthCheck()}</p>`;
  html += `<p><i class="fas fa-star"></i> <strong>Special Behavior:</strong> ${animal.specialBehavior()}</p>`;
  html += `<p><i class="fas fa-coins"></i> <strong>Feeding Cost:</strong> R ${feedingCost().toLocaleString()}</p>`;

  document.getElementById("output").innerHTML = html;
}

// Add event listener
document.getElementById("btnSubmit").addEventListener("click", handleActions);
