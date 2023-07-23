import MagicCharacter from './magic-character';

export default class Magician extends MagicCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defense = 40;
  }
}
