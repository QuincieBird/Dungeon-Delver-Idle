
function createOrLoadCharacter() {
  // Check if there is a saved character in local storage
  const savedCharacter = localStorage.getItem('savedCharacter');
  
  if (savedCharacter) {
    // Load the saved character
    return JSON.parse(savedCharacter);
  } else {
    // Create a new character
    const newCharacter = new Character("NewCharacter", 1, 0, 100, 50, 100, 50);
    return newCharacter;
  }
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
