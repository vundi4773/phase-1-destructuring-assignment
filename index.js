const farmAnimals = "cow horse sheep pig chicken";


const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// String: uses destructuring to declare five animal sounds
const { moo, neigh, baa, oink, cluck } = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// String: uses destructuring to declare the four traditional animal names
const { bessie, dolly, babe, little } = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

// String: uses destructuring to declare the three traditional animal colors
const { blackAndWhite, black, pink } = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

//  use destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// use destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, v] = ["red", "orange", "yellow", "green", "blue", "violet"];

// use destructuring to declare Indigo using indg
const [indg] = ["indigo"];

// use destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

//use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4, nested: { job: nestedJob, partner: nestedPartner } } = {
  song2: "Moving Right Along",
  song4: "I Hope That Something Better Comes Along",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};


// Strings


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
