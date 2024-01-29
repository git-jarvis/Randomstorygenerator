
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// Creating the variable that contains the story string
var storyText =
  "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Create three arrays
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = [
  "spontaneously combusted",
  "rapidly sublimated",
  "evaporated instantly",
];

// FUNCTIONS
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function result() {
  // Create a new variable called newStory and set it to the value of storyText
  var newStory = storyText;

  // Use the randomValueFromArray() function to generate a value for each of three new variables
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  // Replace the three placeholders in the newStory string
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // replacing field name if value specified
  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  // conversions
  if (document.getElementById("metric").checked) {
    var weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
    newStory = newStory.replace("300 pounds", weight + " kilograms");

    var temp = Math.round(((94 - 32) * 5) / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace("94 farenheit", temp + " celsius");
  }

  // assigning the new story value to the textContent property of story variable
  story.textContent = newStory;

  // making the paragraph visible
  story.style.visibility = "visible";
}

// event listener for the click event
randomize.addEventListener("click", result);
