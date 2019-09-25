import { data } from "../data/simpleData";

export function drinkMaker() {
    let total = data.map( a => a.price).reduce( (x,y) => x+y, 0);
    let coffee = eachDrink(data,'C');
    let tea = eachDrink(data,'T');
    let chocolate = eachDrink(data,'H');
    let orange = eachDrink(data,'0');

    return coffee +'coffee and ' + tea +' tea and ' + chocolate +  ' chocolate and ' + orange + 'orange with total of '+ total;
}

function eachDrink(data,drink) {
    return data.map(a=> a.drink).filter(a=>a===drink).length;
}