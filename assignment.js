const sayHello = name => {
  console.log('Hi ' + name);
}

const sayHello1 = (name, phrase = 'Hi') => {
  console.log(`${phrase} ${name}`);
}

const sayHello2 = () => {
  console.log('Hi Satx!');
}

const sayHello3 = name => 'Hi ' + name;

//////////////// Task 4 complete
const checkInput = (emptyHandler, ...strs) => {
  let checkEmpty = false;
  for (str of strs) {
    if (!str) {
      checkEmpty = true;
    }
  }

  if (checkEmpty) {
    emptyHandler();
  }
};

const displayMessage = () => alert('One of the strings in your list is empty!!');

sayHello('Satx');
sayHello1('Satx', 'Hello');
sayHello2();
console.log(sayHello3('Satx'));
checkInput(displayMessage, 'fg', 's', 'a', '', 'san', 'tanu');