var domSelector = function(selectors) {
	'use strict';
  const selectedElements = document.querySelectorAll(selectors);
  const array = Array.from(selectedElements);
  return array;
}