// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

/*
Afficher dans la console la touche cliquée
Afficher dans l'écran "
Concaténer dans l'écran 
Traiter le cas du zéro
Faire l'addition
Faire les autres opérations
Traiter les arrondis
--Done
Traiter le cas où on appelle deux fois égal (mettre le resultat dans la pile)
Traiter les décimaux (le .)
*/

let display;
let operator;
let stack;
let clearRequired;
// A mettre dans une classe CalculatorState, ou dans une classe calculator avec les fonctions suivantes.

function printToDisplay(text) {
    display.textContent = text;
}

function appendToDisplay(text) {
    if (clearRequired==true) {
        clearRequired = false;
        printToDisplay(text);
    }
    else {
        printToDisplay(display.textContent+text);
    }
}

function clearDisplay(text) {
    printToDisplay("0");
    clearRequired = true;
    operator = (x, y) => y; //undefined operator: just print again current display
    stack = undefined;
}

function stackOperation(anOperator) {
    operator = (x, y) => anOperator(parseInt(x), parseInt(y));
    stack = display.textContent;
    clearRequired = true;
}


window.addEventListener('load', () => {
    let calculator = document.querySelector('.calculator');
    let keys = calculator.querySelector('.calculator__keys');
    display = calculator.querySelector('.calculator__display');

    clearDisplay();
    
    keys.addEventListener(
        'click', 
        function(event) {
            console.log(event.target.textContent);
            switch (event.target.textContent) {
                case 'AC': 
                    clearDisplay(); 
                    break;
                case '+' :
                    stackOperation((x, y) => (x+y));
                    break;
                case '×' :
                    stackOperation((x, y) => (x*y));
                    break;
                case '×' :
                    stackOperation((x, y) => (x*y));
                    break;
                case '-' :
                    stackOperation((x, y) => (x-y));
                    break;
                case '÷' :
                    stackOperation((x, y) => (x/y).toPrecision(6));
                    break;
                case '=' : 
                    printToDisplay(operator(stack, display.textContent));
                    clearRequired = true;
                    break;
                default: appendToDisplay(event.target.textContent);
            }
        }
    );
});
