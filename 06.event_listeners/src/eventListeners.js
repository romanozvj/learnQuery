var eventListener = (function() {
  'use strict';
  let counter = 0;
  return {
    on: function () {
      //console.log(arguments);
      let selectedElement = arguments[0];
      let event = arguments[1];
      let oneCall = Object.assign({}, arguments[2]);
      let twoCall = Object.assign({}, arguments[2]);
      selectedElement.addEventListener(event, callback);
    }
  }
})();