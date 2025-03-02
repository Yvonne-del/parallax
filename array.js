//arrays and objects
const myArray = ["This", "array", "has", 5, "elements"];
console.log(myArray[2]);
//We can find out how many elements an Array contains by checking the Array's built-in length property:
console.log(myArray.length);

const address = ["11 Broadway", "2nd Floor", "New York", "NY", "10004"];
//to change value in array
address[1] = "3rd Floor";

const winningNumbers = [32, 9, 14, 33, 48, 5];
function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}
logWinningNumbers(winningNumbers);


//nesting arrays and objects together
const englishMusicByCity = {
    manchester: [
      {
        bandName: "The Smiths",
        memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
      },
      {
        bandName: "Joy Division",
        memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
      },
    ],
  };
  englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
  englishMusicByCity["manchester"][0]["memberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]
  
  console.log(
    `There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`
  );

const egregiouslyNestedArray = [
  "How",
  ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
  "seems.",
];
console.log(egregiouslyNestedArray[0]);
//=> 'How'

console.log(egregiouslyNestedArray[1]);
//=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]

console.log(egregiouslyNestedArray[2]);
//=> 'seems.'
console.log(egregiouslyNestedArray[1][0]);
//=> 'deep'

console.log(egregiouslyNestedArray[1][1]);
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

console.log(egregiouslyNestedArray[1][2],);
console.log(egregiouslyNestedArray[0], egregiouslyNestedArray[1][0], egregiouslyNestedArray[1][1][0], egregiouslyNestedArray[1][1][1][0], egregiouslyNestedArray[1][1][1][1][0], egregiouslyNestedArray[1][1][1][1][1][0]);

const board = [
  ["X", "O", "Y"],
  ["Y", "X", "O"],
  ["X", "Y", "O"],
];
console.log(board[0][0]);
// => "X"

console.log(board[0][2]);
// => "Y"

console.log(board[2][2]);
// => "O"



//adding elements into an array
const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]
const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Chicago");
cities;
// => ["Boston", "Chicago", "New York", "San Francisco"]



//copying elements of a array to a new array also known as SPREAD
const coolCities = ["New York", "San Francisco"];
const copyOfCoolCities = [...coolCities];
copyOfCoolCities;
//THIS prevents changes made in copyCoolCities to affect coolCities array.

const cooolCities = ["New York", "San Francisco"];
const allCities = ["Los Angeles", ...cooolCities];
cooolCities;
// => ["New York", "San Francisco"]
allCities;
// => ["Los Angeles", "New York", "San Francisco"]

//arranging does matter in doing this too
const coolCats = ["Hobbes", "Felix", "Tom"];
const allCats = [...coolCats, "Garfield"];
coolCats;
// => ["Hobbes", "Felix", "Tom"]
allCats;
// => ["Hobbes", "Felix", "Tom", "Garfield"]


//removing elements from an array using pop and unshift
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.pop();
// => "Sun"
days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.shift();
// => "Mon"
day;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//slicing
const cats = ["Milo", "Otis", "Garfield"];
function removeLastCat() {
  // Create a copy of the array and remove the last element
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Use slice to create a new array starting from index 1 (skipping the first cat)
  return cats.slice(1);
};