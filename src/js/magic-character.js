import Character from './character';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
    this.setStoned(false);
  }

  getStoned() {
    return this.isStoned;
  }

  setStoned(isStoned) {
    if (isStoned == null || typeof isStoned !== 'boolean') {
      throw new Error('Illegal argument');
    }
    this.isStoned = isStoned;
  }

  getAttack() {
    const damageFunc = (attack, distance) => (this.isStoned
      ? Math.min(Math.max(attack - Math.log2(distance) * 5, 0), attack)
      : Math.max(attack * (1 - distance * 0.1), 0));
    const attackArray = []; // some hardcode
    attackArray[0] = this.attack;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 100; i++) { // some hardcode
      const damage = damageFunc(this.attack, i);
      if (damage > 0) {
        attackArray.push(damage);
      } else {
        break;
      }
    }
    return attackArray;
  }

  setAttack(attack) {
    if (attack == null || !Number.isInteger(attack) || attack < 0) {
      throw new Error('Illegal argument');
    }
    this.attack = attack;
  }
}
