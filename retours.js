// As of 18/02 15:00

/** 
 * Comment passer des paramètre à des call-backs ? Et pourquoi préférer passer une fonction anonyme triviale ?
 */

{
    //...
    for (let button of buttons) {button.addEventListener("click", printTargetContentToConsole)}      
}

{
    //...
    for (let button of buttons) {button.addEventListener("click", () => printTargetContentToConsole())}      
}

{
    //...
    for (let button of buttons) {button.addEventListener("click", (event) => printTargetContentToConsole(event))}      
}

{
    //...
    let aVariable = "initial_value"
    for (let button of buttons) {button.addEventListener("click", (event) => printTargetContentToConsole(event, button, aVariable))}
    //Et "event.target" peut être différent de "button" (cf "bubbling")
}
//(Cf exemple 2 du cours)
//(Cf cours partie "closure")

/**
 * Nommage
 */
function func(event) {
    a = event.target.textContent;
    // à renommer en input par exemple ?
}

function changeNumberToDisplay(event) {
//... qui est devenue la fonction qui fait tout 
}
//=> renommer en "processInput" via "Renommer le symbole", ou F2, qui tentera de le renommer partout.

let bool = false
//=> Choisir un nom qui donne la sémantique du booléen. Et si ça ne suffit pas, mettre un commentaire.

/**
 * Convention d'écriture
 */

//Les Majuscules En Tête De Mot Sont Réservées Aux Classes.
//SAUF POUR LES CONSTANTES QUI SONT COMPLETEMENT EN MAJUSCULES
 function Addition(x, L){
     //...
 }
 //=>renommer en addition

 //[Opinion] On met des espaces
 for(let button of buttons){
     //...
 }

 for (let button of buttons) {
     //...
 }

 //On fait un peu attention à l'indentation, aux sauts de ligne (ni trop, ni pas assez). Ici pas assez. parfois trop, notamment avant des "}"

 //Bof :
function func(event) {
    if (screen.textContent=='0') {
    screen.textContent = event.target.textContent}
    else {screen.textContent += event.target.textContent}
 }

 //Mieux : 
 function func(event) {
    if (screen.textContent=='0') {
        screen.textContent = event.target.textContent
    }
    else {
        screen.textContent += event.target.textContent
    }
 }

// Et pas de blocs vides !
  if (affichage.textContent == 0) {
  }
  else {
      affichage.textContent += '0'
  }


/**
 * Ne pas se forcer à initialiser, quitte à initialiser à undefined (je sais, c'est pas réglo, mais c'est js)
 */ 

//Bof : 
let operande = "°";

//Mieux
let operande = undefined;


/**
 * YAGNI
 */

//[Opinion] Utilisation d'une liste, on sent que c'est intéressant, mais pour l'instant c'est une liste qui n'aura jamais que deux entrées.

/**
 * "DRY => SRP" : Factorisation => séparation des responsabilités (ici "traitement" vs "affichage")
 * Mais c'était vraiment bien déjà d'avoir séparé en petites fonctions
 */


//si qqch apparait dix fois => variable locale avec le bon nom
document.getElementsByClassName("calculator__display")[0] 

function type_number(number){
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something computed"
}

function operator(op){
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something else computed"
}

function calculate(){
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something else again computed"
}

//=> On factorise tout dans une fonction d'affichage qu'on appelle ensuite dans chaque méthode
function printToScreen(textContent) {
    document.getElementById("calculator__display").textContent = textContent;
}

function type_number(number){
    //...
    printToScreen("something computed")
}

/**
 * Usage du data-* : on peut accéder directement a un attribut dans un tag en l'appelant data-xxx. Ex 
 * <div data-qqch="a value"> => divElement.data.qqch (où divElement = document.getElementBy...(...))
 */

let action = button.dataset.action;

/**
 * Un ou une bonne développeuse logicielle est une développeuse flémarde ;)
 * => utilisation de eval qui essaye d'évaluer la chaine de caractère
 */

return eval(expr);

console.log(eval("1+2"));
// 3
console.log(eval("1+2*3"));
// 7
console.log(eval("2*Math.PI+Math.exp(5)"));
// 154.6963444097562

/**
 *  Quand c'est fastidueux, y a sûrement moyen de faire plus court (et souvent avec plus de sens) 
 */

if ((touche == "0") || (touche == "1") || (touche == "2") || (touche == "3") || (touche == "4") ||
(touche == "5") ||(touche == "6") ||(touche == "7") ||(touche == "8") ||(touche == "9")) {
    //...
}
// => mettre un attribut, voire un attribut data-, une classe... quelque chose qui permet de signifier que c'est une touche,
// et qui permet en même temps de les cibler

/**
 *  Eviter de mettre plusieurs fonctions sur le même événement, préférer de gérer cela de manière explcite.
 *  (soit une fonction qui appelle en séquence les fonctions, soit il y a vraiment besoin de paralléliser et dans ce cas passer par
 *  l'appel de promise en //, cf cours suivant).
 */

for (let button of buttons) {
    button.addEventListener("click", printTargetContent);
    button.addEventListener('click', agregate);
    button.addEventListener("click", operation);
}

/**
 * Et finalement, mettre cela dans une classe ?
 */

 let display;
 let operator;
 let stack;
 let clearRequired;
 // A mettre dans une classe CalculatorState (=> cf redux), ou dans une classe Calculator avec alors les fonctions (=> cf POO).

 // Ou encore : mettre des événements différents, au lieu de metttre un fonction qui switche : intéressant, ça ressemble à des webcomponent.

    document.getElementById("clear").addEventListener("click",()=>
        {
            document.getElementById("display").textContent = "";
            current_num = "";
            start = true;
            s = 0;
        }
    );

    document.getElementById("decimal").addEventListener("click",()=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + ".";
            current_num = current_num + ".";
        }
    );


/**
 * Traiter les erreurs, c'est bien !
 */

  if (operator == "÷") {
    if(current == "0") {
      current = "error";
    }
  }

/**
 * Y en a quelques uns qui n'ont pas réussi à aller très loin. Ne pas désespérer, c'est une histoire de quelques heures, facilement rattrapables.
 */

/**
 * Tester, tester ;). Exemple anonymous où ça ne fonctionne que la première fois, ou après avoir appuyé sur AC
 */
