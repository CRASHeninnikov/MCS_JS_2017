window.onload = function() {

  function replace(string) {
    return string.replace(/ /g, '__');
  }

  console.log(replace('Каждый охотник желает знать где сидит фазан'));
}

// window.onload = function() {
//
//   function concat(string1, string2) {
//     return string1 + string2;
//   }
//
//   console.log(concat('Hello', 'World'));
// }

// window.onload = function() {
//
//   function isNull(array) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === 0) {
//         return true;
//       }
//     }
//     return false;
//   }
//
//   var myArray = [78, 23, 89, 0, 34, 72];
//
//   console.log(isNull(myArray));
// }

// window.onload = function() {
//   for (var i = 10; i < 1001; i = i + 10) {
//     console.log(i);
//   }
// }

// window.onload = function() {
//
//   var myArray = [1, 2, 3, 4, 5];
//
//   function printArrayInfo(array) {
//     console.log(array.length);
//     console.log(array[0]);
//     console.log(array[array.length - 1]);
//   }
//   printArrayInfo(myArray);
// }

// window.onload = function() {
//
//   var car = {
//     mark: 'Kia',
//     model: 'Soul',
//     maxSpeed: 150,
//
//     time: function(range) {
//       return (range / this.maxSpeed) * 3600;
//     }
//
//   }
//
//   var time = car.time(1000);
//   console.log(time);
//
// }
  // function getSum(number1, number2) {
  //   if (number1 === undefined || number2 === undefined) {
  //     return 'Аргумент не передан!';
  //   } else {
  //     return number1 + number2;
  //   }
  // }
  //
  // var sum = getSum(56, 198);
  // console.log(sum)
  // var sum = getSum(56);
  // console.log(sum)

  // function printName(name) {
  //   if (name === undefined) {
  //     console.log(undefined);
  //   } else {
  //     console.log(name);
  //   }
  // }
  //
  // printName('John');
  // printName();

  // var a = 'Andrew';
  //
  // printName(a);



// window.onload = function() {
//
//   var numberBirth = parseInt(prompt('Введите ваш год рождения'));
//
//   if (numberBirth > 1999) {
//     alert('Вам нет 18 лет');
//   } else if (numberBirth <= 1999) {
//
//     var numberOne = parseInt(prompt('Введите любое число'));
//     var numberTwo = parseInt(prompt('Теперь введите любое другое число'));
//     var numberOperation = parseInt(prompt('А теперь введите число от 1 до 4'));
//     var result;
//
//       if (numberOperation === 1) {
//         result = numberOne + numberTwo;
//         alert(numberOne + ' + ' + numberTwo + ' = ' + result);
//       } else if (numberOperation === 2) {
//         alert(numberOne - numberTwo);
//       } else if (numberOperation === 3) {
//         alert(numberOne * numberTwo);
//       } else if (numberOperation === 4) {
//         if (numberTwo === 0) {
//           alert('На ноль делить нельзя');
//         } else {
//           alert(numberOne / numberTwo);
//         }
//       }
//   }
// }
  // var numberYear = parseInt (prompt('Введите нынешний год'));
  // var numberDate = parseInt (prompt('Введите сегодняшнее число'));
  //
  // // numberYear = parseInt (numberYear);
  // // numberDate = parseInt (numberDate);
  //
  // if (numberYear > numberDate) {
  //   alert('numberYear > numberDate');
  // } else if (numberDate > numberYear){
  //   alert('numberYear < numberDate');
  // } else {
  //   alert('Они равны');
  // }

  // alert(numberYear + numberDate);
  // alert(numberYear - numberDate);
  // alert(numberYear === numberDate);
  // alert(++numberYear > numberDate++ || numberYear < numberDate);
