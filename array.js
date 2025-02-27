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