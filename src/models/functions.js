const createElement = function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createElementWithInnerText = function createElementWithInnerText(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = text;
  return element;
};

export {
  createElement,
  createElementWithInnerText,
};
