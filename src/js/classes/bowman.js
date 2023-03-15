import Character from '../Character';

export default class Bowman extends Character {
  constructor(level) {
    super(level);
    this.type = 'bowman';
    this.attack = 25;
    this.defense = 25;
    this.moveCell = 3;
    this.attackCell = 3;
  }
}
