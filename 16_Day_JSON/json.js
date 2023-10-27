
 {
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }
   
    //Exemple:
    
    {
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    Conversion de JSON en objet JavaScript
    La plupart du temps, nous récupérons les données JSON à partir d'une réponse HTTP ou d'un fichier, mais nous pouvons stocker le JSON sous forme de chaîne et nous pouvons passer à Object à des fins de démonstration. En JavaScript, le mot-clé JSON possède les méthodes parse() et stringify() . Lorsque nous voulons changer le JSON en objet, nous analysons le JSON en utilisant JSON.parse() . Lorsque nous voulons changer l'objet en JSON, nous utilisons JSON.stringify() .
    
    JSON.parse()
    JSON.parse(json[, reviver])
    // json or text , the data
    // reviver is an optional callback function
    /* JSON.parse(json, (key, value) => {
    
    })
    */
    const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    //const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)
    // Utiliser une fonction reviver avec JSON.parse()
    // Pour utiliser la fonction reviver comme formateur, nous mettons les clés que nous voulons formater la valeur du prénom et du nom. Disons que nous souhaitons formater le prénom et le nom des données JSON.
    
    const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj)
    //Le JSON.parse() est très pratique à utiliser. Vous n'êtes pas obligé de transmettre un paramètre facultatif, vous pouvez simplement l'utiliser avec le paramètre requis et vous obtiendrez beaucoup de choses.
    
   
    JSON.stringify(obj, replacer, space)
    // json or text , the data
    // reviver is an optional callback function
   
    const users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Redux',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }
    
    const txt = JSON.stringify(users, undefined, 4)
    console.log(txt) // text means JSON- because json is a string form of an object.
    {
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    // Utilisation d'un tableau de filtres avec JSON.stringify
    // Maintenant, utilisons le remplaçant comme filtre. L'objet utilisateur a une longue liste de clés mais nous ne nous intéressons qu'à quelques-unes d'entre elles. Nous mettons les clés que nous voulons conserver dans le tableau comme le montre l'exemple et les utilisons à la place du remplaçant.
    
    const user = {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      country: 'Finland',
      city: 'Helsinki',
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
      age: 250,
      isLoggedIn: false,
      points: 30
    }
    
    const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
    console.log(txt)
    {
        "firstName": "Asabeneh",
        "lastName": "Yetayeh",
        "country": "Finland",
        "city": "Helsinki",
        "age": 250
    }
 
    //Des exercices
    const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
    let age = 250;
    let isMarried = true
    const student = {
      firstName:'Asabeneh',
      lastName:'Yetayehe',
      age:250,
      isMarried:true,
      skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
    }
    const txt = `{
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    `