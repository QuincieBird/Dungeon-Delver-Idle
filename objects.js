// playerData Object
class PlayerData {
  constructor(playerName, floorsDescended, timePlayed, monstersKilled) {
    this.playerName = playerName;
    this.floorsDescended = floorsDescended;
    this.timePlayed = timePlayed;
    this.monstersKilled = monstersKilled;
  }

// character Object
class Character {
  constructor(name, level, gold, maxHealth, maxMana, maxXP, maxCarryCapacity) {
    this.name = name;
    this.level = level;
    this.gold = gold;
    this.currentHealth = maxHealth;
    this.maxHealth = maxHealth;
    this.currentMana = maxMana;
    this.maxMana = maxMana;
    this.currentXP = 0;
    this.maxXP = maxXP; // Corrected from maxHP
    this.knownSkills = []; // An array to store skill objects
    this.heldItems = []; // An array to store item objects
    this.maxCarryCapacity = maxCarryCapacity; // Max weight character can carry
    this.currentWeightHeld = 0; // Current weight held
    this.attackDamage = 10;
    this.autoAttackSpeed = 1; // Attacks per second
    this.dodgeChance = 5; // Percentage chance of dodging an attack
    this.defense = 10;
    this.floorsDescended = 0;
    this.luck = 1; // A variable for character's luck
    this.companions = []; // Array to hold companion objects
    this.skillPoints = 0;
  }
}

// monster Object
function Monster(floor) {
  this.maxHealth = 50 * floor; // Adjust max health based on floor level
  this.currentHealth = this.maxHealth;
  this.maxMana = 20 * floor; // Adjust max mana based on floor level
  this.currentMana = this.maxMana;
  this.level = floor;
  this.attackDamage = 5 * floor; // Adjust attack damage based on floor level
  this.attackHitChance = 90; // Percentage chance of hitting the character
  this.attackSpeed = 1; // Attacks per second
  this.monsterName = "MonsterName"; // You can set a name or generate one based on the floor
  this.knownSkill = null; // A skill object that the monster can use
}
  

// companion Object (add companion-related properties here)
function Companion(name, hp, attackDamage) {
  this.name = name;
  this.hp = hp;
  this.attackDamage = attackDamage;
}
  
// skill Object (add skill-related properties here)

// item Object (add item-related properties here)

// settings Object (add game settings properties here)

// research Object (add research-related properties here)
