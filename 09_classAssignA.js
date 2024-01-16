class Vehicle {
  name;
  brand;
  color;
  axels;
  manufactured;
  constructor(name, brand, color, axels, manufactured) {
    (this.name = name),
      (this.brand = brand),
      (this.color = color),
      (this.axels = axels),
      (this.manufactured = manufactured);
  }

  getDetails() {
    console.log(
      `${this.name} is first time in ${this.color} color manufactured by ${this.manufactured} from popular brand ${this.brand}`
    );
  }
}

const maruti = new Vehicle(
  "Maruti suzuki 26",
  "Maruti",
  "Black",
  4,
  "Suzuki Motor Corporation"
);

const skoda = new Vehicle(
  "Skoda 78",
  "Skoda",
  "white",
  2,
  "the Volkswagen Group"
);

const mercedes = new Vehicle(
  "Mercedes 20",
  "Mercedes",
  "Grey",
  6,
  "Mercedes-Benz AG"
);

const tata = new Vehicle(
  "Tata nano",
  "Tata motors",
  "yellow",
  4,
  "Tata Motors Limited"
);

const bmw = new Vehicle("BMW", "BMW", "Slaty", 2, "BMW AG");

console.log("-------------------- step 01 --------------------");
console.log(" ");

const arrayOfVehicles = [maruti, mercedes, skoda, tata, bmw];

for (const vehicles of arrayOfVehicles) {
  console.log(
    `${vehicles.name} is first time in ${vehicles.color} color manufactured by ${vehicles.manufactured} from popular brand ${vehicles.brand}`
  );
  console.log("");
}

console.log("-------------------- step 02 --------------------");
console.log(" ");

class College {
  name;
  foundedIn;
  location;
  building;

  constructor(name, foundedIn, location, building) {
    this.name = name;
    (this.foundedIn = foundedIn),
      (this.location = location),
      (this.building = building);
  }

  display() {
    console.log(
      `College name is ${this.name} founded in ${this.foundedIn} located at ${this.location} and has ${this.building} buildings `
    );
    console.log(" ");
  }
}

const madhavi = new College("E.B.Madhavi", 1990, "Dombivli", 4);
const birla = new College("Birla", 2000, "Kalyan", 6);
const pendarkar = new College("K.V.Pendarkar", 1980, "Thakurli", 2);
const model = new College("Model", 2006, "ulhasnagar", 2);

madhavi.display();
birla.display();
pendarkar.display();
model.display();

console.log("-------------------- step 03 --------------------");
console.log(" ");

function traverseObject(obj) {
  for (const key in obj) {
    console.log(`${key} ==> ${obj[key]}`);
  }
}

traverseObject(madhavi);
console.log(" ");
traverseObject(birla);
console.log(" ");
traverseObject(pendarkar);
console.log(" ");
traverseObject(model);
console.log(" ");
