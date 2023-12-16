// // Triangle Calculation
document
  .getElementById("btn-triangle-area")
  .addEventListener("click", function () {
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height");
    const area = 0.5 * base * height;

    setElementInnerText("area-triangle", area);
  });

// // Rectangle  Calculation
document
  .getElementById("btn-rectangle-area")
  .addEventListener("click", function () {
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    const area = width * length;
    setElementInnerText("area-rectangle", area);
  });

// // parallelogram Calculation
document
  .getElementById("btn-parallelogram-area")
  .addEventListener("click", function () {
    const width = getInputValue("parallelogram-width");
    const length = getInputValue("parallelogram-length");
    const area = width * length;
    setElementInnerText("area-parallelogram", area);
  });

// // rombush Calculation
document
  .getElementById("btn-rhombus-area")
  .addEventListener("click", function () {
    const diagonal1 = getInputValue("rhombus-diagonal-1");
    const diagonal2 = getInputValue("rhombus-diagonal-2");
    const area = 0.5 * diagonal1 * diagonal2;
    setElementInnerText("area-rhombus", area);
  });

// // Pentagon Calculation
document
  .getElementById("btn-pentagon-area")
  .addEventListener("click", function () {
    const perimeter = getInputValue("perimeter");
    const apothem = getInputValue("apothem");
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
    const area = pi * a * b;
    setElementInnerText("area-ellipse", area);
  });
