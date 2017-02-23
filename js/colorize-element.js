'use strict';
window.colorizeElement = {
  colorizeRandom: function (element, colors, property) {
    var currentColor = colors[0];
    element.addEventListener('click', function () {
      currentColor = window.utils.getRandomElementExcept(currentColor, colors);
      element.style[property] = currentColor;
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        currentColor = window.utils.getRandomElementExcept(currentColor, colors);
        evt.currentTarget.style[property] = currentColor;
      }
    });
  },
  colorizeNext: function (element, colors, property) {
    var currentColor;
    currentColor = window.utils.getNextElement(colors);
    element.addEventListener('click', function () {
      element.style[property] = currentColor();
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        evt.currentTarget.style[property] = currentColor();
      }
    });
  }
};
