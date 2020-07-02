const sayHello = name => {
  console.log('Hi ' + name);
}

////////////////////// Task 2 complete
const sayHello1 = (name, phrase) => {
  console.log(`${phrase} ${name}`);
}

const sayHello2 = () => {
  console.log('Hi Satx!');
}

const sayHello3 = name => 'Hi ' + name;

sayHello('Satx');
sayHello1('Satx', 'Hello');
sayHello2();
console.log(sayHello3('Satx'));