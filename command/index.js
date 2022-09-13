class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtrackCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}


const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10))
console.log(calculator.value, 'After add 10')
calculator.undo();
console.log(calculator.value, 'After undo')
calculator.executeCommand(new AddCommand(6))
console.log(calculator.value, 'After add 6')
calculator.executeCommand(new DivideCommand(2))
console.log(calculator.value, 'After divide 2')
calculator.executeCommand(new MultiplyCommand(5)) 
console.log(calculator.value, 'After multiply 5')
calculator.executeCommand(new SubtrackCommand(1))
console.log(calculator.value, 'After subtrack 1')
console.log(calculator.history, 'history')
calculator.undo();
console.log(calculator.value, 'after undo 1')
calculator.undo();
console.log(calculator.value, 'after undo 2')
calculator.undo();
console.log(calculator.value, 'after undo 3')
