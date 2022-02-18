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
    for (let button of buttons) {button.addEventListener("click", (event) => printTargetContentToConsole(event, aVariable))}
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
