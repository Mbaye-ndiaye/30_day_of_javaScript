//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses
  //Fonction sans paramètre et retour
  //La fonction peut être déclarée sans paramètre.
  
  Exemple:
  
  // function without parameter,  a function which make a number square
  function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed 
    function printFullName (){
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        let space = ' '
        let fullName = firstName + space + lastName
        console.log(fullName)
  }
  
  printFullName() // calling a function
  //Fonction renvoyant la valeur
  //La fonction peut également renvoyer des valeurs, si une fonction ne renvoie pas de valeurs, la valeur de la fonction n'est pas définie. Écrivons les fonctions ci-dessus avec retour. Désormais, nous renvoyons la valeur à une fonction au lieu de l'imprimer.
  
  function printFullName (){
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        let space = ' '
        let fullName = firstName + space + lastName
        return fullName
  }
  console.log(printFullName())
    function addTwoNumbers() {
        let numOne = 2
        let numTwo = 3
        let total = numOne + numTwo
        return total
  
    }
  
  console.log(addTwoNumbers())
  //Fonction avec un paramètre
  //Dans une fonction, nous pouvons passer différents types de données (nombre, chaîne, booléen, objet, fonction) en paramètre.
  
  // function with one parameter
  function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))
  //Fonction avec deux paramètres
  // function with two parameters
  function functionName(parm1, parm2) {
    //code goes her
  }
  functionName(parm1, parm2) // during calling or invoking two arguments needed
  // Function without parameter doesn't take input, so lets make a function with parameters
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20))
  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))
  //Fonction avec de nombreux paramètres
  // function with multiple parameters
  function functionName(parm1, parm2, parm3){
    //code goes here
  }
  functionName(parm1,parm2,parm3) // during calling or invoking three arguments needed
  
  
  // this function takes array as a parameter and sum up the numbers in the array
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
      const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
      }
  console.log(areaOfCircle(10))
  //Fonction avec un nombre illimité de paramètres
  //Parfois, nous ne savons pas combien d’arguments l’utilisateur va transmettre. Il faut donc savoir écrire une fonction pouvant prendre un nombre illimité d’arguments. La façon dont nous procédons présente une différence significative entre une déclaration de fonction (fonction régulière) et une fonction fléchée. Voyons des exemples à la fois dans la déclaration de fonction et dans la fonction flèche.
  
  //Nombre illimité de paramètres en fonction régulière
  //Une déclaration de fonction fournit un tableau d'arguments de fonction comme un objet. Tout ce que nous avons passé comme argument dans la fonction est accessible à partir de l'objet arguments à l'intérieur des fonctions. Voyons un exemple
  
  // Let us access the arguments object
  ​
  function sumAllNums() {
   console.log(arguments)
  }
  
  sumAllNums(1, 2, 3, 4)
  // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  // function declaration
  ​
  function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
  //Nombre illimité de paramètres dans la fonction flèche
  //La fonction flèche n’a pas l’objet arguments étendu à la fonction. Pour implémenter une fonction qui prend un nombre illimité d'arguments dans une fonction fléchée, nous utilisons l'opérateur spread suivi de n'importe quel nom de paramètre. Tout ce que nous avons passé en argument dans la fonction est accessible sous forme de tableau dans la fonction flèche. Voyons un exemple
  
  // Let us access the arguments object
  ​
  const sumAllNums = (...args) => {
   // console.log(arguments), arguments object not found in arrow function
   // instead we use a parameter followed by spread operator (...)
   console.log(args)
  }
  
  sumAllNums(1, 2, 3, 4)
  // [1, 2, 3, 4]
  // function declaration
  ​
  const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
  //Fonction anonyme
  //Fonction anonyme ou sans nom
  
  const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }
  //Fonction d'expression
  //Les fonctions d'expression sont des fonctions anonymes. Après, nous créons une fonction sans nom et nous l'attribuons à une variable. Pour renvoyer une valeur de la fonction, nous devons appeler la variable. Regardez l'exemple ci-dessous.
  
  // Function expression
  const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4
  //Fonctions d'auto-invocation
  //Les fonctions auto-invoquantes sont des fonctions anonymes qui n'ont pas besoin d'être appelées pour renvoyer une valeur.
  
  (function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)
  //Fonction flèche
  //La fonction flèche est une alternative pour écrire une fonction, cependant la déclaration de fonction et la fonction flèche présentent quelques différences mineures.
  
  //La fonction flèche utilise une flèche au lieu du mot-clé fonction pour déclarer une fonction. Voyons à la fois la déclaration de fonction et la fonction flèche.
  
  // This is how we write normal or declaration function
  // Let us change this declaration function to an arrow function
  function square(n) {
    return n * n
  }
  
  console.log(square(2)) // 4
  
  const square = n => {
    return n * n
  }
  
  console.log(square(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const square = n => n * n  // -> 4
  const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))
  //La fonction ci-dessus n'a que l'instruction return, nous pouvons donc la renvoyer explicitement comme suit.
  
  const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))
  //Fonction avec paramètres par défaut
  //Parfois, nous transmettons des valeurs par défaut aux paramètres. Lorsque nous invoquons la fonction, si nous ne transmettons pas d'argument, la valeur par défaut sera utilisée. La déclaration de fonction et la fonction fléchée peuvent avoir une ou plusieurs valeurs par défaut.
  
  // syntax
  // Declaring a function
  function functionName(param = value) {
    //codes
  }
  
  // Calling function
  functionName()
  functionName(arg)
  Exemple:
  
  function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))
  function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))
  function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))
  function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
  }
  
  console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
  //Voyons comment nous écrivons les fonctions ci-dessus avec les fonctions fléchées
  
  // syntax
  // Declaring a function
  const functionName = (param = value) => {
    //codes
  }
  
  // Calling function
  functionName()
  functionName(arg)
  Exemple:
  
  const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))
  const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))
  const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
  console.log('Age: ', calculateAge(1819))
  const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
    
  console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon