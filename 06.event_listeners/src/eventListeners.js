var eventListener = (function () {
  'use strict';
  let listeners = [];
  return {
    on: function (element, event, callback) {
      const findIndexOfListener = function () {
        return listeners.findIndex(function (elem) {
          return elem.id === element.id && elem.event === event;
        })
      }
      let indexOfListener = findIndexOfListener();
      const actualCallback = function () {
        for (let i = 0; i < listeners[indexOfListener].callbacks.length; i++) {
          listeners[indexOfListener].callbacks[i]();
        }
      }
      if (indexOfListener < 0) {
        listeners.push({
          id: element.id,
          event: event,
          callbacks: [callback]
        });
        indexOfListener = findIndexOfListener();
        element.addEventListener(event, actualCallback);
      }
      else {
        listeners[indexOfListener].callbacks.push(callback);
      }

      //console.log(listeners);
      console.log(arguments[2].toString());



    },

    off: function () {
      console.log(arguments[2].name);
    }

  }
})();