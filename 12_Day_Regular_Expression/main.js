//Création d'un modèle avec le constructeur RegExp
/*
Déclarer une expression régulière sans indicateur global
 ni indicateur insensible à la casse.*/ 
// without flag

let patternn = 'love'
let regExp = new RegExp(pattern)


/*
Déclaration d'une expression régulière avec un indicateur global et 
un indicateur insensible à la casse.
 */

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

/**
Déclaration d'un modèle regex à l'aide de l'objet RegExp.
 Écrire le modèle et le drapeau dans le constructeur RegExp
 */

 let regEx = new RegExp('love','gi')

 //Création d'un modèle sans constructeur RegExp

 let regEx= /love/gi

 /**
  L'expression régulière ci-dessus est 
  la même que celle que nous avons créée avec le constructeur RegExp
  */

  //Méthodes des objets RegExpp

  //test() :Teste une correspondance dans une chaîne. Il renvoie vrai ou faux.

  const strr = 'I love JavaScript'
const patterna = /love/
const results = pattern.test(strr)
console.log(result)

//Tableau contenant toute la correspondance

/**
 * match() : renvoie un tableau contenant toutes les correspondances, 
 * y compris les groupes de capture, ou null si aucune correspondance 
 * n'est trouvée. Si nous n'utilisons pas d'indicateur global, 
 * match() renvoie un tableau contenant le modèle, l'index, 
 * l'entrée et le groupe.
 */

const str = 'I love JavaScript'
const pattern = /love/
const resultat = str.match(pattern)
console.log(result)

const lang = 'I love JavaScript'
const pattern = /love/g
const result = lang.match(pattern)
console.log(result)

/**
 * search() : Teste une correspondance dans une chaîne. 
 * Il renvoie l'index de la correspondance, ou -1 si la recherche échoue.
 */

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)

//Remplacer une sous-chaîne

/**
 * replace() : exécute une recherche d'une correspondance dans une chaîne
 *  et remplace la sous-chaîne correspondante par 
 * une sous-chaîne de remplacement.
 */

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

const text = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = text.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt2.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)


const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)

//Support carré

//Utilisons des crochets pour inclure les minuscules et les majuscules

const pattern = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  

const pattern = /[Aa]pple/g // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  

//Si nous voulons chercher la banane, nous écrivons le motif comme suit :

//Caractère d'échappement (\) dans RegExp

const pattern = /\d/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want


const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"], this is not what we want

//Une ou plusieurs fois(+)

const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we want

//Période(.)

const pattern = /[a]./g  // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]


const pattern = /[a].+/g  // . any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

//Zéro ou plusieurs fois(*)

/**
 * Zéro ou plusieurs fois. Le modèle peut ne pas se produire 
 * ou se produire plusieurs fois.
 */


const pattern = /[a].*/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

//Zéro ou une fois (?)

/**
 * Zéro ou une fois. Le modèle peut ne pas se produire 
 * ou se produire une seule fois.
 */

//Quantificateur dans RegExp

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made']

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  // a number and exactly four digits
const matches = txt.match(pattern)
console.log(matches)  // ['2019']

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g   // 1 to 4
const matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']

//Panier ^

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // ['This']

//Négation

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]

//Correspondance exacte

///Il devrait avoir ^ commençant et $ qui est une fin.

let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) // true