const commonThiefLootTable = new LootTable([
    Item.createItem("Epic Sword", 1),
    Item.createItem("Deadly Poison", 1),
    Item.createItem("Gold Coin", 3),
    Item.createItem("Gold Coin", 2),
    Item.createItem("Gold Coin", 1),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Lame Rocks", 2),
    Item.createItem("Lame Rocks", 1),
    Item.createItem("Common Dagger", 1),
    Item.createItem("Dirty Shoes", 1)
    ],[1,2,4,6,8,10,14,16,20,4]
);

const dirtyGoblinLootTable = new LootTable([
    Item.createItem("Rotten Food", 1),
    Item.createItem("Gold Coin", 4),
    Item.createItem("Gold Coin", 2),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Lame Rocks", 2),
    Item.createItem("Lame Rocks", 1),
    Item.createItem("Common Dagger", 1),
    Item.createItem("Dirty Shoes", 1)
    ],[2,6,8,10,14,16,4,5]
);

const mysteriousVillainLootTable = new LootTable([
    Item.createItem("Gold Coin", 8),
    Item.createItem("Gold Coin", 6),
    Item.createItem("Gold Coin", 4),
    Item.createItem("Gold Coin", 3),
    Item.createItem("Dirty Shoes", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Spectral Cowl", 1)
    ],[5,5,5,5,4,2,1]
);

const spectralFiendLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Ectoplasm", 12),
    Item.createItem("Ectoplasm", 18),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Spectral Cowl", 1),
    Item.createItem("Mummy Wraps", 1),
    Item.createItem("Skullstompers", 1)
    ],[66,64,62,2,2,2,1]
);

const spiritEaterLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Gold Coin", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Fearsome Kris", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Skullstompers", 1)
    ],[36,14,4,2,2,1]
);

const ghastlyHorrorLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Brain Slime", 2),
    Item.createItem("Brain Slime", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Mummy Wraps", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Skullstompers", 1)
    ],[62,8,6,4,2,2,1]
);

const desertWraithLootTable = new LootTable([
    Item.createItem("Gold Coin", 39),
    Item.createItem("Gold Coin", 29),
    Item.createItem("Gold Coin", 17),
    Item.createItem("Gold Coin", 13),
    Item.createItem("Cloth Scrap", 13),
    Item.createItem("Cloth Scrap", 11),
    Item.createItem("Cloth Scrap", 7),
    Item.createItem("Cloth Scrap", 5),
    Item.createItem("Drained Essence", 1),
    Item.createItem("Havoc Blade", 1),
    Item.createItem("Haunting Guise", 1),
    ],[3,5,7,9,6,10,14,18,2,1,1]
);

const bileSpitterLootTable = new LootTable([
    Item.createItem("Bug Part", 13),
    Item.createItem("Bug Part", 11),
    Item.createItem("Chitinous Plate", 1),
    Item.createItem("Chitinous Plate", 2),
    Item.createItem("Vitriol", 2),
    Item.createItem("Venomous Gland", 1),
    Item.createItem("Ring of Venom", 1)
    ],[64,32,16,8,4,2,1]
);

const desertZealotLootTable = new LootTable([
    Item.createItem("Cloth Scrap", 12),
    Item.createItem("Cloth Scrap", 13),
    Item.createItem("Cloth Scrap", 14),
    Item.createItem("Gold Coin", 13),
    Item.createItem("Gold Coin", 23),
    Item.createItem("Gold Coin", 33),
    Item.createItem("Blasting Wand", 1),
    Item.createItem("Killer Gloves", 1),
    Item.createItem("Water Jar", 1),
    Item.createItem("Stormstrike", 1)
    ],[21,19,17,13,11,7,5,4,2,1]
);

const sandstoneGolemLootTable = new LootTable([
    Item.createItem("Lame Rocks", 9),
    Item.createItem("Cracked Gem", 1),
    Item.createItem("Sandstone Brick", 1),
    Item.createItem("Broken Circuitry", 5),
    Item.createItem("Broken Circuitry", 4),
    Item.createItem("Broken Circuitry", 3),
    Item.createItem("Sandstone Brick", 2),
    Item.createItem("Token of Faith", 1),
    Item.createItem("Gauntlets of Sheer Force", 1),
    ],[8,10,12,6,8,10,4,2,1]
);

const blazingBovineLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Bovine", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Stone of Michael", 1)
    ],[12,12,12,12,3,1,1]
);

const infernalInsectLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Insect", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Blade of One Thousand Hooks", 1)
    ],[12,12,12,12,3,1,1]
);

const sinfulSuccubusLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Succubus", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Promise Ring", 1)
    ],[12,12,12,12,3,1,1]
);

const fieryFangtoothLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Fangtooth", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Treads of Crushing Depths", 1)
    ],[12,12,12,12,3,1,1]
);

const dreadfulDinoLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Dino", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Fossil Blade", 1)
    ],[12,12,12,12,3,1,1]
);

const vileVultureLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Vulture", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Emesis Amulet", 1)
    ],[12,12,12,12,3,1,1]
);

const iceologerLootTable = new LootTable([
    Item.createItem("Fur Scrap", 7),
    Item.createItem("Fur Scrap", 5),
    Item.createItem("Fur Scrap", 3),
    Item.createItem("Magical Essence", 3),
    Item.createItem("Gold Coin", 144),
    Item.createItem("Gold Coin", 73),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Frozen Gemstone Amulet", 1)
    ],[6,9,12,9,9,12,1,1]
);

const spookyRevenantLootTable = new LootTable([
    Item.createItem("Weary Soul", 1),
    Item.createItem("Repressed Memory", 1),
    Item.createItem("Broken Dream", 1),
    Item.createItem("Shattered Innocence", 1),
    Item.createItem("Terror Mask", 1)
    ],[15,15,15,15,1]
);

const iceBearLootTable = new LootTable([
    Item.createItem("Fur Scrap", 10),
    Item.createItem("Fur Scrap", 12),
    Item.createItem("Fur Scrap", 14),
    Item.createItem("Broken Nail", 1),
    Item.createItem("Ice Bear Paw Mitts", 1),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Nature's Wrath", 1)
    ],[30,20,10,4,3,3,1]
);

const animatedWeaponLootTable = new LootTable([
    Item.createItem("Broken Blade", 1),
    Item.createItem("Magical Essence", 2),
    Item.createItem("Magical Essence", 4),
    Item.createItem("Magical Essence", 5),
    Item.createItem("Magical Essence", 7),
    Item.createItem("Mote of Arcane Power", 1)
    ],[144,30,25,20,15,1]
);

const foulNecromancerLootTable = new LootTable([
    Item.createItem("Cloth Scrap", 20),
    Item.createItem("Cloth Scrap", 17),
    Item.createItem("Cloth Scrap", 15),
    Item.createItem("Gold Coin", 244),
    Item.createItem("Gold Coin", 151),
    Item.createItem("Magical Essence", 3),
    Item.createItem("Magical Essence", 5),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Dread Loop", 1)
    ],[12,18,24,30,39,18,24,6,2,1]
);

const juvenileDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 5),
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Dragon Scale", 2),
    Item.createItem("Dragon Scale", 1),
    Item.createItem("Sticky Dragon Mucus", 1),
    Item.createItem("Baby Dragon Fang", 1),
    ],[4,8,12,16,20,2,1]
);

const adolescentDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Dragon Scale", 6),
    Item.createItem("Dragon Scale", 5),
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Gold Coin", 541),
    Item.createItem("Gold Coin", 610),
    Item.createItem("Sticky Dragon Mucus", 1),
    Item.createItem("Juvenile Dragon Talon", 1),
    ],[4,8,12,16,20,10,20,2,1]
);

const greenDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Dragon Scale", 6),
    Item.createItem("Gold Coin", 813),
    Item.createItem("Gold Coin", 910),
    Item.createItem("Green Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    ],[4,8,12,16,20,10,20,2,1]
);

const blackDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Gold Coin", 860),
    Item.createItem("Gold Coin", 990),
    Item.createItem("Black Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    ],[4,8,12,16,20,10,20,2,1]
);

const blueDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 12),
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Gold Coin", 900),
    Item.createItem("Gold Coin", 1031),
    Item.createItem("Blue Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    ],[4,8,12,16,20,10,20,2,1]
);

const redDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 13),
    Item.createItem("Dragon Scale", 12),
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Gold Coin", 919),
    Item.createItem("Gold Coin", 1108),
    Item.createItem("Red Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    ],[4,8,12,16,20,10,20,2,1]
);

const giantAnacondaLootTable = new LootTable([
    Item.createItem("Grody Man-meat", 7),
    Item.createItem("Grody Man-meat", 3),
    Item.createItem("Grody Man-meat", 2),
    Item.createItem("Gold Coin", 101),
    Item.createItem("Gold Coin", 203),
    Item.createItem("Gold Coin", 341),
    Item.createItem("Gold Coin", 391),
    Item.createItem("Gold Coin", 431),
    Item.createItem("Gold Coin", 781),
    Item.createItem("Gold Coin", 919),
    Item.createItem("Gold Coin", 1108),
    Item.createItem("Rotten Meat", 1),
    Item.createItem("Snake-eye Chain", 1),
    ],[4,8,12,13,12,11,10,9,8,7,6,2,1]
);

const vaingloriousDragonHunter = new LootTable([
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Dragon Scale", 2),
    Item.createItem("Gold Coin", 354),
    Item.createItem("Gold Coin", 300),
    Item.createItem("Dragonheart Piercer", 1),
    Item.createItem("Devastating Crossbow", 1),
    Item.createItem("Platinum Coin", 1),
    ],[4,8,12,16,20,6,3,1]
);

const bossGoblinLootTable = new LootTable([
    Item.createItem("Gold Coin", 1770),
    Item.createItem("Gold Coin", 2080),
    Item.createItem("Broken Rubber Band", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Boss Goblin's Gilded Fountain Pen", 1),
    ],[50,39,8,2,1]
);

const goblinLoanmasterLootTable = new LootTable([
    Item.createItem("Gold Coin", 1420),
    Item.createItem("Gold Coin", 1790),
    Item.createItem("Broken Rubber Band", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Goblin Ledger", 1),
    ],[50,39,8,2,1]
);

const goblinHeadcrackerLootTable = new LootTable([
    Item.createItem("Gold Coin", 1020),
    Item.createItem("Gold Coin", 1330),
    Item.createItem("Broken Tire Iron", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Headcracker Mitts", 1),
    ],[50,39,8,2,1]
);