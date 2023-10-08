
let num1 = 3
if (num1 > 0) {
  console.log(`${num1} is a positive number`)
}

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

// syntax
if (condition) {
    // this part of code runs for truthy condition
  } else {
    // this part of code runs for false condition
  }
  

  let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}

let isRaining1 = true
if (isRaining1) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.


// syntax
if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

}


let a = 0
if (a > 0) {
 console.log(`${a} is a positive number`)
} else if (a < 0) {
 console.log(`${a} is a negative number`)
} else if (a == 0) {
 console.log(`${a} is zero`)
} else {
 console.log(`${a} is not a number`)
}


// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
  }
  let weather1 = 'cloudy'
  switch (weather1) {
    case 'rainy':
      console.log('You need a rain coat.')
      break
    case 'cloudy':
      console.log('It might be cold, you need a jacket.')
      break
    case 'sunny':
      console.log('Go out freely.')
      break
    default:
      console.log(' No need for rain coat.')
  }
  
  // Switch More Examples
  let dayUserInput = prompt('What day is today ?')
  let day = dayUserInput.toLowerCase()
  
  switch (day) {
    case 'monday':
      console.log('Today is Monday')
      break
    case 'tuesday':
      console.log('Today is Tuesday')
      break
    case 'wednesday':
      console.log('Today is Wednesday')
      break
    case 'thursday':
      console.log('Today is Thursday')
      break
    case 'friday':
      console.log('Today is Friday')
      break
    case 'saturday':
      console.log('Today is Saturday')
      break
    case 'sunday':
      console.log('Today is Sunday')
      break
    default:
      console.log('It is not a week day.')
  }

  let num2 = prompt('Enter number');
switch (true) {
  case num2 > 0:
    console.log('Number is positive');
    break;
  case num2 == 0:
    console.log('Numbers is zero');
    break;
  case num2 < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

let isRaining2 = true;
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')