class Entity{
    constructor(name, maxHealth, lootTable){
        this.name = name;
        this.maxHealth = maxHealth;
        this.HP = maxHealth;
        this.destroyed = false;
        this.lootTable = lootTable;
    }
    damage(damage, inventory){
        if (this.HP > 0) this.HP-= damage;
        this.updateDestroy(inventory);
    }
    updateDestroy(inventory){
        if (this.HP <= 0 && this.destroyed == false){
            if (this.lootTable != null){
                let drops =  this.lootTable.getDrop(1);
                for (let i = 0; i < drops.length; i++){
                    inventory.addItem(drops[i]);
                }
            } else {
                console.log(this.name + " drops nothing (null loot table)");
            }
            this.name += " (destroyed)";
            this.destroyed = true;
        }
    }
}