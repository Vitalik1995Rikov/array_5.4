function inputNumber() {
  let arr = [];
  while (true) {
    let num = prompt('Введи значение', 0);
    if (num === '' || num === null) break;
    arr.push(+num);
  }
  
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

alert(inputNumber());

