import Animal from "./Animal";
import Continent from "./Continent";
import Enclosure from "./Enclosure";
import EnclosureId from "./EnclosureId";

class Lion extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continent: Continent,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦁",
      "Lion",
      name,
      yearOfBirth,
      continent,
      specialNeeds,
      enclosureId
    );
  }
}

export default Lion;
