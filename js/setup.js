'use strict';
var ESCAPE_KEY_CODE = 27;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var wizardForm = setup.querySelector('.setup-wizard-form');

// Валидация формы
// Функция пока что не реализована
var validateName = function () {
  userName.required = true;
  if (!userName.value.length) {
    userName.setCustomValidity('Заполните имя персонажа');
    return true;
  } else if (userName.value.length > 50) {
    userName.setCustomValidity('Имя персонажа больше 50 символов');
    return true;
  } else {
    userName.setCustomValidity('');
    return false;
  }
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

var setupKeydownHandler = function (evt) {
  if (evt.target !== document.querySelector('input') && evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};
/**
 * Функция закрытия профиля при нажатии .setup-close
 */
var closeProfile = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
  userName.removeEventListener('keyup', validateName);
  setupOpen.setAttribute('aria-pressed', 'false');
};
/**
 * Функция открытия профиля при нажатии .setup-open
 */
var openProfile = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
  setupOpen.setAttribute('aria-pressed', 'true');
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

userName.addEventListener('blur', validateName);
setupOpen.addEventListener('click', openCloseProfile);
setupClose.addEventListener('click', closeProfile);
setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    openCloseProfile();
  }
});
setupClose.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    closeProfile();
  }
});

wizardForm.addEventListener('submit', function (evt) {
  if (validateName()) {
    evt.preventDefault();
  } else {
    closeProfile();
    evt.preventDefault();
  }
  evt.target.addEventListener('keydown', function () {
    if (window.utils.isActivateEvent(evt)) {
      if (validateName()) {
        evt.preventDefault();
      } else {
        closeProfile();
        evt.preventDefault();
      }
    }
  });
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
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
window.colorizeElement.colorizeNext(wizardCoat, wizardCoatColor, 'fill');
window.colorizeElement.colorizeRandom(wizardEyes, wizardEyesColor, 'fill');
window.colorizeElement.colorizeNext(fireball, fireballColor, 'background');
