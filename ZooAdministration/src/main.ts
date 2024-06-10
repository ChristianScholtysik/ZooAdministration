import Animal from "./Animal";
import EnclosureId from "./EnclosureId";
import Continent from "./Continent";
import {
  Lion,
  Elephant,
  Bear,
  Monkey,
  Dolphin,
  Snake,
  Turtle,
  Crocodile,
  Lizard,
  Parrot,
  Eagle,
  Macaw,
  Fish,
  Trout,
  Shark,
  Octopus,
  Squid,
  Frog,
  Alligator,
  Swan,
  Duck,
  Clownfish,
  Tiger,
  Rhinoceros,
  Cockatoo,
  Pufferfish,
  Panda,
  Camel,
  Toucan,
  Flamingo,
} from "./animalClasses";

//* Elemente holen

const selectAnimal = document.getElementById(
  "select-animal"
) as HTMLSelectElement;
const nameOfAnimalInput = document.getElementById(
  "nameInput"
) as HTMLInputElement;
const birthYearInput = document.getElementById(
  "birthYearInput"
) as HTMLInputElement;
const selectContinent = document.getElementById(
  "select-continent"
) as HTMLSelectElement;

const selectSpecialNeeds = document.getElementById(
  "select-specialNeeds"
) as HTMLSelectElement;
const selectHabitat = document.getElementById(
  "select-enclosure"
) as HTMLSelectElement;

const createAnimalButton = document.getElementById(
  "button"
) as HTMLInputElement;

const savannahEnclosure = document.getElementById("savannah") as HTMLElement;
const jungleEnclosure = document.getElementById("jungle") as HTMLElement;
const reptileEnclosure = document.getElementById("reptileHouse") as HTMLElement;
const aquariumEnclosure = document.getElementById("aquarium") as HTMLElement;

const allZooAnimals: Animal[] = [];
const savannahAnimals: Animal[] = [];
const jungleAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];
const aquariumAnimals: Animal[] = [];

function createAnimal(
  type: string,
  name: string,
  yearOfBirth: number,
  continent: Continent,
  specialNeeds: string,
  enclosureId: EnclosureId
) {
  switch (type) {
    case "Lion":
      return new Lion(name, yearOfBirth, continent, specialNeeds, enclosureId);
      break;
    case "Elephant":
      return new Elephant(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Bear":
      return new Bear(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Monkey":
      return new Monkey(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Dolphin":
      return new Dolphin(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Lion":
      return new Lion(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Snake":
      return new Snake(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Turtle":
      return new Turtle(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Crocodile":
      return new Crocodile(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Lizard":
      return new Lizard(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Parrot":
      return new Parrot(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Eagle":
      return new Eagle(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Macaw":
      return new Macaw(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Fish":
      return new Fish(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Trout":
      return new Trout(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Shark":
      return new Shark(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Octopus":
      return new Octopus(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Squid":
      return new Squid(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Frog":
      return new Frog(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Alligator":
      return new Alligator(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Swan":
      return new Swan(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Duck":
      return new Duck(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Clownfish":
      return new Clownfish(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Tiger":
      return new Tiger(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Rhinoceros":
      return new Rhinoceros(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Cockatoo":
      return new Cockatoo(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Pufferfish":
      return new Pufferfish(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Panda":
      return new Panda(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Camel":
      return new Camel(name, yearOfBirth, continent, specialNeeds, enclosureId);
    case "Toucan":
      return new Toucan(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    case "Flamingo":
      return new Flamingo(
        name,
        yearOfBirth,
        continent,
        specialNeeds,
        enclosureId
      );
    default:
      break;
  }
}

function displayAnimalInEnclosure() {
  if (savannahEnclosure && savannahAnimals) {
    savannahEnclosure.innerHTML = "";
    savannahAnimals.forEach((animal: Animal, index) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.className = "Emoji tooltip";
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      const currentYear = new Date().getFullYear();
      const age = currentYear - animal.yearOfBirth;
      //* Tooltipp
      const tooltip = document.createElement("div");
      tooltip.className = "tooltiptext";
      tooltip.innerHTML = `
        Name: ${animal.name}<br>
       Age: ${age}<br>
        Origin: ${animal.continent}<br>
       Special Needs: ${animal.specialNeeds}
       `;

      emojiDiv.appendChild(emoji);
      emojiDiv.appendChild(tooltip);

      savannahEnclosure.appendChild(emojiDiv);
      //* delete by dblclick
      emojiDiv.addEventListener("dblclick", () => {
        savannahAnimals.splice(index, 1);
        displayAnimalInEnclosure();
        console.log("SavannahHabitat after delete: ", savannahAnimals);
      });
    });
  }

  if (jungleEnclosure && jungleAnimals) {
    jungleEnclosure.innerHTML = "";
    jungleAnimals.forEach((animal: Animal, index) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.className = "Emoji tooltip";
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      const currentYear = new Date().getFullYear();
      const age = currentYear - animal.yearOfBirth;
      //* Tooltipp
      const tooltip = document.createElement("div");
      tooltip.className = "tooltiptext";
      tooltip.innerHTML = `
        Name: ${animal.name}<br>
       Age: ${age}<br>
        Origin: ${animal.continent}<br>
       Special Needs: ${animal.specialNeeds}
       `;

      emojiDiv.appendChild(emoji);
      emojiDiv.appendChild(tooltip);

      jungleEnclosure.appendChild(emojiDiv);
      //* delete by dblclick
      emojiDiv.addEventListener("dblclick", () => {
        jungleAnimals.splice(index, 1);
        displayAnimalInEnclosure();
        console.log("JungleHabitat after delete: ", jungleAnimals);
      });
    });
  }

  if (reptileEnclosure && reptileHouseAnimals) {
    reptileEnclosure.innerHTML = "";
    reptileHouseAnimals.forEach((animal: Animal, index) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.className = "Emoji tooltip";
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      const currentYear = new Date().getFullYear();
      const age = currentYear - animal.yearOfBirth;
      //* Tooltipp
      const tooltip = document.createElement("div");
      tooltip.className = "tooltiptext";
      tooltip.innerHTML = `
        Name: ${animal.name}<br>
       Age: ${age}<br>
        Origin: ${animal.continent}<br>
       Special Needs: ${animal.specialNeeds}
       `;

      emojiDiv.appendChild(emoji);
      emojiDiv.appendChild(tooltip);

      reptileEnclosure.appendChild(emojiDiv);
      //* delete by dblclick
      emojiDiv.addEventListener("dblclick", () => {
        reptileHouseAnimals.splice(index, 1);
        displayAnimalInEnclosure();
        console.log("ReptileHabitat after delete: ", reptileHouseAnimals);
      });
    });
  }

  if (aquariumEnclosure && aquariumAnimals) {
    aquariumEnclosure.innerHTML = "";
    aquariumAnimals.forEach((animal: Animal, index) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.className = "Emoji tooltip";
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      const currentYear = new Date().getFullYear();
      const age = currentYear - animal.yearOfBirth;
      //* Tooltipp
      const tooltip = document.createElement("div");
      tooltip.className = "tooltiptext";
      tooltip.innerHTML = `
        Name: ${animal.name}<br>
       Age: ${age}<br>
        Origin: ${animal.continent}<br>
       Special Needs: ${animal.specialNeeds}
       `;

      emojiDiv.appendChild(emoji);
      emojiDiv.appendChild(tooltip);

      aquariumEnclosure.appendChild(emojiDiv);
      //* delete by dblclick
      emojiDiv.addEventListener("dblclick", () => {
        aquariumAnimals.splice(index, 1);
        displayAnimalInEnclosure();
        console.log("AquariumHabitat after delete: ", aquariumAnimals);
      });
    });
  }
}

createAnimalButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();

  const type = selectAnimal.value;
  const name = nameOfAnimalInput.value;
  const yearOfBirth = Number(birthYearInput.value);
  const continent = selectContinent.value;
  const specialNeeds = selectSpecialNeeds.value;
  const habitat = selectHabitat.value;

  const animal = createAnimal(
    type,
    name,
    yearOfBirth,
    Number(continent),
    specialNeeds,
    Number(habitat)
  );

  if (animal) {
    if (
      // !type ||
      !name ||
      !yearOfBirth ||
      !continent ||
      !specialNeeds ||
      !habitat
    ) {
      console.error("All Fields are required");
    } else {
      allZooAnimals.push(animal);
      console.log(allZooAnimals);
    }

    function chooseHabitat() {
      if (animal?.enclosureId === EnclosureId.SavannahHabitat) {
        savannahAnimals.push(animal);
        console.log("Savannah Habitat", savannahAnimals);
      }
      if (animal?.enclosureId === EnclosureId.JungleHabitat) {
        jungleAnimals.push(animal);
        console.log("Jungle Habitat", jungleAnimals);
      }
      if (animal?.enclosureId === EnclosureId.ReptileHouse) {
        reptileHouseAnimals.push(animal);
        console.log("Reptile Habitat", reptileHouseAnimals);
      }
      if (animal?.enclosureId === EnclosureId.AquaticHabitat) {
        aquariumAnimals.push(animal);
        console.log("aquarium Habitat", aquariumAnimals);
      }
    }

    chooseHabitat();
    displayAnimalInEnclosure();
  }
});
