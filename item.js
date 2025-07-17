const GREEN = "#2b814fff";
const RED = "#aa2a0aff";
const DARK_RED = "#6e1b07ff";
const GRAY = "#686868ff";
const GOLD = "#a89019ff";
const LIGHT_BLUE = "#316db3ff";
const DARK_BLUE = "#17467cff";
const PURPLE = "#9a50c5ff";
const LIGHT_PURPLE = "#c392dfff";

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
        switch (name){
            case "Gold Coin":
                return new Item(name,quantity,null,null,GOLD);
            case "Platinum Coin":
                return new Item(name,quantity,null,null,GRAY);
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
                return new Item(name,quantity,"weapon","+18 dmg, +9% chance to hit, 6% dmg",RED);
            case "Ice Bear Paw Mitts":
                return new Item(name,quantity,"hands","+6 dmg",GREEN);
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
                return new Item(name,quantity,"hands","+1-6 dmg",RED);
            case "Ring of Greed":
                return new Item(name,quantity,"finger","40% dmg, miss every 4 attacks",GREEN);
            case "Goblin Ledger":
                return new Item(name,quantity,"off-hand","1% damage every attack, resets after 12",RED);
            case "Devious Dagger":
                return new Item(name,quantity,"weapon","+6 dmg, 16% dmg",GREEN);
            case "Ratkickers":
                return new Item(name,quantity,"feet","6% dmg",GREEN);
            case "Greedy Goldgrubber Grips":
                return new Item(name,quantity,"hands","spawns treasure goblins",PURPLE);
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
                return new Item(name,quantity,"head","+7 dmg, 5% dmg per arcane equip",DARK_BLUE);
            case "Vest of Arcane Devotion":
                return new Item(name,quantity,"chest","+7 dmg, 5% dmg per arcane equip",DARK_BLUE);
            case "Gauntlets of Arcane Postmultiplication":
                return new Item(name,quantity,"hands","+7 dmg, 5% dmg per arcane equip",DARK_BLUE);
            case "Treads of Arcane Stabilization":
                return new Item(name,quantity,"feet","+7 dmg, 5% dmg per arcane equip",DARK_BLUE);
            case "Staff of Arcane Domination":
                return new Item(name,quantity,"weapon","+7 dmg, 5% dmg per arcane equip",DARK_BLUE);
            default:
                return new Item(name,quantity);
        }
    }
}