//basic structure of an object
const obj = {
    key1: "value1",
    key2: "value2",
  };
 
//you can also nest an object in an object
const objects = {
    key1: "value1",
    key2: {
      innerKey1: "innerValue1",
      innerKey2: "innerValue2",
    },
  };
  const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };

  const meals = {
    breakfast: "Avocado toast",
    breakfast: "Oatmeal",
    breakfast: "Scrambled eggs",
  };
  console.log(meals); //=>But keys must be unique. If the same key is used for multiple properties, only the final value will be retained. The rest will be overwritten 

  //dot notations used to aceess an element in an object
  console.log(address.street);
  console.log(address.street.line1);

  //using bracket notation in nonstandard keys coz using dot notation is hard
  const wildKeys = {
    "Cash rules everything around me.": "Wu",
    "C.R.E.A.M.": "Tang",
    "Get the money.": "For",
    "$ $ bill, y'all!": "Ever",
  };
  console.log(wildKeys["C.R.E.A.M."]); //=> "Tang"

  const mealPlan = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
  };
  let mealName = "lunch";
  console.log(mealPlan[mealName]);
  //=> "Caesar salad"

  //We can also use bracket notation to dynamically set properties during the creation of a new Object
  const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meal = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};
meal;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }
//to call the parent object values only without their elements, we use Object.key()
const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  console.log(Object.keys(wednesdayMenu));
  //=> ["cheesePlate", "fries", "salad"]
  console.log(Object.values(wednesdayMenu));//this returns the elements without the key values
  
  const circle = {}; // Create `circle` and set it to an empty Object


//asiigning values using dot or bracket notations
circle;
//=> {}
circle.radius = 5; // Create the key inside `circle` and set its value to 5
circle;
//=> { radius: 5 }

const circle = {};
circle.radius = 5;
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793
circle["area"] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483
circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }

//Note that the process above gives us an alternative to typing out our Object using literal syntax: we can initialize an empty object and then use dot notation or bracket notation to create the properties programmatically. This approach is less error-prone than using literal syntax since JavaScript creates the correct Object syntax for us

//modifying values in an object
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };
  
  mondayMenu.fries = "Sweet potato";

  //modifying object through a function using dot notation(destructive)
  function destructivelyUpdateObject(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
  //modifying using bracket and function...this is destructive
  const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Sweet potato",
    salad: "Cobb",
  };
  const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
  tuesdayMenu;
  //=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }
  tuesdayMenu.salad;
  //=> "Caesar"

  //to modify non destructively..we use spread operators
  function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
    // Code to return new, updated menu object goes here
  }

//example of non destructive modifying
function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  const sundayMenu = nondestructivelyUpdateObject(
    tuesdayMenu,
    "fries",
    "Shoestring"
  );
  tuesdayMenu.fries;
  //=> "Sweet potato"
  sundayMenu.fries;
  //=> "Shoestring"

  //DELETING ELEMENTS FROM AN OBJECT
  const weNesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  delete wenesdayMenu.salad;
  //=> true
  wenesdayMenu;
  //=> { cheesePlate: { soft: "Brie", semiSoft: "Fontina", hard: "Provolone" }, fries: "Sweet potato" }