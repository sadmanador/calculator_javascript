let first_figure = [];
let selectedMathCharacter = [];
let second_figure = [];

const numbers = document.querySelectorAll(".number");
for (let number of numbers) {
  number.addEventListener("click", (event) => {
    const pressedNum = event.target.innerText;
    if (selectedMathCharacter.length == 0) {
      first_figure.push(parseFloat(pressedNum));
      const valueX = first_figure.join("");
      document.getElementById("display").value = valueX;
    } else {
      second_figure.push(parseFloat(pressedNum));
      const valueY = second_figure.join("");
      document.getElementById("display").value = valueY;
    }
  });
}

const mathFuncs = document.querySelectorAll(".mathCharacter");
for (let math of mathFuncs) {
  math.addEventListener("click", (event) => {
    const pressedChar = event.target.innerText;
    selectedMathCharacter[0] = pressedChar;
  });
}

document.getElementById("equal").addEventListener("click", () => {
  let result = 0;

  if (second_figure.length > 0) {
    const valueX = first_figure.join("");

    const valueY = second_figure.join("");

    const mathCharacterFinal = selectedMathCharacter.join("");

    switch (mathCharacterFinal) {
      case "+":
        result = parseFloat(valueX) + parseFloat(valueY);
        break;
      case "-":
        result = valueX - valueY;
        break;
      case "x":
        result = valueX * valueY;
        break;
      case "÷":
        result = valueX / valueY;
        break;

      default:
        result = 0;
    }
  }

  document.getElementById("display").value = result;
});

document.getElementById("clear").addEventListener("click", () => {
  first_figure = [];
  selectedMathCharacter = [];
  second_figure = [];

  document.getElementById("display").value = 0;
});
