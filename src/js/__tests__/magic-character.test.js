/* eslint-disable spaced-comment */
import MagicCharacter from '../magic-character';


//#region setStoned

test('setStoned should set isStoned', () => {
  const character = new MagicCharacter('asd', 'Magician');
  const { damageFunc } = character;

  character.setStoned(true);

  expect(character.isStoned).toBe(true);
  expect(character.damageFunc).not.toBe(damageFunc);
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

test('getAttack should return if distance is illegal', () => {
  const character = new MagicCharacter('asd', 'Magician');

  expect(() => character.getAttack('qwe')).toThrow('Illegal argument');
});

test('getAttack should return 1 if distance == 0 and isStoned == true', () => {
  const character = new MagicCharacter('asd', 'Magician');
  character.setStoned(true);

  const damage = character.getAttack(0);

  expect(damage).toBe(character.attack);
});

test('getAttack should return 0.9 if distance == 1 and isStoned == false', () => {
  const character = new MagicCharacter('asd', 'Magician');

  const damage = character.getAttack(1);

  expect(damage).toBe(character.attack * 0.9);
});

test('getAttack should return 1 if distance == 1 and isStoned == true', () => {
  const character = new MagicCharacter('asd', 'Magician');
  character.setStoned(true);

  const damage = character.getAttack(1);

  expect(damage).toBe(character.attack);
});

test('getAttack should return >=0 if distance is large', () => {
  const character = new MagicCharacter('asd', 'Magician');

  const damage = character.getAttack(100500);

  expect(damage >= 0).toBe(true);
});

//#endregion getAttack
