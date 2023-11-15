const fs = require("fs");

// load json files
const data = JSON.parse(fs.readFileSync("data.json"));

// save data
const saveData = (data, file) => {
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(file, jsonData, finished);
  console.log("saved");
};

// Objects
const pet1 = {
  name: "popcorn",
  animal: "dog",
  breed: "malthese",
  color: "white",
  owner: "Dan",
};

const pet2 = {
  name: "butter",
  animal: "cat",
  breed: "sphinx",
  color: "golden",
  owner: "Joe",
};

const person1 = {
  name: "Dan",
  age: 29,
};

const person2 = {
  name: "Joe",
  age: 29,
};

const saveUser = (person) => {
  const newPerson = {
    name: person.name,
    age: person.age,
    pets: {},
  };

  data[person.name] = newPerson;
  saveData(data, "data.json");
};

// saveUser(person1);
// saveUser(person2);

const savePet = (pet) => {
  const newPet = {
    name: pet.name,
    animal: pet.animal,
    breed: pet.breed,
    color: pet.color,
  };

  data[pet.owner].pets[pet.name] = newPet;
  saveData(data, "data.json");
};

// savePet(pet1);
// savePet(pet2);
