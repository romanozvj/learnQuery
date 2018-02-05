var cssClass = (function () {
  'use strict'

  return {
    add: function(element, className) {
      element.classList.add(className);
    },
    remove: function(element, className) {
      element.classList.remove(className)
    },
    toggle: function(element, className) {
      element.classList.toggle(className);
    },
    has: function(element, className) {
      return element.classList.contains(className);
    }
  }
})()