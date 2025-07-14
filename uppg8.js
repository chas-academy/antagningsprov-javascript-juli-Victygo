

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
// Skapa en array med fem person objekt
let persons = [
  { name: "Anna", age: 25 },
  { name: "Erik", age: 35 },
  { name: "Lisa", age: 40 },
  { name: "Oskar", age: 28 },
  { name: "Maria", age: 50 }
];

// Skapa en funktion som tar in en array som argument
function printOlderThan30(array) {
  for (let person of array) {
    if (person.age > 30) {
      console.log(person.name);
    }
  }
}

// Anropa funktionen och skicka med arrayen som argument
 return printOlderThan30(persons);

}

module.exports = { uppg8 };