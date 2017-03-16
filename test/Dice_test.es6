import Dice from '../app/assets/js/Dice';

describe('Dice tests', () => {

    it('should count the dice', () => {
        let dice = new Dice();

        spyOn(dice, 'dice').and.returnValue(dice);
        expect(dice.dice.length).toBe(12);
    });

});