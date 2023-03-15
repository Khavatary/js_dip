import Character from '../Character';
import Bowman from '../classes/bowman';
import Swordsman from '../classes/swordsman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Undead from '../classes/undead';
import Vampire from '../classes/vampire';

test('error use new Character()', () => {
  expect(() => new Character()).toThrow('user use new Character()!!!');
});

test('not error use new Child extends Character', () => {
  expect(new Swordsman()).toEqual({
    attack: 40,
    attackCell: 2,
    defense: 10,
    health: 100,
    level: 1,
    moveCell: 5,
    type: 'swordsman',
  });
});

test('not error use new Child extends Character', () => {
  expect(new Bowman()).toEqual({
    attack: 25,
    attackCell: 3,
    defense: 25,
    health: 100,
    level: 1,
    moveCell: 3,
    type: 'bowman',
  });
});

test('not error use new Child extends Character', () => {
  expect(new Daemon()).toEqual({
    attack: 10,
    attackCell: 5,
    defense: 10,
    health: 100,
    level: 1,
    moveCell: 2,
    type: 'daemon',
  });
});

test('not error use new Child extends Character', () => {
  expect(new Magician()).toEqual({
    attack: 10,
    attackCell: 5,
    defense: 40,
    health: 100,
    level: 1,
    moveCell: 2,
    type: 'magician',
  });
});

test('not error use new Child extends Character', () => {
  expect(new Undead()).toEqual({
    attack: 40,
    attackCell: 2,
    defense: 10,
    health: 100,
    level: 1,
    moveCell: 5,
    type: 'undead',
  });
});

test('not error use new Child extends Character', () => {
  expect(new Vampire()).toEqual({
    attack: 25,
    attackCell: 3,
    defense: 25,
    health: 100,
    level: 1,
    moveCell: 3,
    type: 'vampire',
  });
});
