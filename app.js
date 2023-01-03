const text = {
  intro: [
    "This home breathes beauty.",
    "Enjoy breathtaking scenery at this home.",
    "This home is a show stopper.",
    "It's a wonderful opportunity to own this home.",
    "A fabulous home presented for sale in a desirable residential location.",
    "This home is refined elegance from start to finish.",
    "This home is truly charming in all respects!",
    "Every aspect of this home speaks beauty.",
    "This well-maintained home is located within a wonderful community.",
    "You must see this adorable home!",
    "It's a wonderful home inside a dependable neighborhood.",
    "An impeccable and speciously home located in a great subdivision!",
    "Come check out this gracefully home residing in the perfect location!",
    "This decorative home is waiting for you!",
    "Location! Location! This home is in an excellent location.",
    "This is an incredible home with so much to offer.",
  ],
  main: [
    "You will fall in love with the features offered:",
    "There are so many features to enjoy:",
    "Beauty awaits you throughout this home:",
    "Find many wonderful features on the main floor:",
    "You will find many wonderful features in this home:",
    "There are so many notable details of this home:",
  ],
  second: [
    "The second level features:",
    "At the secondary level, you will find:",
    "Explore the upstairs and you will discover:",
    "There is so much more:",
    "Going even further:",
    "Further specification of the second floor:",
  ],
  third: [
    "The third level has a lot to offer:",
    "At the third level, you will find:",
    "Explore further and you will discover:",
    "Additionally, on the third floor:",
    "Find so much more on the third level:",
    "Further specification of the third floor:",
  ],
  terrace: [
    "It is complete with a terrace level which offers:",
    "This home even offers a terrace level which includes:",
    "The terrace level is impressive with:",
    "At the terrace level, you will find:",
    "Furthermore, the terrace level provides:",
  ],
  garage: [
    "The garage is very spacious and offers:",
    "Step into the garage and find:",
    "Additionally, within the garage you will find:",
    "Step foot into the attached garage which features:",
    "Enjoy the convenient built-in garage which provides:",
  ],
  landscape: [
    "The landscape is very enjoyable including:",
    "This home overlooks lush landscaping:",
    "Explore the well-maintained perimeter and find:",
    "A beautifully-kept yard surrounds this home:",
    "Walk outside and enjoy the details of the landscape:",
    "Enjoy relaxing evenings outdoors accompanied by:",
  ],
  location: [
    "Residing in the perfect location close-by:",
    "This home is in the perfect location near it all:",
    "You will appreciate being minutes away from:",
    "The location is remarkable. You will find entertainment near-at-hand:",
    "This home resides within a wonderful community:",
    "This home has so many locational benefits:",
    "Community benefits are in close proximity to this home:",
    "Enjoy the great perks of being so close to:",
  ],
};

const form = document.querySelector("form");
const generateBtn = document.querySelector(".generate-btn");
const modal = document.querySelector(".modal");
const description = document.querySelector(".description");
const inputs = document.querySelectorAll("textarea");
const standard = document.getElementById("standard");
const luxury = document.getElementById("luxury");
const closeBtn = document.querySelector(".close-btn");
const randomBtn = document.querySelector(".random-btn");

const mainFeatures = document.getElementById("main");
const secondFeatures = document.getElementById("second");
const thirdFeatures = document.getElementById("third");
const terraceFeatures = document.getElementById("terrace");
const garageFeatures = document.getElementById("garage");
const landscapeFeatures = document.getElementById("landscape");
const locationFeatures = document.getElementById("location");

let userEnteredValue = false;
let tempText = [];
let resultText;

// ****** EVENT LISTENERS ******

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

generateBtn.addEventListener("click", () => {
  checkIfUserEnteredValue();
  if (userEnteredValue) {
    displayText();
  } else {
    generateBtn.classList.add("warning");
    generateBtn.textContent = "Enter a value";
    setTimeout(() => {
      generateBtn.classList.remove("warning");
      generateBtn.textContent = "Generate listing";
    }, 1000);
  }
});

randomBtn.addEventListener("click", () => {
  tempText = [];
  displayText();
});

closeBtn.addEventListener("click", reset);

// ****** FUNCTIONS ******

function checkIfUserEnteredValue() {
  inputs.forEach((input) => {
    if (input.value) {
      userEnteredValue = true;
    }
  });
}

function displayText() {
  getRandomText();
  replaceTags();
  description.innerHTML = `<ul>${resultText}</ul>`;
  modal.style.visibility = "visible";
}

function getRandomText() {
  const categories = Object.keys(text);
  categories.forEach((category) => {
    const randomNum = Math.floor(Math.random() * text[category].length);
    const randomText = text[category][randomNum];
    const tag = `${category.toUpperCase()}`;
    tempText.push(randomText, tag);
  });
  removeTextIfNoInput();
}

function removeTextIfNoInput() {
  inputs.forEach((input) => {
    if (!input.value) {
      let indexOfInputID = tempText.indexOf(input.id.toUpperCase());
      tempText.splice(indexOfInputID - 1, 2);
    }
  });
}

function replaceTags() {
  resultText = tempText.join(" ");
  resultText = resultText.replace("INTRO", format(""));
  resultText = resultText.replace("MAIN", format(mainFeatures.value));
  resultText = resultText.replace("SECOND", format(secondFeatures.value));
  resultText = resultText.replace("THIRD", format(thirdFeatures.value));
  resultText = resultText.replace("TERRACE", format(terraceFeatures.value));
  resultText = resultText.replace("GARAGE", format(garageFeatures.value));
  resultText = resultText.replace("LANDSCAPE", format(landscapeFeatures.value));
  resultText = resultText.replace("LOCATION", format(locationFeatures.value));
  // standard/luxury replacement
  if (standard.checked) {
    resultText = resultText.replace("home", "delightful home");
  } else if (luxury.checked) {
    resultText = resultText.replace("home", "luxurious home");
  }
}

function format(value) {
  return !value ? "" : `<li><span class="underline">${value}.</span></li>`;
}

function reset() {
  modal.style.visibility = "hidden";
  tempText = [];
  resultText = "";
  description.innerHTML = "";
  userEnteredValue = false;
}
