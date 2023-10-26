
function createOrLoadCharacter() {
  // Check if there is saved game data in local storage
  const gameDataJSON = localStorage.getItem('savedGameData');
  
  if (gameDataJSON) {
    // Parse the JSON string to get the game data object
    const gameData = JSON.parse(gameDataJSON);

    // Extract character and player data from the game data
    const character = gameData.character;
    const playerData = gameData.playerData;

    return { character, playerData };
  } else {
    // Create a new character if no saved game data is found
    const newCharacter = new Character("NewCharacter", 1, 0, 100, 50, 100, 50);
    return { character: newCharacter, playerData: null };
  }
}

function saveGame(character, playerData) {
  // Create an object to hold the game data
  const gameData = {
    character,
    playerData,
  };

  // Convert the game data to a JSON string
  const gameDataJSON = JSON.stringify(gameData);

  // Store the JSON string in localStorage
  localStorage.setItem('savedGameData', gameDataJSON);
}

Character.prototype.incrementGold = function(amount) {
  this.gold += amount;
}

Character.prototype.takeDamage = function(damage) {
  this.currentHealth -= damage;
  if (this.currentHealth < 0) {
    this.currentHealth = 0;
  }
}

// Function to increment XP
Character.prototype.incrementXP = function(amount) {
  this.currentXP += amount;
  if (this.currentXP >= this.maxXP) {
    this.levelUp();
  }
}

// Function to level up the character
Character.prototype.levelUp = function() {
  this.level++;
  this.currentXP -= this.maxXP;
  this.maxXP = 100 + 1.05^this.level /* calculate new maxXP based on current level */;
  // You can also increase other stats when leveling up.
  this.skillPoint+=3;
}

// Function to increment gold
Character.prototype.incrementGold = function(amount) {
  this.gold += amount;
}

// Function to reduce health
Character.prototype.reduceHealth = function(damage) {
  this.currentHealth -= damage;
  if (this.currentHealth < 0) {
    this.currentHealth = 0;
  }
    if(this.currentHealth == 0){
        window.location.href = 'mainMenu.html';
    
}

// Function to increment mana
Character.prototype.incrementMana = function(amount) {
  this.currentMana += amount;
  if (this.currentMana > this.maxMana) {
    this.currentMana = this.maxMana;
  }
    if (this.currentMana < 0) {
        this.currentMana = 0;
  }
}



// Function to increment attack damage
Character.prototype.incrementAttackDamage = function() {
  this.attackDamage ++;
}

// Function to increment defense
Character.prototype.incrementDefense = function() {
  this.defense ++;
}

// Function to increment luck
Character.prototype.incrementLuck = function() {
  this.luck ++;
}

// Function to increment floors descended
Character.prototype.incrementFloorsDescended = function() {
  this.floorsDescended++;
}
