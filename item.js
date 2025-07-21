const GREEN = "#2b814fff";
const RED = "#aa2a0aff";
const DARK_RED = "#6e1b07ff";
const GRAY = "#686868ff";
const GOLD = "#a7901fff";
const LIGHT_BLUE = "#316db3ff";
const DARK_BLUE = "#17467cff";
const PURPLE = "#9a50c5ff";
const LIGHT_PURPLE = "#c392dfff";
const LIGHT_YELLOW = "#e7c818ff";

class Item{

    constructor(name, quantity, equippable, desc, color){
        this.name = name;
        this.quantity = quantity;
        this.equippable = equippable;
        this.desc = desc;
        this.color = color || "#000000";
    }

    toString(){
        return this.quantity + "x " + this.name;
    }

    serialize() {
        return {
            name: this.name,
            quantity: this.quantity,
            equippable: this.equippable,
            desc: this.desc,
            color: this.color
        };
    }

    static createItem(name, quantity){
        if (!name || !quantity){
            return null;
        }
        switch (name){
            case "Gold Coin":
                return new Item(name,quantity,null,null,GOLD);
            case "Platinum Coin":
                return new Item(name,quantity,null,null,GOLD);
            case "Universal Credit":
                return new Item(name,quantity,null,null,GOLD);
            case "Token of Faith":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Water Jar":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Venomous Gland":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Drained Essence":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Ring of Slaying":
                return new Item(name,quantity,"finger","+1 dmg",GREEN);
            case "Epic Sword":
                return new Item(name,quantity,"weapon","+7 dmg",RED);
            case "Common Dagger":
                return new Item(name,quantity,"weapon","+3 dmg",GREEN);
            case "Spectral Cowl":
                return new Item(name,quantity,"head","access to spirit world",PURPLE);
            case "Dirty Shoes":
                return new Item(name,quantity,"feet","does nothing",GRAY);
            case "Fearsome Kris":
                return new Item(name,quantity,"weapon","+8 dmg",RED);
            case "Mummy Wraps":
                return new Item(name,quantity,"chest","10% dmg",GREEN);
            case "Havoc Blade":
                return new Item(name,quantity,"weapon","+3 dmg, 30% dmg",GREEN);
            case "Haunting Guise":
                return new Item(name,quantity,"head","50% dmg if no weapon",DARK_BLUE);
            case "Ring of Venom":
                return new Item(name,quantity,"finger","10% dmg",RED);
            case "Stormstrike":
                return new Item(name,quantity,"hands","100% dmg or -100% dmg",DARK_BLUE);
            case "Gauntlets of Sheer Force":
                return new Item(name,quantity,"hands","base damage is always 10",DARK_BLUE);
            case "Tooth Necklace":
                return new Item(name,quantity,"amulet","+6 dmg",DARK_BLUE);
            case "Fossil Blade":
                return new Item(name,quantity,"weapon","+20 dmg",RED);
            case "Treads of Crushing Depths":
                return new Item(name,quantity,"feet","9% dmg",RED);
            case "Emesis Amulet":
                return new Item(name,quantity,"amulet","+9 dmg, 9% dmg, 9% chance to miss",RED);
            case "Crown of the Corpseeater":
                return new Item(name,quantity,"head","11% dmg",DARK_BLUE);
            case "Promise Ring":
                return new Item(name,quantity,"finger","does nothing (what a tease...)",GRAY);
            case "Wraps of Temptation":
                return new Item(name,quantity,"chest","23% dmg, 10% chance to miss",DARK_BLUE);
            case "Blade of One Thousand Hooks":
                return new Item(name,quantity,"weapon","66% dmg",RED);
            case "Stone of James":
                return new Item(name,quantity,"finger","1.1x dmg",RED);
            case "Killer Gloves":
                return new Item(name,quantity,"hands","3% dmg",GREEN);
            case "Blasting Wand":
                return new Item(name,quantity,"weapon","+10 dmg",GREEN);
            case "Memento of the Vulture":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Dino":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Fangtooth":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Succubus":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Insect":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Bovine":  
                return new Item(name,quantity,null,null,DARK_RED);
            case "Ice Bear Fur Shawl":
                return new Item(name,quantity,"chest","+10 dmg",GREEN);
            case "Terror Mask":
                return new Item(name,quantity,"head","+20% chance to hit",RED);
            case "Dread Loop":
                return new Item(name,quantity,"finger","base damage is always 16, 16% chance to miss",RED);
            case "Mote of Arcane Power":
                return new Item(name,quantity,"finger","+40% chance to hit, -20% dmg",RED);
            case "Nature's Wrath":
                return new Item(name,quantity,"weapon","+18 dmg, 6% dmg, +9% chance to hit", RED);
            case "Ice Bear Paw Mitts":
                return new Item(name,quantity,"hands","+5 dmg",GREEN);
            case "Frozen Gemstone Amulet":
                return new Item(name,quantity,"amulet","+8 dmg, access to spirit world",PURPLE);
            case "Skullstompers":
                return new Item(name,quantity,"feet","+1 dmg, access to spirit world",PURPLE);
            case "Baby Dragon Fang":
                return new Item(name,quantity,"amulet","13% dmg",GREEN);
            case "Juvenile Dragon Talon":
                return new Item(name,quantity,"weapon","+33 dmg",GREEN);
            case "Green Dragonscale Cape":
                return new Item(name,quantity,"back","7% dmg",RED);
            case "Black Dragonscale Cape":
                return new Item(name,quantity,"back","1.1x dmg, 7% chance to miss",RED);
            case "Blue Dragonscale Cape":
                return new Item(name,quantity,"back","+7 dmg",RED);
            case "Red Dragonscale Cape":
                return new Item(name,quantity,"back","100% dmg every 7 attacks",RED);
            case "Dragon Mucus Tincture":
                return new Item(name,quantity,"off-hand","10% dmg every 7 attacks",GREEN);
            case "Dragonheart Piercer":
                return new Item(name,quantity,"weapon","+26 dmg, 7% dmg",RED);
            case "Devastating Crossbow":
                return new Item(name,quantity,"weapon","+21 dmg, your attacks can't miss",RED);
            case "Snake-eye Chain":
                return new Item(name,quantity,"off-hand","+2 dmg",GREEN);
            case "Headcracker Mitts":
                return new Item(name,quantity,"hands","+1-12 dmg",RED);
            case "Ring of Greed":
                return new Item(name,quantity,"finger","40% dmg, miss every 4 attacks",GREEN);
            case "Goblin Ledger":
                return new Item(name,quantity,"off-hand","1% damage every attack, resets after 12",RED);
            case "Devious Dagger":
                return new Item(name,quantity,"weapon","+6 dmg, 16% dmg",GREEN);
            case "Ratkickers":
                return new Item(name,quantity,"feet","6% dmg",GREEN);
            case "Greedy Goldgrubber Grips":
                return new Item(name,quantity,"hands","spawns treasure goblins",GRAY);
            case "Gold Cloak":
                return new Item(name,quantity,"back","+1 dmg, 1% dmg, 1.01x dmg, +1% chance to hit",DARK_BLUE);
            case "First Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Second Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Third Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Fourth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Fifth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Sixth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Seventh Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Helmet of Arcane Protection":
                return new Item(name,quantity,"head","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Vest of Arcane Devotion":
                return new Item(name,quantity,"chest","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Gauntlets of Arcane Postmultiplication":
                return new Item(name,quantity,"hands","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Treads of Arcane Stabilization":
                return new Item(name,quantity,"feet","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Staff of Arcane Domination":
                return new Item(name,quantity,"weapon","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Arcane Star Jar":
                return new Item(name,quantity,null,null,LIGHT_YELLOW);
            case "Arcane Focusing Gem":
                return new Item(name,quantity,"finger","1.13x dmg",RED);
            case "Arcane Circuitboard":
                return new Item(name,quantity,"trinket","8% dmg every 3 attacks",RED);
            case "Arcane Iris":
                return new Item(name,quantity,"amulet","+5% dmg, your attacks that would miss deal 40% dmg",RED);
            case "Arcane Shield":
                return new Item(name,quantity,"off-hand","5% dmg, +10% chance to hit",RED);
            case "Arcane Phylactery":
                return new Item(name,quantity,"trinket","18% dmg, 10% chance to miss",RED);
            case "Astral Hammer":
                return new Item(name,quantity,"weapon","+100 dmg, 50% chance to miss",RED);
            case "Moon Blasting Super Smashers":
                return new Item(name,quantity,"hands","base damage is always 40",RED);
            case "Laser Gigawatt Charger":
                return new Item(name,quantity,"off-hand","40% dmg with laser weapons",GREEN);
            case "Laser-powered Goblin Smasher":
                return new Item(name,quantity,"weapon","+22 dmg, 2.00x damage every 3 attacks",RED);
            case "Green Laser Blaster":
                return new Item(name,quantity,"weapon","+55 dmg",GREEN);
            case "Grey Laser Blaster":
                return new Item(name,quantity,"weapon","+50 dmg, 10% dmg",GREEN);
            case "Nebula Gemstone":
                return new Item(name,quantity,"amulet","50% dmg every 2 attacks",GREEN);
            // volcano planet world items
            case "Volcano Badge":
                return new Item(name,quantity,"trinket","10% dmg, +10% chance to hit",GREEN);
            case "Kor'As, Obliteration Blade":
                return new Item(name,quantity,"weapon","+113 dmg, 48% dmg",RED);
            case "Heart of Molten Giant":
                return new Item(name,quantity,"amulet","48% dmg, 11% chance to miss",DARK_BLUE);
            case "Eye of Molten Giant":
                return new Item(name,quantity,"finger","24% dmg, 7% chance to miss",GREEN);
            case "Destroyer Greaves":
                return new Item(name,quantity,"feet","1.2x dmg",RED);
            case "Signet of Trembling":
                return new Item(name,quantity,"finger","18% dmg, +18% chance to hit",DARK_BLUE);
            case "Deep Black Mask":
                return new Item(name,quantity,"head","60% dmg if wearing The Obsidian Band",RED);
            case "The Obsidian Band":
                return new Item(name,quantity,"finger","does nothing",DARK_BLUE);
            case "Sulfur Respirator":
                return new Item(name,quantity,"head","+10 dmg, 6% damage every attack, resets after 6",RED);
            case "Horn of Doom":
                return new Item(name,quantity,"off-hand","1.06x dmg",DARK_BLUE);
            case "Lava Scorpion Exoskeleton":
                return new Item(name,quantity,"chest","100% dmg if no head, hands, or feet item equipped",RED);
            // case correction for bugged item
            case "Amulet of Vitrioltic Withering":
                return new Item("Amulet of Vitriolic Withering",quantity,"amulet","+10% chance to hit every attack, resets after 10",DARK_BLUE);
            case "Amulet of Vitriolic Withering":
                return new Item(name,quantity,"amulet","+10% chance to hit every attack, resets after 10",DARK_BLUE);
            case "Steps of Worldshaking":
                return new Item(name,quantity,"feet","+20 dmg",DARK_BLUE);
            // pleasure world items
            case "Mysterious Pleasure Juice":
                return new Item(name,quantity,"trinket","0-30% dmg",GREEN);
            case "Ak'lop, Incineration Wand":
                return new Item(name,quantity,"weapon","+20 dmg & 20% dmg every attack, resets after 10",RED);
            case "Chaos Vambrace":
                return new Item(name,quantity,"hands","+0-30 dmg",DARK_BLUE);
            case "Chaos Blade":
                return new Item(name,quantity,"weapon","+90 dmg, 90% dmg",GREEN);
            case "Cape of Cunning":
                return new Item(name,quantity,"back","1.2x dmg on first attack",DARK_BLUE);
            case "Overtuned Grippers":
                return new Item(name,quantity,"hands","60% dmg, -10% every attack, resets after 6",RED);
            case "Flesh Den Entry Token":
                return new Item(name,quantity,"trinket","+6 dmg, +9% chance to hit",DARK_BLUE);
            case "Dual-purpose Cane":
                return new Item(name,quantity,"off-hand","+10 dmg, +10% chance to hit",RED);
            case "Off-world Beast Fur Shawl":
                return new Item(name,quantity,"chest","+40 dmg",DARK_BLUE);
            case "Hyper Cutter":
                return new Item(name,quantity,"off-hand","+21 dmg, 10% chance to miss", RED);
            case "Ambush Sensor":
                return new Item(name,quantity,"off-hand","1.1x dmg, your first attack can't miss",DARK_BLUE);
            case "Badass Cloak":
                return new Item(name,quantity,"back","30% dmg",RED);
            case "Reworked Goblin Tech":
                return new Item(name,quantity,"head","+0-50 dmg on first attack",RED);
            // A.M. world items
            case "Electric Eye":
                return new Item(name,quantity,"trinket","+1 dmg every attack, resets after 33",GREEN);
            case "Gar'Ahan, Fleshstripper":
                return new Item(name,quantity,"weapon","+300 dmg, 150% chance to miss",RED);
            case "Tabis of Inexorable Torment":
                return new Item(name,quantity,"feet","+18 dmg, +18% chance to hit",DARK_BLUE);
            case "Cage of Inexorable Torment":
                return new Item(name,quantity,"head","40% dmg, your first attack always misses",GREEN);
            case "Perfect Diamond Amulet":
                return new Item(name,quantity,"amulet","+30% chance to hit",DARK_BLUE);
            case "Ring of the Unbroken Stare":
                return new Item(name,quantity,"finger","40% dmg after 8 attacks",RED);
            case "Symbol of Everlasting Humanity":
                return new Item(name,quantity,"trinket","1.1x dmg after 10 attacks, 1.2x dmg after 20 attacks",DARK_BLUE);
            case "Butcher's Apron":
                return new Item(name,quantity,"chest","40% dmg every 2 attacks, +10 dmg every 4 attacks",RED);
            case "Inexplicable Ribs":
                return new Item(name,quantity,"chest","60% dmg, 16% chance to miss",DARK_BLUE);
            case "Damaged Exosuit":
                return new Item(name,quantity,"chest","50% chance to hit after 10 attacks, 100% chance to hit after 20 attacks", RED);
            case "Slicing Gloves":
                return new Item(name,quantity,"hands","base damage is always 100",DARK_BLUE);
            case "Repurposed Digital Gauge":
                return new Item(name,quantity,"finger","0.1% dmg for each Dreadbeast Trophy, up to 40%",RED);
            case "Strangler Mitts":
                return new Item(name,quantity,"hands","attacks without a weapon can't miss",RED);
             // stellar remnant world items
            case "Collapse Clasp":
                return new Item(name,quantity,"waist","30% dmg",GREEN);
            case "Degenerate Star Tome":
                return new Item(name,quantity,"weapon","+30 dmg for each degenerate star item, deal 2.00x dmg on the first of every 5 attacks",RED);
            case "Cape of the Neutron Star":
                return new Item(name,quantity,"back","1600% dmg every 45 attacks",DARK_BLUE);
            case "Cape of the White Dwarf":
                return new Item(name,quantity,"back","300% dmg every 9 attacks",GREEN);
            case "Magnetar Pendant":
                return new Item(name,quantity,"amulet","+23 dmg",DARK_BLUE);
            case "Degenerate Star Boots":
                return new Item(name,quantity,"feet","+30 dmg for each degenerate star item, deal 2.00x dmg on the second of every 5 attacks",RED);
            case "Impossibly Dense Chain":
                return new Item(name,quantity,"amulet","56% dmg, 14% chance to miss",DARK_BLUE);
            case "Degenerate Star Belt":
                return new Item(name,quantity,"waist","+30 dmg for each degenerate star item, deal 2.00x dmg on the third of every 5 attacks",RED);
            case "Anti-matter Aegis":
                return new Item(name,quantity,"off-hand","+10 dmg every attack, resets after 4",DARK_BLUE);
            case "Degenerate Star Hood":
                return new Item(name,quantity,"head","+30 dmg for each degenerate star item, deal 2.00x dmg on the fourth of every 5 attacks", RED);
            case "Ion Chimes":
                return new Item(name,quantity,"off-hand","+50% chance to hit every 2 attacks, 50% dmg every 4 attacks",DARK_BLUE);
            case "Degenerate Star Coat":
                return new Item(name,quantity,"chest","+30 dmg for each degenerate star item, deal 2.00x dmg on the fifth of every 5 attacks",RED);
            case "Stolen Hope":
                return new Item(name,quantity,"trinket","1% dmg every attack, resets after 50 attacks",RED);
            default:
                return new Item(name,quantity);
        }
    }
}