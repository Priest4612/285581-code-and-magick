'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
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
  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };
  return {
    ENTER_KEY_CODE: ENTER_KEY_CODE,
    isActivateEvent: isActivateEvent,
    getRandomElementExcept: getRandomElementExcept,
    getNextElement: getNextElement
  };
})();
