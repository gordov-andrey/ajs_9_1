/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type) {
    this.name = this.nameChecker(name);
    this.type = this.typeChecker(type);
    this.health = 0;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  nameChecker(name) {
    return name;
  }

  typeChecker(type) {
    return type;
  }

  setStoned(boolean) {
    if (this.type === 'Magician' || this.type === 'Daemon') {
      if (typeof boolean === 'boolean') {
        this.stoned = boolean;
      }
    }
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(distance) {
    if (distance > 0 && distance <= 5 && this.stoned === true) {
      this.attack = this.attack * ((11 - distance) / 10) - Math.log2(distance) * 5;
    } else if (distance > 0 && distance <= 5) {
      this.attack *= ((11 - distance) / 10);
    } else {
      this.attack = 0;
    }
  }

  getAttack() {
    return Math.ceil(this.attack);
  }
}

export default Character;
