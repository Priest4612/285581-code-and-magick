'use strict';
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var userName = setup.querySelector('.setup-user-name');
var setupButton = setup.querySelector('.setup-submit');
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
 * Функция проверяет наличие заданного класса в указанном элементе
 * @param {object} elem элемент дом дерева
 * @param {string} cls имя класса добавляемого в элемента
 * @return {boolean} возращает true или false
 */
var checkContains = function (elem, cls) {
  return elem.classList.contains(cls);
};
var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
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
/**
 * Функция счетчик
 * @param {object} arr массив вариантов цвета
 * @return {number} индекс цвета массива
 */
function makeCounter(arr) {
  var counter = 0;
  return function () {
    if (counter < arr.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    return arr[counter];
  };
}
/**
  * Обытие изменение цвета
  */
var currentIndexCoatColor = makeCounter(wizardCoatColor);
var currentIndexEyesColor = makeCounter(wizardEyesColor);
var currentIndexFireballColor = makeCounter(fireballColor);
setupWizardForm.addEventListener('click', function (evt) {
  var target = evt.target;
  while (target !== wizard) {
    if (target === wizardCoat) {
      wizardCoat.style.fill = currentIndexCoatColor();
      return;
    } else if (target === wizardEyes) {
      wizardEyes.style.fill = currentIndexEyesColor();
      return;
    } else if (target === fireball) {
      fireball.style.background = currentIndexFireballColor();
      return;
    }
    target = target.parentNode;
  }
});

userName.addEventListener('blur', validateName);
setupOpen.addEventListener('click', openCloseProfile);
setupClose.addEventListener('click', closeProfile);
setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    openCloseProfile();
  }
});
setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeProfile();
  }
});
setupButton.addEventListener('click', function () {
  closeProfile();
});
setupButton.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeProfile();
  }
});
