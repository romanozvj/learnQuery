var dom = function () {
}

dom.remove = function (element) {
  let elementExists = document.getElementById(element.id);
  if (!elementExists) return;
  element.parentNode.removeChild(element);
}
dom.append = function (targetElement, element) {
  targetElement.appendChild(element);
}
dom.prepend = function (targetElement, element) {
  targetElement.prepend(element);
}
dom.before = function (targetElement, element) {
  targetElement.parentNode.insertBefore(element, targetElement);
}
dom.after = function (targetElement, element) {
  try {
    targetElement.parentNode.insertBefore(element, targetElement.nextSibling);
  }
  catch (err) {
    console.log(err);
  }
}
dom.val = function (element) {
  return element.value;
}