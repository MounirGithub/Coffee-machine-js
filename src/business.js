import {prices} from "../src/prices";
import {commands} from "../src/commands";

export function moneyGiven(drink, money) {

    if ((drink === commands.COFFEE && money >= prices.COFFEE_PRICE) ||
        (drink === commands.TEA && money >= prices.TEA_PRICE) ||
        (drink === commands.CHOCOLATE && money >= prices.CHOCOLATE_PRICE)) 
        return 'accepted';
    
    if (drink === commands.COFFEE) return prices.COFFEE_PRICE - money + 'money missing';
    if (drink === commands.TEA) return prices.TEA_PRICE - money + 'money missing';
    if (drink === commands.CHOCOLATE) return prices.CHOCOLATE_PRICE - money + 'money missing';

}
