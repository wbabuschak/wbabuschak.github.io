class Item{
    constructor(name, quantity, equippable, desc){
        this.name = name;
        this.quantity = quantity;
        this.equippable = equippable;
        this.desc = desc;
    }

    toString(){
        return this.quantity + "x " + this.name;
    }

    static createItem(name, quantity){
        switch (name){
            case "Ring of Slaying":
                return new Item(name,quantity,"finger","+1 dmg");
            case "Epic Sword":
                return new Item(name,quantity,"weapon","+7 dmg");
            case "Common Dagger":
                return new Item(name,quantity,"weapon","+2 dmg");
            case "Spectral Cowl":
                return new Item(name,quantity,"head","access to spirit world");
            case "Dirty Shoes":
                return new Item(name,quantity,"feet","does nothing");
            case "Fearsome Kris":
                return new Item(name,quantity,"weapon","+8 dmg");
            case "Mummy Wraps":
                return new Item(name,quantity,"chest","10% dmg");
            case "Havoc Blade":
                return new Item(name,quantity,"weapon","+3 dmg, 30% dmg");
            case "Haunting Guise":
                return new Item(name,quantity,"head","50% dmg if no weapon");
            case "Ring of Venom":
                return new Item(name,quantity,"finger","10% dmg");
            case "Stormstrike":
                return new Item(name,quantity,"hands","100% dmg or -100% dmg");
            case "Gauntlets of Sheer Force":
                return new Item(name,quantity,"hands","base damage is always 10");
            default:
                return new Item(name,quantity);
        }
    }
}