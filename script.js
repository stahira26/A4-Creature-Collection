// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.

// ==========================================

// 1. SELECT HTML ELEMENTS

// Pseudocode:

// Find the collection, theme selector,

// layout selector, and status message.

// ==========================================

const collection = document.querySelector("#collection");

const themeSelect = document.querySelector("#theme");

const layoutSelect = document.querySelector("#layout");

const statusMessage = document.querySelector("#status");

const STORAGE_KEY = "mtm6302-a4-creature-collection-preferences";


// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.



// ==========================================

// 2. GENERATE THE CREATURE COLLECTION

// Pseudocode:

// Loop through the creature array.

// Create an image, heading, and description.

// Add each creature to the collection.

// ==========================================

function generateCreatures() {

  // Clear the collection before generating entries.

  collection.innerHTML = "";

  // Loop through every creature in the array.

  $creatures.forEach(function(creature) {

    // Create the list item.

    const creatureItem = document.createElement("li");

    creatureItem.classList.add("creature");

    // Create the creature image.

    const creatureImage = document.createElement("img");

    creatureImage.src = creature.image;

    creatureImage.alt = creature.alt;

    // Create the information container.

    const creatureInfo = document.createElement("div");

    creatureInfo.classList.add("creature-info");

    // Create the creature name.

    const creatureName = document.createElement("h3");

    creatureName.textContent = creature.name;

    // Create the creature description.

    const creatureDescription = document.createElement("p");

    creatureDescription.classList.add("creature-description");

    creatureDescription.textContent = creature.description;

    // Add the name and description to the information container.

    creatureInfo.append(creatureName, creatureDescription);

    // Add the image and information to the creature item.

    creatureItem.append(creatureImage, creatureInfo);

    // Add the completed creature to the collection.

    collection.appendChild(creatureItem);

  });

}
// 3. Listen for changes to each preference control and update the appearance.

// ==========================================

// 3. CHANGE THE HABITAT THEME

// Pseudocode:

// Read the selected theme.

// Update the body's data-theme attribute.

// The CSS automatically changes the appearance.

// ==========================================

function changeTheme(theme) {

  document.body.dataset.theme = theme;

}
// 4. Save both selected preferences to Local Storage.

// ==========================================

// 4. CHANGE THE COLLECTION LAYOUT

// Pseudocode:

// Read the selected layout.

// Update the collection's data-layout attribute.

// The CSS automatically changes the layout.

// ==========================================

function changeLayout(layout) {

  collection.dataset.layout = layout;

}
// 5. Check for saved data on load and restore the controls and appearance.

// ==========================================

// 5. SAVE PREFERENCES TO LOCAL STORAGE

// Pseudocode:

// Get the selected theme and layout.

// Store both together in one object.

// Convert the object into JSON.

// Save it using the assignment storage key.

// ==========================================

function savePreferences() {

  const preferences = {

    theme: themeSelect.value,

    layout: layoutSelect.value

  };

  // Convert the preferences object into JSON.

  const preferencesJSON = JSON.stringify(preferences);

  // Save the preferences in Local Storage.

  localStorage.setItem(STORAGE_KEY, preferencesJSON);

  // Display a confirmation message.

  statusMessage.textContent = "Your preferences have been saved!";

}

// ==========================================

// 6. RESTORE SAVED PREFERENCES

// Pseudocode:

// Check whether saved preferences exist.

// If they exist, convert JSON into an object.

// Restore both controls and their appearance.

// If they do not exist, keep Forest and Cards.

// ==========================================

function restorePreferences() {

  // Check Local Storage for saved preferences.

  const savedPreferences = localStorage.getItem(STORAGE_KEY);

  if (savedPreferences !== null) {

    // Convert the saved JSON back into an object.

    const preferences = JSON.parse(savedPreferences);

    // Restore the theme selection.

    themeSelect.value = preferences.theme;

    // Restore the layout selection.

    layoutSelect.value = preferences.layout;

    // Update the visible appearance.

    changeTheme(preferences.theme);

    changeLayout(preferences.layout);

    // Display a restoration message.

    statusMessage.textContent = "Welcome back! Your saved preferences have been restored.";

  } else {

    // Keep the original Forest and Cards appearance.

    changeTheme("forest");

    changeLayout("cards");

    // Display the initial message.

    statusMessage.textContent = "Choose your preferences to make this collection yours.";

  }

}

// ==========================================

// 7. LISTEN FOR THEME CHANGES

// Pseudocode:

// Listen for changes to the theme selector.

// Update the theme immediately.

// Save both preferences.

// ==========================================

themeSelect.addEventListener("change", function() {

  changeTheme(themeSelect.value);

  savePreferences();

});

// ==========================================

// 8. LISTEN FOR LAYOUT CHANGES

// Pseudocode:

// Listen for changes to the layout selector.

// Update the layout immediately.

// Save both preferences.

// ==========================================

layoutSelect.addEventListener("change", function() {

  changeLayout(layoutSelect.value);

  savePreferences();

});


// Add short pseudocode comments before writing each feature.

// ==========================================

// 9. INITIALIZE THE COLLECTION

// Pseudocode:

// Generate all creature entries.

// Restore saved preferences if available.

// ==========================================

generateCreatures();

restorePreferences();