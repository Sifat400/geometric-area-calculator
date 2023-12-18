// // Triangle Calculation
document
  .getElementById("btn-triangle-area")
  .addEventListener("click", function () {
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height");
    // Input Validation
    if (isNaN(base) || isNaN(height)) {
      alert("Please insert Number");
      return;
    }
    const area = 0.5 * base * height;

    setElementInnerText("area-triangle", area);
  });

// // Rectangle  Calculation
document
  .getElementById("btn-rectangle-area")
  .addEventListener("click", function () {
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    // Input Validation
    if (isNaN(width) || isNaN(length)) {
      alert("Please insert Number");
      return;
    }
    const area = width * length;
    setElementInnerText("area-rectangle", area);
  });

// // parallelogram Calculation
document
  .getElementById("btn-parallelogram-area")
  .addEventListener("click", function () {
    const width = getInputValue("parallelogram-width");
    const length = getInputValue("parallelogram-length");
    // Input Validation
    if (isNaN(width) || isNaN(length)) {
      alert("Please insert Number");
      return;
    }
    const area = width * length;
    setElementInnerText("area-parallelogram", area);
  });

// // rombush Calculation
document
  .getElementById("btn-rhombus-area")
  .addEventListener("click", function () {
    const diagonal1 = getInputValue("rhombus-diagonal-1");
    const diagonal2 = getInputValue("rhombus-diagonal-2");
    // Input Validation
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
      alert("Please insert Number");
      return;
    }
    const area = 0.5 * diagonal1 * diagonal2;
    setElementInnerText("area-rhombus", area);
  });

// // Pentagon Calculation
document
  .getElementById("btn-pentagon-area")
  .addEventListener("click", function () {
    const perimeter = getInputValue("perimeter");
    const apothem = getInputValue("apothem");
    // Input Validation
    if (isNaN(perimeter) || isNaN(apothem)) {
      alert("Please insert Number");
      return;
    }
    const area = 0.5 * perimeter * apothem;
    setElementInnerText("area-pentagon", area);
  });

// // Ellipse Calculation
document
  .getElementById("btn-ellipse-area")
  .addEventListener("click", function () {
    console.log("hello");
    const a = getInputValue("ellipse-a");
    const b = getInputValue("ellipse-b");
    const pi = Math.PI;
    // Input Validation
    if (isNaN(a) || isNaN(b)) {
      alert("Please insert Number");
      return;
    }
    const area = pi * a * b;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("area-ellipse", areaTwoDecimal);
  });
