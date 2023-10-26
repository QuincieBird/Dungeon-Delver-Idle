// playerData Object
class PlayerData {
  constructor(playerName, floorsDescended, timePlayed, monstersKilled) {
    this.playerName = playerName;
    this.floorsDescended = floorsDescended;
    this.timePlayed = timePlayed;
    this.monstersKilled = monstersKilled;
  }

// character Object
class character = {
    constructor(){
        name
        level: 1,
        gold: 100,
        currentHealth: 100,
        maxHealth: 100,
        currentMana: 50,
        maxMana: 50,
        currentXP: 0,
        maxXP: 100,
        knownSkills: [], // An array to store skill objects
        heldItems: [], // An array to store item objects
        maxCarryCapacity: 100, // Max weight character can carry
        currentWeightHeld: 0, // Current weight held
        attackDamage: 10,
        autoAttackSpeed: 1, // Attacks per second
        dodgeChance: 5, // Percentage chance of dodging an attack
        defense: 10,
        floorsDescended: 0,
        characterName: "CharacterName",
        luck: 1, // A variable for character's luck
};

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

// skill Object (add skill-related properties here)

// item Object (add item-related properties here)

// settings Object (add game settings properties here)

// research Object (add research-related properties here)
