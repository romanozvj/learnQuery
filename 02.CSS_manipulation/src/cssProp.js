function cssProp() {
  'use strict';

  let computedStyle = window.getComputedStyle(arguments[0]);
  let elemento = arguments[0];
  let amountOfValue = computedStyle.getPropertyValue(arguments[1]);
  let property = arguments[1];
  let value = arguments[2];
  let stringerini = property + ": " + value;
  if (typeof property === "object") {
    let arrayOfProps = Object.keys(property);
    for (let i = 0; i < arrayOfProps.length; i++) {
      elemento.style[arrayOfProps[i]] = property[arrayOfProps[i]];
    }
  }

  if (arguments[2] === undefined) {
    return amountOfValue;
  }
  else {
    elemento.style[property] = value;
    // elemento.setAttribute("style", stringerini);
  }
}