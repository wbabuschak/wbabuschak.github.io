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
        this.items.push(new Item(item.name,item.quantity,item.equippable,item.desc,item.color));
    }

    list(){
        let output = "";
        let flag = true;
        const colors = ["#a89019ff", "#aa2a0aff", "#17467cff", "#2b814fff","#9a50c5ff", "#686868ff", "#6e1b07ff", "#316db3ff","#000000"];
        let sorted = this.items.slice().sort((a, b) => {
            return colors.indexOf(a.color) - colors.indexOf(b.color);
        });
        for (let item of sorted) {
            if (!flag) output += ", ";
            flag = false;
            output += `<span style="color: ${item.color};">x${item.quantity} ${item.name}</span>`;
        }
        return output;
    }

    serialize(){
        return this.items.map(item => item.serialize());
    }

    load(savedItems){
        this.items = savedItems.map(data =>
            new Item(data.name, data.quantity, data.equippable, data.desc, data.color)
        );
    }
}