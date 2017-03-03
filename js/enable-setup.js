'use strict';

window.enableSetup = (function () {
  var cssClassInvisible = 'invisible';
  var overlay = document.querySelector('.overlay');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardForm = document.querySelector('.setup-wizard-form');

  var addClass = function (element, cssClass) {
    element.classList.add(cssClass);
  };
  var removeClass = function (element, cssClass) {
    element.classList.remove(cssClass);
  };

  var isTargetInput = function (event) {
    var targetInput = document.querySelector('input');
    return event.target === targetInput;
  };

  var setupKeydownHandler = function (event) {
    if (!isTargetInput(event) && window.utils.isDeactivateEvent(event)) {
      addClass(overlay, cssClassInvisible);
    }
  };

  var openProfile = function () {
    removeClass(overlay, cssClassInvisible);
    document.addEventListener('keydown', function (event) {
      setupKeydownHandler(event);
    });
    setupOpen.setAttribute('aria-pressed', 'true');
  };

  var closeProfile = function () {
    addClass(overlay, cssClassInvisible);
    document.removeEventListener('keydown', function (event) {
      setupKeydownHandler(event);
    });
    setupOpen.setAttribute('aria-pressed', 'false');
  };

  var checkSubmit = function (event) {
    if (window.validateName()) {
      event.preventDefault();
    } else {
      closeProfile();
    }
  };

  var activateSaveButton = function () {
    wizardForm.addEventListener('submit', function (event) {
      checkSubmit(event);
      event.target.addEventListener('keydown', function () {
        if (window.utils.isActivateEvent(event)) {
          checkSubmit(event);
        }
      });
      event.preventDefault();
    });
  };

  return {
    activateOpenProfile: function () {
      setupOpen.addEventListener('click', openProfile);
      setupOpen.addEventListener('keydown', function (event) {
        if (window.utils.isActivateEvent(event)) {
          openProfile();
        }
      });
    },
    activateCloseProfile: function () {
      setupClose.addEventListener('click', closeProfile);
      setupClose.addEventListener('keydown', function (event) {
        if (window.utils.isActivateEvent(event)) {
          closeProfile();
        }
      });
    },
    activateSaveButton: activateSaveButton
  };
})();
