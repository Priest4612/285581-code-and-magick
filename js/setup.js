'use strict';
(function () {
  // var ESCAPE_KEY_CODE = 27;

  // var overlay = document.querySelector('.overlay');
  // var setupOpen = document.querySelector('.setup-open');
  // var setupClose = document.querySelector('.setup-close');
  // var userName = document.querySelector('.setup-user-name');
  // var wizardForm = document.querySelector('.setup-wizard-form');

  // Валидация формы
  // // Функция пока что не реализована
  // var validateName = function () {
  //   userName.required = true;
  //   if (!userName.value.length) {
  //     userName.setCustomValidity('Заполните имя персонажа');
  //     return true;
  //   } else if (userName.value.length > 50) {
  //     userName.setCustomValidity('Имя персонажа больше 50 символов');
  //     return true;
  //   } else {
  //     userName.setCustomValidity('');
  //     return false;
  //   }
  // };

  window.enableSetup.activateOpenProfile();
  window.enableSetup.activateCloseProfile();
  window.enableSetup.activateSaveButton();

    // wizardForm.addEventListener('submit', function (evt) {
    //   if (validateName()) {
    //     evt.preventDefault();
    //   } else {
    //     closeProfile();
    //     evt.preventDefault();
    //   }
    //   evt.target.addEventListener('keydown', function () {
    //     if (window.utils.isActivateEvent(evt)) {
    //       if (validateName()) {
    //         evt.preventDefault();
    //       } else {
    //         closeProfile();
    //         evt.preventDefault();
    //       }
    //     }
    //   });
    // });

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
})();
