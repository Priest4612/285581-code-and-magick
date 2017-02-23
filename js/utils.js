'use strict';
window.utils = {
  ENTER_KEY_CODE: 13,
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  getRandomElementExcept: function (currentColor, array) {
    var newColor;
    while (!newColor || newColor === currentColor) {
      newColor = this.getRandomElement(array);
    }
    return newColor;
  },
  getNextElement: function (array) {
    var counter = 0;
    return function () {
      if (counter < array.length) {
        counter++;
      } else {
        counter = 0;
      }
      return array[counter];
    };
  },
  isActivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === this.ENTER_KEY_CODE;
  }
};
