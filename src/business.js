import {prices} from "./prices";
import {commands} from "./commands";
import { drinkMaker } from "./index";

export function moneyGiven(drink, money , sugars, temperature) {

    if ((drink === commands.COFFEE && money >= prices.COFFEE_PRICE) ||
        (drink === commands.TEA && money >= prices.TEA_PRICE) ||
        (drink === commands.CHOCOLATE && money >= prices.CHOCOLATE_PRICE) ||
        (drink === commands.ORANGE && money >= prices.ORANGE_PRICE)) 
        return drinkMaker(drink, sugars, temperature);
    
    if (drink === commands.COFFEE) return prices.COFFEE_PRICE - money + 'money missing';
    if (drink === commands.TEA) return prices.TEA_PRICE - money + 'money missing';
    if (drink === commands.CHOCOLATE) return prices.CHOCOLATE_PRICE - money + 'money missing';
    if (drink === commands.ORANGE) return prices.ORANGE_PRICE - money + 'money missing';
}
