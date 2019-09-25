import {moneyGiven} from "../src/business";
import {prices} from "../src/prices";
import {commands} from "../src/commands";

describe('Turn order into string instructions', () => {

    test('should return correct for coffee', () => {
        const instructions = moneyGiven(commands.COFFEE, 0.7);
        expect(instructions).toBe('accepted');
    });

    test('should return money missing for coffee', () => {
        const instructions = moneyGiven(commands.COFFEE, 0.5);
        expect(instructions).toBe(prices.COFFEE_PRICE - 0.5 + 'money missing');
    });

    test('should return correct for tea', () => {
        const instructions = moneyGiven(commands.TEA, 0.5);
        expect(instructions).toBe('accepted');
    });

    test('should return money missing for tea', () => {
        const instructions = moneyGiven(commands.TEA, 0.3);
        expect(instructions).toBe(prices.TEA_PRICE - 0.3 + 'money missing');
    });

    test('should return correct for CHCOLATE', () => {
        const instructions = moneyGiven(commands.CHOCOLATE, 0.5);
        expect(instructions).toBe('accepted');
    });

    test('should return money missing for CHOCOLATE', () => {
        const instructions = moneyGiven(commands.CHOCOLATE, 0.4);
        expect(instructions).toBe(prices.CHOCOLATE_PRICE - 0.4 + 'money missing');
    });

});