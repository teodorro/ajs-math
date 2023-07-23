import Character from './character';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
    this.damageFunc = Float32Array([1, 0.9, 0.8, 0.7, 0.6]);
  }

  getStoned() {

  }

  setStoned(linearFunc) {

  }

  getAttack(distance) {

  }

  setAttack(value) {

  }
}
