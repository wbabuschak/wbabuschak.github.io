const ENEMY_DEFS = {
    "Common Thief": {
        name: "Common Thief",
        maxHealth: 10,
        lootTable: commonThiefLootTable
    },
    "Mysterious Villain": {
        name: "Mysterious Villain",
        maxHealth: 16,
        lootTable: mysteriousVillainLootTable
    },
    "Dirty Goblin": {
        name: "Dirty Goblin",
        maxHealth: 7,
        lootTable: dirtyGoblinLootTable
    },
    "Spectral Fiend": {
        name: "Spectral Fiend",
        maxHealth: 21,
        lootTable: spectralFiendLootTable
    },
    "Spirit Eater": {
        name: "Spirit Eater",
        maxHealth: 29,
        lootTable: spiritEaterLootTable
    },
    "Ghastly Horror": {
        name: "Ghastly Horror",
        maxHealth: 35,
        lootTable: ghastlyHorrorLootTable
    },
    "Desert Wraith": {
        name: "Desert Wraith",
        maxHealth: 47,
        lootTable: desertWraithLootTable
    },
    "Bile Spitter": {
        name: "Bile Spitter",
        maxHealth: 41,
        lootTable: bileSpitterLootTable
    },
    "Desert Zealot": {
        name: "Desert Zealot",
        maxHealth: 61,
        lootTable: desertZealotLootTable
    },
    "Sandstone Golem": {
        name: "Sandstone Golem",
        maxHealth: 100,
        lootTable: sandstoneGolemLootTable
    },
    "Blazing Bovine": {
        name: "Blazing Bovine",
        maxHealth: 666,
        lootTable: blazingBovineLootTable
    },
    "Infernal Insect": {
        name: "Infernal Insect",
        maxHealth: 666,
        lootTable: infernalInsectLootTable
    },
    "Sinful Succubus": {
        name: "Sinful Succubus",
        maxHealth: 666,
        lootTable: sinfulSuccubusLootTable
    },
    "Fiery Fangtooth": {
        name: "Fiery Fangtooth",
        maxHealth: 666,
        lootTable: fieryFangtoothLootTable
    },
    "Dreadful Dino": {
        name: "Dreadful Dino",
        maxHealth: 666,
        lootTable: dreadfulDinoLootTable
    },
    "Vile Vulture": {
        name: "Vile Vulture",
        maxHealth: 666,
        lootTable: vileVultureLootTable
    }
};

function spawnEnemy(enemyName) {
    const template = ENEMY_DEFS[enemyName];
    if (!template) {
        console.error("Unknown enemy: ", enemyName);
        return null;
    }

    return new Entity(
        template.name,
        template.maxHealth,
        template.lootTable
    );
}