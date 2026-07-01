let stock: number[] =[15,8,20,5,30];
function getRestockList(inventory: number[]): number[]{
    let restock:number[] = [];
    for(let i=0; i<inventory.length; i++){
        if(inventory[i]<10){
            restock.push(inventory[i]);
        }

    }
    return restock;
}

console.log(getRestockList(stock));