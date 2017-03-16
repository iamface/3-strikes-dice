import Dice from '../app/assets/js/Dice';

describe('Dice tests', () => {

    let dice = new Dice();

    it('12 dice created', () => {
        spyOn(dice, 'dice').and.returnValue(dice);
        expect(dice.dice.length).toBe(12);
    });

});