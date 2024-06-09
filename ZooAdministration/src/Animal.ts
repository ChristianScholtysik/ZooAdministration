import EnclosureId from "./EnclosureId";
import Continent from "./Continent";

class Animal {
  emoji: string;
  type: string;
  name: string;
  yearOfBirth: number;
  continent: Continent;
  specialNeeds: string;
  enclosureId: EnclosureId;

  constructor(
    emoji: string,
    type: string,
    name: string,
    yearOfBirth: number,
    continent: Continent,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    this.emoji = emoji;
    this.name = name;
    this.type = type;
    this.yearOfBirth = yearOfBirth;
    this.continent = continent;
    this.specialNeeds = specialNeeds;
    this.enclosureId = enclosureId;
  }
}
export default Animal;
