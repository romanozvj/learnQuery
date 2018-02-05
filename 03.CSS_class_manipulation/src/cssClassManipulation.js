var cssClass = (function () {
  'use strict'

  return {
    add: function(element, class) {
      element.classList.add(class);
    }
    remove: function(element, class) {
      element.classList.remove(class)
    }
    toggle: function(element, class) {
      element.classList.toggle(class);
    }
    has: function(element, class) {
      element.classList.contains(class);
    }
  }
})()