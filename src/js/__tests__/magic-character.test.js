/* eslint-disable spaced-comment */
import MagicCharacter from '../magic-character';


//#region setStoned

test('setStoned should set isStoned', () => {
  const character = new MagicCharacter('asd', 'Magician');

  character.setStoned(true);

  expect(character.isStoned).toBe(true);
});

test('setStoned should throw if illegal argument', () => {
  const character = new MagicCharacter('asd', 'Magician');

  expect(() => character.setStoned('qwe')).toThrow('Illegal argument');
});

//#endregion setStoned

//#region getStoned

test('getStoned should return isStoned', () => {
  const character = new MagicCharacter('asd', 'Magician');

  character.setStoned(true);

  expect(character.getStoned()).toBe(true);
});

//#endregion getStoned

//#region setAttack

test('setAttack should set attack', () => {
  const character = new MagicCharacter('asd', 'Magician');

  character.setAttack(100);

  expect(character.attack).toBe(100);
});

test('setAttack should throw if illegal argument', () => {
  const character = new MagicCharacter('asd', 'Magician');

  expect(() => character.setAttack('qwe')).toThrow('Illegal argument');
});

//#endregion setAttack

//#region getAttack

test('getAttack should return linear if not stoned', () => {
  const character = new MagicCharacter('asd', 'Magician');
  character.setStoned(false);

  const attack = character.getAttack();

  expect(attack[1]).toBe(0.9 * character.attack);
});

test('getAttack should return log if stoned', () => {
  const character = new MagicCharacter('asd', 'Magician');
  character.setStoned(true);

  const attack = character.getAttack();

  expect(attack[1]).toBe(1 * character.attack);
});

//#endregion getAttack
