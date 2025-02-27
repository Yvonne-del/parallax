//arrays and objects
const myArray = ["This", "array", "has", 5, "elements"];
//We can find out how many elements an Array contains by checking the Array's built-in length property:
console.log(myArray.length);

const winningNumbers = [32, 9, 14, 33, 48, 5];
function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}
logWinningNumbers(winningNumbers);


// //nesting arrays and objects together
// const englishMusicByCity = {
//     manchester: [
//       {
//         bandName: "The Smiths",
//         memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
//       },
//       {
//         bandName: "Joy Division",
//         memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
//       },
//     ],
//   };
//   englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
//   englishMusicByCity["manchester"][0]["memberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]
  
//   console.log(
//     `There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`
//   );