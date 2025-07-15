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
    Item.createItem("Mummy Wraps", 1)
    ],[33,32,31,1,1,1]
);

const spiritEaterLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Gold Coin", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Fearsome Kris", 1),
    Item.createItem("Ring of Slaying", 1)
    ],[18,7,2,1,1]
);

const ghastlyHorrorLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Brain Slime", 2),
    Item.createItem("Brain Slime", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Mummy Wraps", 1),
    Item.createItem("Ring of Slaying", 1)
    ],[31,4,3,2,1,1]
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
    Item.createItem("Drained Essense", 1),
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
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Bovine", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Stone of Michael", 1)
    ],[12,12,12,12,3,1,1]
);

const infernalInsectLootTable = new LootTable([
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Insect", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Blade of One Thousand Hooks", 1)
    ],[12,12,12,12,3,1,1]
);

const sinfulSuccubusLootTable = new LootTable([
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Succubus", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Promise Ring", 1)
    ],[12,12,12,12,3,1,1]
);

const fieryFangtoothLootTable = new LootTable([
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Fangtooth", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Treads of Crushing Depths", 1)
    ],[12,12,12,12,3,1,1]
);

const dreadfulDinoLootTable = new LootTable([
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Dino", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Fossil Blade", 1)
    ],[12,12,12,12,3,1,1]
);

const vileVultureLootTable = new LootTable([
    Item.createItem("Worn Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Vulture", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Emesis Amulet", 1)
    ],[12,12,12,12,3,1,1]
);