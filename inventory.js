class Inventory{
    constructor(){
        this.items = [];
    }
    addItem(item){
        // console.log("looted " + item.toString());
        for (let i of this.items){
            if (item.name == i.name){
                i.quantity += item.quantity;
                return;
            }
        }
        this.items.push(new Item(item.name,item.quantity,item.equippable,item.desc));
    }
    list(){
        return this.items.map(item => item.toString()).join(", ")
    }
}