const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
//   console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58]);
// console.log(game);

game.difficulty = 'easy';
// console.log(game);

game.party.push(pokemon[0]);
// console.log(game);

game.party.push(pokemon[3], pokemon[6], pokemon[24]);
// console.log(game);

game.gyms.forEach(gyms => {
    if (gyms.difficulty < 3) {
        gyms.completed = true;
    }
});
// console.log(game);

game.party.splice(0, 4, pokemon[1], pokemon[4], pokemon[7], pokemon[25]);
// console.log(game);

console.log('Party:');

game.party.forEach(party => {
    console.log(`- ${party.name}`);
});
// console.log(game);

console.log('Starters:');

pokemon.forEach(pokemon => {
  if (pokemon.starter === true) {
    console.log(`- ${pokemon.name}`);
  }
});
// console.log(game);

// function catchPokemon(pokemonObj) {
//   game.party.push(pokemonObj);
// }
// game.catchPokemon = catchPokemon;
// game.catchPokemon(pokemon[24]);

function catchPokemon(pokemonObj) {
  game.party.push(pokemonObj);
  game.items[1].quantity -= 1;
  console.log(game.items);
}
game.catchPokemon = catchPokemon;
game.catchPokemon(pokemon[24]);

game.gyms.forEach(gyms => {
  if (gyms.difficulty < 6) {
    gyms.completed = true;
  }
});
// console.log(game);

game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };
  
  game.gyms.forEach(gyms => {
    if (gyms.completed = true) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  })
  console.log(gymTally);
};

game.partyCount = `party count: ${game.party.length}`;
console.log(game.partyCount);

game.gyms.forEach(gyms => {
  if (gyms.difficulty < 8) {
    gyms.completed = true;
  }
});

console.log(game);