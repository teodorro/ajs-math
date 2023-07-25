import Character from './character';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
    this.damageFunc = (attack, distance) => Math.max(attack * (1 - distance * 0.1), 0);
    this.isStoned = false;
  }

  getStoned() {
    return this.isStoned;
  }

  setStoned(isStoned) {
    if (isStoned == null || typeof isStoned !== 'boolean') {
      throw new Error('Illegal argument');
    }
    this.isStoned = isStoned;
    this.damageFunc = isStoned
      ? (attack, distance) => Math.min(Math.max(attack - Math.log2(distance) * 5, 0), attack)
      : (attack, distance) => Math.max(attack * (1 - distance * 0.1), 0);
  }

  getAttack(distance) {
    if (distance == null || !Number.isInteger(distance) || distance < 0) {
      throw new Error('Illegal argument');
    }
    return this.damageFunc(this.attack, distance);
  }

  setAttack(attack) {
    if (attack == null || !Number.isInteger(attack) || attack < 0) {
      throw new Error('Illegal argument');
    }
    this.attack = attack;
  }
}
