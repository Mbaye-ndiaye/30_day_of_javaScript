/*Dans le tableau webTechs, vérifiez si Sass existe dans le 
tableau et s'il existe, imprimez "Sass est un 
préprocessus CSS". S'il n'existe pas, ajoutez Sass au 
tableau et imprimez le tableau.*/
const webtech = ['HTML', 'CSS', 'PHP', 'Python', 'Ruby', 'Java', 'Angular', 'React', 'Node.js']

const webtech2 = webtech.indexOf('sass')
console.log(webtech2);
webtech.push('Sass')
console.log(webtech);