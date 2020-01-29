// 1. Le projet
/*
Créer :
Un nouveau projet web du nom de : nom_prenom_test_javascript
Un fichier index.html
Un fichier index.js
Un fichier index.css
*/
// 2. Le boolean
// Créer une variable "maBoolean" contenant un boolean
let maBoolean = false;
// 3. L'array
// Créer une variable "monArray" contenant un tableau
let monArray = ["a","b"];
// 4. L'objet
// Créer une variable "monObjet" contenant un objet
let monObjet = {name: "Nathan", âge: "23"};
// 5. Le string
// Créer une variable "monString" contenant un string
let monString = "Hello Coding 11"
// 6. L'integer
// Créer une variable "monInt" contenant un integer
let monInt = 4;
// 7. L'objet et sa methode
// Créer un objet avec une clef et une methode
let monObjet2 = {nom: "Nathan",
âge: "23",
coder: () => {console.log(`Il se met à coder.`)}
};
// 8. La fonction
// Créer une function flêchée avec deux parametres
let maFonction = (param1,param2) => {
    return(param1+param2)
}
// 9. La condition
// Créer une condition qui vérifie si "monInt" et plus petit que 8
if (monInt < 8) {
    maFonction(monInt,8-monInt)
}
// 10. La boucle
// Créer une boucle qui incrémente une variable de 0 jusqu'a 9
for (let i = 0; i < 9; i++) {
    
}
let i = 0;
while (i<9) {
    i++
}
// 11. L'objet Date
// Créer une variable contenant la date du jour dans le format "13/01/2020" ! Avec new Date() !
let date = new Date().toLocaleDateString()
console.log(date);
// 12. string to STRING
// Créez une function qui affiche la chaine de caractères passée en majuscule
let toSTRING = (string) => {
    console.log(string.toUpperCase())
}
// 13. string to StrinG
// Créer une function qui affiche la première et la dernière lettre de la chaine de caractères passée en majuscule
let toStrinG = (string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.slice(0,string.length-1) + string.charAt(string.length-1).toUpperCase();
    console.log(string);
}
// 14. La longueur
// Créer une function qui affiche une alerte avec la longueur de la valeur passée
let longueur = (param) => {
    param = param.toString()
    alert(param.length)
}
// 15. Le chiffre aléatoire p1
// Créer une function qui affiche dans une alerte un chiffre entier aléatoire entre 1 et 100
let random1 = () => {
    let rn = parseInt(Math.random()*101);
    alert(rn);
}
// 16. Le chiffre aléatoire p2
// Créez une function qui permet à l'utilisateur via la console d'entrer lui même deux chiffres et avec l'aide d'une alerte affiche un chiffre aléatoire entre ces deux chiffres
let random2 = (min,max) => {
    let rn = parseInt(Math.random()*(max - min + 1) + min);
    alert(rn)
}
// 17. Le type
// Créez une function qui permet à l'utilisateur via la console d'entrer une valeur
// Le type de sa valeur doit être comparé avec le type des variables créées précédement : monObjet,monArray,monInt,maBoolean,monString et selon son type une alert s'affiche avec "Votre valeur est de type..."
let getType = (param) => {
    switch (typeof param) {
        case typeof monInt:
            alert("Votre valeur est de type 'integer'");
            break;
        case typeof monArray:
        case typeof monObjet:
            if (Array.isArray(param) == true) {
                alert("Votre valeur est de type 'array'");
            } else {
                alert("Votre valeur est de type 'object'");
            }
            break;
        case typeof monString:
            alert("Votre valeur est de type 'string'");
            break;
        case typeof maBoolean:
            alert("Votre valeur est de type 'boolean'");
            break;
        default:
            alert("Votre valeur est de type 'undefined'");
    }
}
// 18. Les objets 1/1
// Créer un objet avec 2 clefs "nom" et "age", et une methode "modeling"
// La methode attribue une valeur au nom et a l'age
// La methode fait une alert avec comme phrase 'Bonjour "nom" tu as "age" ans

// let objet18 = {
//     nom: "",
//     âge: "",
//     modeling = () => {
//         this.nom = "Nathan";
//         this.âge = "23";
//     }
// }
//console.log(objet18);

// 19. Les objets 2/2
// Créer un objet
// Rajoute lui une methode "addKey"
// Sa methode permet de faire 2 chose :
// De rajouter une clef avec une valeur à l'objet de l'exercice précédent.
// D'afficher l'objet 1 avec un console.log

// 20. Les objets 3/3
// Créer un objet "carre"
// Rajoute lui quatres clefs :"size", "borderaspect", "epaisseur","couleur"
// Rajoute lui une methode qui permet de mettre des valeurs a ses clefs
// Si la valeur entrée dans aspect est différente de "solide" ou "dotted" afficher une alerte et redemander d'entrée une valeur correcte
// Si la valeur entrée dans couleur est différente de "red","blue","green" afficher une alerte et redemander d'entrée une valeur correcte
// Si la valeur entrée dans epaisseur ou/et size ne contient pas un integer affiche une alerte et redemander d'entrée une valeur correccte
// Si toutes les valeurs sont respectés alors afficher le résultat avec une alert "votre carré a pour size : XX px, borderaspect : dotted , ....etc

// 22. Injection HTML avec Javascript
// Rajouter un id "management" a la section avec l'aide de javascript
// Rajouter un titre "Bienvenue" dans la balise h1 toujours en javascript
document.getElementsByTagName("section")[0].setAttribute("id","management");
document.getElementsByTagName("h1")[0].innerHTML = "Bienvenue"

// 23. Les functions et le DOM
// Ajoute un sous titre "Taches Random"
// Ajoute un input "Tache"
// Un bouton Ajouter
// Créer une fonction qui :
// Au clique du bouton ajouter, affiche la tache dans une liste avec un temps aléatoire entre 1h et 3h
// La tache doit être formaté avec sa première lettre qui en majuscule et précédée d'un numéro de tache(attention tu ne peux pas utiliser de ol)
let input = document.getElementById("tache");
let bouton = document.getElementById("ajouter");
