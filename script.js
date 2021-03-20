'use strict';

const dnesek = dayjs();
const velikonoce = dayjs('2021-04-05');
const vysledek = document.querySelector('.result');

const zbyvaDnu = Math.ceil(velikonoce.diff(dnesek, 'day', true));
const pocetDnu = document.querySelector('.pocet-dnu');

if (dnesek.isAfter(velikonoce)) {
  vysledek.textContent = 'ANO';
} else {
  vysledek.textContent = 'NE';
  pocetDnu.textContent = zbyvaDnu + ' dnů zbývá do Velikonoc';
}
