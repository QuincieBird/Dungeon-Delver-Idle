// playerData Object
const playerData = {
    playerName: "PlayerName",
    timePlayed: 0, // Measured in seconds
    monstersKilled: 0,
    floorsDescended: 0,
};

// character Object
const character = {
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
const monster = {
    maxHealth: 50,
    currentHealth: 50,
    maxMana: 20,
    currentMana: 20,
    level: 1,
    attackDamage: 5,
    attackHitChance: 90, // Percentage chance of hitting the character
    attackSpeed: 1, // Attacks per second
    monsterName: "MonsterName",
    knownSkill: null, // A skill object that the monster can use
};

// companion Object (add companion-related properties here)

// skill Object (add skill-related properties here)

// item Object (add item-related properties here)

// settings Object (add game settings properties here)

// research Object (add research-related properties here)
