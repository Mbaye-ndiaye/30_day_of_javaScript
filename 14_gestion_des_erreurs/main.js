// try {
//     // code that may throw an error
//   } catch (err) {
//     // code to be executed if an error occurs
//   } finally {
//     // code to be executed regardless of an error occurs or not
//   }


  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

  /**
   * ReferenceError: fistName is not defined
    at <anonymous>:4:20
   */

    try {
        let lastName = 'Yetayeh'
        let fullName = fistName + ' ' + lastName
      } catch (err) {
        console.error(err) // we can use console.log() or console.error()
      } finally {
        console.log('In any case I will be executed')
      }

      /**
       * ReferenceError: fistName is not defined
        at <anonymous>:4:20
        In any case it  will be executed
       */

        try {
            let lastName = 'Yetayeh'
            let fullName = fistName + ' ' + lastName
          } catch (err) {
            console.log('Name of the error', err.name)
            console.log('Error message', err.message)
          } finally {
            console.log('In any case I will be executed')
          }


          /**
           * Name of the error ReferenceError
            Error message fistName is not defined
            In any case I will be executed
           */

            /**
             * throw 'Error2' // generates an exception with a string value
                throw 42 // generates an exception with the value 42
                throw true // generates an exception with the value true
                throw new Error('Required') // generates an error object with the message of Required
             */

                const throwErrorExampleFun = () => {
                    let message
                    let x = prompt('Enter a number: ')
                    try {
                      if (x == '') throw 'empty'
                      if (isNaN(x)) throw 'not a number'
                      x = Number(x)
                      if (x < 5) throw 'too low'
                      if (x > 10) throw 'too high'
                    } catch (err) {
                      console.log(err)
                    }
                  }
                  throwErrorExampleFun()

                  //Types d'erreurs

                  /**
                   * ReferenceError : une référence illégale s'est produite. 
                   * Une ReferenceError est levée si nous utilisons une variable 
                   * qui n'a pas été déclarée.
                   */

                  //SyntaxError : une erreur de syntaxe s'est produite

            //       let square = 2 x 2,
            //     console.log(square)
            // console.log('Hello, world")