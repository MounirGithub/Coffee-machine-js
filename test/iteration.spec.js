import {drinkMaker} from "../src/index";
import { data } from "../data/simpleData";

describe('Turn order into string instructions', () => {
    test('should return correct total and numbers of each drink', () => {
        const instructions = drinkMaker(data);
        expect(instructions).toBe('4coffee and 0 tea and 1 chocolate and 0orange with total of 5.699999999999999');
    });
});