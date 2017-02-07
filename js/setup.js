'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

// Валидация формы
// Функция пока что не реализована
var validateName = function () {
  userName.required = true;
  if (userName.value.length > 50) {
    userName.setCustomValidity('Имя персонажа больше 50 символов');
  } else {
    userName.setCustomValidity('');
  }
};


/**
 * Функция удаляет заданный класс в указанном элементе.
 * @param {object} elem элемент дом дерева
 * @param  {string} cls имя класса удаляемого из элемента
 */
var removeClass = function (elem, cls) {
  elem.classList.remove(cls);
};

/**
 * Функция добавляет заданный класс cls в указанном элементе (elem)
 * @param {object} elem элемент дом дерева
 * @param {string} cls имя класса добавляемого в элемента
 */
var addClass = function (elem, cls) {
  elem.classList.add(cls);
};

/**
 * Функция проверяет наличие заданного класса в указанном элементе
 * @param {object} elem элемент дом дерева
 * @param {string} cls имя класса добавляемого в элемента
 * @return {boolean} возращает true или false
 */
var checkContains = function (elem, cls) {
  return elem.classList.contains(cls);
};

/**
 * Функция закрытия профиля при нажатии .setup-close
 */
var closeProfile = function () {
  addClass(setup, 'invisible');
};


/**
 * Функция открытия профиля при нажатии .setup-open
 */
var openProfile = function () {
  removeClass(setup, 'invisible');
};

/**
 * Функция открытия профиля при нажатии .setup-open
 * Функция закрытия профиля при повторном нажатии .setup-open
 */
var openCloseProfile = function () {
  if (!checkContains(setup, 'invisible')) {
    closeProfile();
  } else {
    openProfile();
  }
};

/**
 * Функция счетчик
 * @param {object} arr массив вариантов цвета
 * @return {number} индекс цвета массива
 */
function makeCounter(arr) {
  var counter = 0;
  return function () {
    if (counter < arr.length) {
      return counter++;
    } else {
      counter = 0;
      return counter;
    }
  };
}

/**
 * Функции выбора цвета
 */
var currentIndexCoatColor = makeCounter(wizardCoatColor);
function changeWizardCoatColor() {
  wizardCoat.style.fill = wizardCoatColor[currentIndexCoatColor()];
}
var currentIndexEyesColor = makeCounter(wizardEyesColor);
function changeWizardEyesColor() {
  wizardEyes.style.fill = wizardEyesColor[currentIndexEyesColor()];
}
var currentIndexFireballColor = makeCounter(fireballColor);
function changeWizardFireballColor() {
  fireball.style.background = fireballColor[currentIndexFireballColor()];
}

userName.addEventListener('blur', validateName);
setupOpen.addEventListener('click', openCloseProfile);
setupClose.addEventListener('click', closeProfile);
wizardCoat.addEventListener('click', changeWizardCoatColor);
wizardEyes.addEventListener('click', changeWizardEyesColor);
fireball.addEventListener('click', changeWizardFireballColor);
