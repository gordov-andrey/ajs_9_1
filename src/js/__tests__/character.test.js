import Daemon from '../Daemon';

test('Оглушен при атаке', () => {
  const demon = new Daemon('user', 'Daemon');
  demon.attack = 100;
  demon.setStoned(true);
  demon.setAttack(2);
  expect(demon.attack).toBe(85);
});

test('Атака без оглушения', () => {
  const demon = new Daemon('user', 'Daemon');
  demon.attack = 100;
  demon.setAttack(2);
  expect(demon.attack).toBe(90);
});

test('Дальняя атака', () => {
  const demon = new Daemon('user', 'Daemon');
  demon.attack = 100;
  demon.setAttack(6);
  expect(demon.attack).toBe(0);
});

test('Проверка оглушения', () => {
  const demon = new Daemon('user', 'Daemon');
  demon.attack = 100;
  demon.setStoned(true);
  expect(demon.getStoned()).toBe(true);
});

test('Проверка атаки', () => {
  const demon = new Daemon('user', 'Daemon');
  demon.attack = 100;
  demon.setStoned(true);
  expect(demon.getAttack()).toBe(100);
});
