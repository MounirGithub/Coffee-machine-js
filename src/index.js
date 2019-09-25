import { commands } from "./commands";

export function drinkMaker(drink, sugars, temperature) {
    let hot;
    if (drink === commands.ORANGE) return commands.ORANGE + '::';

    if (temperature === true) hot ='h'; else hot = '';

    if (sugars === 0) {
        return drink + hot + '::';
    }
    return drink + hot + ':' + sugars + ':0';
}
