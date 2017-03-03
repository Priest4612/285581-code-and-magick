'use strict';

window.validateName = (function () {
  var userName = document.querySelector('.setup-user-name');

  return function () {
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
})();
