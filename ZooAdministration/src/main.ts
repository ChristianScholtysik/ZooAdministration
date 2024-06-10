import Animal from "./Animal";
import EnclosureId from "./EnclosureId";
import Continent from "./Continent";
import Lion from "./animalClasses";

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
        savannahAnimals.push(animal);
        console.log("Reptile Habitat", reptileHouseAnimals);
      }
      if (animal?.enclosureId === EnclosureId.AquaticHabitat) {
        savannahAnimals.push(animal);
        console.log("aquarium Habitat", aquariumAnimals);
      }
    }

    chooseHabitat();
    displayAnimalInEnclosure();
  }
});
