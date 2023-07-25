import MagicCharacter from './magic-character';

export default class Daemon extends MagicCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
