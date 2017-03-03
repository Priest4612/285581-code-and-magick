'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (event) {
    return typeof event.keyCode !== 'undefined';
  };

  var isActivateEvent = function (event) {
    return isKeyboardEvent(event) && event.keyCode === ENTER_KEY_CODE;
  };
  var isDeactivateEvent = function (event) {
    return isKeyboardEvent(event) && event.keyCode === ESCAPE_KEY_CODE;
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };
  var getRandomElementExcept = function (currentColor, array) {
    var newColor;
    while (!newColor || newColor === currentColor) {
      newColor = getRandomElement(array);
    }
    return newColor;
  };
  var getNextElement = function (array) {
    var counter = 0;
    return function () {
      if (counter < array.length) {
        counter++;
      } else {
        counter = 0;
      }
      return array[counter];
    };
  };

  return {
    isActivateEvent: isActivateEvent,
    isDeactivateEvent: isDeactivateEvent,
    getRandomElementExcept: getRandomElementExcept,
    getNextElement: getNextElement
  };
})();
