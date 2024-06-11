import Continent from "./Continent";
import EnclosureId from "./EnclosureId";
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

export function createAnimal(
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
