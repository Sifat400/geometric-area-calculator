function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

function getElementText(elementId) {
  const elementText = document.getElementById(elementId);
  const element = elementText.innerText;
  return element;
}

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// // Add calculator entry
function addCalculatorEntry(areaType, area) {
  const calculatorEntry = document.getElementById("add-calculator-entry");
  const count = calculatorEntry.childElementCount;
  const p = document.createElement("p");
  // p.classList.add("my-1");
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="px-3 py-1 ml-1 font-semibold mt-6 rounded-lg bg-sky-500 hover:bg-sky-600 text-white">Convert m<sup>2</sup></button>`;
  calculatorEntry.appendChild(p);
}
