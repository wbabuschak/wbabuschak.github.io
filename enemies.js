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
    },
    "Iceologer": {
        name: "Iceologer",
        maxHealth: 1090,
        lootTable: iceologerLootTable
    },
    "Spooky Revenant": {
        name: "Spooky Revenant",
        maxHealth: 744,
        lootTable: spookyRevenantLootTable
    },
    "Ice Bear": {
        name: "Ice Bear",
        maxHealth: 960,
        lootTable: iceBearLootTable
    },
    "Animated Weapon": {
        name: "Animated Weapon",
        maxHealth: 541,
        lootTable: animatedWeaponLootTable
    },
    "Foul Necromancer": {
        name: "Foul Necromancer",
        maxHealth: 1377,
        lootTable: foulNecromancerLootTable
    },
    "Juvenile Green Drake": {
        name: "Juvenile Green Drake",
        maxHealth: 910,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Black Drake": {
        name: "Juvenile Black Drake",
        maxHealth: 930,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Blue Drake": {
        name: "Juvenile Blue Drake",
        maxHealth: 950,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Red Drake": {
        name: "Juvenile Red Drake",
        maxHealth: 970,
        lootTable: juvenileDrakeLootTable
    },
    "Adolescent Green Drake": {
        name: "Adolescent Green Drake",
        maxHealth: 1130,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Black Drake": {
        name: "Adolescent Black Drake",
        maxHealth: 1160,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Blue Drake": {
        name: "Adolescent Blue Drake",
        maxHealth: 1190,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Red Drake": {
        name: "Adolescent Red Drake",
        maxHealth: 1220,
        lootTable: adolescentDrakeLootTable
    },
    "Green Drake": {
        name: "Green Drake",
        maxHealth: 1440,
        lootTable: greenDrakeLootTable
    },
    "Black Drake": {
        name: "Black Drake",
        maxHealth: 1550,
        lootTable: blackDrakeLootTable
    },
    "Blue Drake": {
        name: "Blue Drake",
        maxHealth: 1660,
        lootTable: blueDrakeLootTable
    },
    "Red Drake": {
        name: "Red Drake",
        maxHealth: 1770,
        lootTable: redDrakeLootTable
    },
    "Giant Anaconda": {
        name: "Giant Anaconda",
        maxHealth: 690,
        lootTable: giantAnacondaLootTable
    },
    "Vainglorious Dragon Hunter": {
        name: "Vainglorious Dragon Hunter",
        maxHealth: 991,
        lootTable: vaingloriousDragonHunter
    },
    "Boss Goblin": {
        name: "Boss Goblin",
        maxHealth: 900,
        lootTable: bossGoblinLootTable
    },
    "Goblin Loanmaster": {
        name: "Goblin Loanmaster",
        maxHealth: 600,
        lootTable: goblinLoanmasterLootTable
    },
    "Goblin Headcracker": {
        name: "Goblin Headcracker",
        maxHealth: 700,
        lootTable: goblinHeadcrackerLootTable
    },
    "Gold Goblin Golem": {
        name: "Gold Goblin Golem",
        maxHealth: 3100,
        lootTable: goldGoblinGolemLootTable
    },
    "Uncommon Bandit": {
        name: "Uncommon Bandit",
        maxHealth: 30,
        lootTable: uncommonBanditLootTable
    },
    "Overgrown Vole": {
        name: "Overgrown Vole",
        maxHealth: 48,
        lootTable: overgrownVoleLootTable
    },
    "Filthy Goblin": {
        name: "Filthy Goblin",
        maxHealth: 21,
        lootTable: filthyGoblinLootTable
    },
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