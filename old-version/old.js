const mainLevel = document.getElementById("mainlevel");
const secondLevel = document.getElementById("secondlevel");
const thirdLevel = document.getElementById("thirdlevel");
const garage = document.getElementById("garage");
const landscape = document.getElementById("landscape");
const locationz = document.getElementById("locationz");
const terraceLevel = document.getElementById("terracelevel");
const randomize = document.querySelector(".randomize");
const description = document.querySelector(".description");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let descriptionText =
  ":insertintro: :insertmain: MAIN. :insertsecond: SECOND. :insertthird: THIRD. :insertterrace: TERRACE. :insertgarage: GARAGE. :insertlandscape: LANDSCAPE. :insertlocationz: LOCATION.";
// Randomize home intro statement
let insertIntro = [
  "This home breathes beauty.",
  "Enjoy breathtaking scenery at this home.",
  "This home is a show stopper.",
  "It's a wonderful opportunity to own this home.",
  "A fabulously home presented for sale in a desirable residential location.",
  "This home is refined elegance from start to finish.",
  "This home is truly charming in all respects!",
  "Every aspect of this home speaks beauty.",
  "This well-maintained, home is located within a wonderful community",
  "You must see this adorable and home!",
  "A wonderfully home within an established neighborhood",
  "An impeccable and speciously home located in a great subdivision!",
  "Come check out this gracefully home residing in the perfect location!",
  "This decorative and home located in City, GA is waiting for you!",
  "Location! Location! This home is in an excellent location.",
  "An icredibly home with so much to offer."
];
// Randomize main floor intro
let insertMain = [
  "You will fall in love with the features offered:",
  "There are so many feautures to enjoy:",
  "Beauty awaits you throughout this home:",
  "Find many wonderful features on the main floor:",
  "You will find many wonderful features in this home:",
  "There are so many notable details of this home:"
];
// Randomize second floor intro
let insertSecond = [
  "The second level features:",
  "At the secondary level, you will find:",
  "Explore the upstairs and you will discover:",
  "There is so much more:",
  "Going even further:",
  "Further specification of the second floor:"
];
// Randomize third floor intro
let insertThird = [
  "The third level has a lot to offer:",
  "At the third level, you will find:",
  "Explore further and you will discover:",
  "Additionally on the third floor:",
  "Find so much more on the third level:",
  "Further specification of the third floor:"
];
// Randomize terrace level intro
let insertTerrace = [
  "It is complete with a terrace level which offers:",
  "This home even offers a terrace level which includes:",
  "The terrace level is impressive with:",
  "At the terrace level, you will find:",
  "Furthermore, the terrace level provides:"
];
// Randomize garage intro
let insertGarage = [
  "The garage is very spacious and offers:",
  "Step into the garage and find:",
  "Additionally, within the garage you will find:",
  "Step foot into the attached garage which features:",
  "Enjoy the convenient built-in garage which provides:"
];
// Randomize landscape intro
let insertLandscape = [
  "The landscape is very enjoyable including:",
  "This home overlooks lush landscaping:",
  "Explore the well-maintained perimeter and find:",
  "A beautifully-kept yard surrounds this home:",
  "Walk outside and enjoy the details of the landscape:",
  "Enjoy relaxing evenings outdoors accompanied by:"
];
// Randomize location intro
let insertLocationz = [
  "Residing in the perfect location close-by:",
  "This home is in the perfect location near it all:",
  "You will appreciate being minutes away from:",
  "The location is remarkable. You will find entertainment near-at-hand:",
  "This home resides within a wonderful community:",
  "This home has so many locational benefits:",
  "Community benefits are in close proximity to this home:",
  "Enjoy the great perks of being so close to:"
];

randomize.addEventListener("click", result);

function result() {
  let newDescription = descriptionText;

  let introItem = randomValueFromArray(insertIntro);
  let mainItem = randomValueFromArray(insertMain);
  let secondItem = randomValueFromArray(insertSecond);
  let thirdItem = randomValueFromArray(insertThird);
  let terraceItem = randomValueFromArray(insertTerrace);
  let garageItem = randomValueFromArray(insertGarage);
  let landscapeItem = randomValueFromArray(insertLandscape);
  let locationzItem = randomValueFromArray(insertLocationz);

  newDescription = newDescription.replace(":insertintro:", introItem);
  newDescription = newDescription.replace(":insertmain:", mainItem);
  newDescription = newDescription.replace(":insertsecond:", secondItem);
  newDescription = newDescription.replace(":insertthird:", thirdItem);
  newDescription = newDescription.replace(":insertterrace:", terraceItem);
  newDescription = newDescription.replace(":insertgarage:", garageItem);
  newDescription = newDescription.replace(":insertlandscape:", landscapeItem);
  newDescription = newDescription.replace(":insertlocationz:", locationzItem);

  if (mainLevel.value !== "") {
    const name = mainLevel.value;
    newDescription = newDescription.replace("MAIN", name);
  }
  if (secondLevel.value !== "") {
    const name = secondLevel.value;
    newDescription = newDescription.replace("SECOND", name);
  }
  if (thirdLevel.value !== "") {
    const name = thirdLevel.value;
    newDescription = newDescription.replace("THIRD", name);
  }
  if (terraceLevel.value !== "") {
    const name = terraceLevel.value;
    newDescription = newDescription.replace("TERRACE", name);
  }
  if (garage.value !== "") {
    const name = garage.value;
    newDescription = newDescription.replace("GARAGE", name);
  }
  if (landscape.value !== "") {
    const name = landscape.value;
    newDescription = newDescription.replace("LANDSCAPE", name);
  }
  if (locationz.value !== "") {
    const name = locationz.value;
    newDescription = newDescription.replace("LOCATION", name);
  }

  // Home status radio buttons
  if (document.getElementById("standard").checked) {
    newDescription = newDescription.replace("home", "delightful home");
  }
  if (document.getElementById("luxury").checked) {
    newDescription = newDescription.replace("home", "luxurious home");
  }

  description.textContent = newDescription;
  description.style.visibility = "visible";
}
