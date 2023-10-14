class Calculator {
  constructor(previousAnsTextElement, currentAnsTextElement) {
    this.previousAnsTextElement = previousAnsTextElement;
    this.currentAnsTextElement = currentAnsTextElement;
    this.clear();
  }

  clear() {
    this.currentAns = "";
    this.previousAns = "";
    this.operation = undefined;
  }

  delete() {
    this.currentAns = this.currentAns.slice(0, -1);
  }

  appendNumber(number) {
    if (number == "." && this.currentAns.includes(".")) return;
    this.currentAns += number.toString();
  }

  chooseOperation(operation) {
    if (this.currentAns == "") return;
    if (this.previousAns !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousAns = this.currentAns;
    this.currentAns = "";
  }

  compute() {
    let ans;
    const prevAns = parseFloat(this.previousAns);
    const curAns = parseFloat(this.currentAns);
    if (isNaN(prevAns) || isNaN(curAns)) return;

    switch (this.operation) {
      case "+":
        ans = prevAns + curAns;
        break;
      case "-":
        ans = prevAns - curAns;
        break;
      case "/":
        ans = prevAns / curAns;
        break;
      case "*":
        ans = prevAns * curAns;
        break;
      default:
        return;
    }
    this.currentAns = ans;
    this.operation = undefined;
    this.previousAns = "";
  }

  updateDisplay() {
    this.currentAnsTextElement.innerText = this.currentAns;
    if (this.operation != undefined) {
      this.previousAnsTextElement.innerText = `${this.previousAns} ${this.operation}`;
    } else this.previousAnsTextElement.innerText = this.previousAns;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-allClear]");
const previousAnsTextElement = document.querySelector("[data-previousAns]");
const currentAnsTextElement = document.querySelector("[data-currentAns]");

const calculator = new Calculator(
  previousAnsTextElement,
  currentAnsTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
