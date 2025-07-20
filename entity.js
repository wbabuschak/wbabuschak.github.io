class Entity{
    constructor(name, maxHealth, lootTable, armor = 0){
        this.name = name;
        this.maxHealth = maxHealth;
        this.HP = maxHealth;
        this.destroyed = false;
        this.lootTable = lootTable;
        this.armor = armor;
        this.loot = null;
    }
    
    damage(damage){
        if (this.HP > 0) this.HP-= Math.max(0,damage - this.armor);
         if (this.HP <= 0 && !this.destroyed) {
            this.destroyed = true;
            this.name += " (destroyed)";
         }
    }

    getLoot() {
       if (this.destroyed){
            if (this.lootTable != null) {
                return this.lootTable.getDrop(1);
            } else {
                console.log(this.name + " drops nothing (null loot table)");
                return [];
            }
        }
        // loot not dropped (entity still alive)
        return null;
    }
}