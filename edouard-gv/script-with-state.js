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

class CalculatorState {
    
    constructor(display) {
        this.display = display;
        this.clear();
    }

    clear() {
        this.clearRequired = true;
        this.operator = (x, y) => y; //undefined operator: just print again current display
        this.stack = undefined;
        this.display.textContent = "0";
    }
}

let state;

function printToDisplay(text) {
    state.display.textContent = text;
}

function appendToDisplay(text) {
    if (state.clearRequired==true) {
        state.clearRequired = false;
        printToDisplay(text);
    }
    else {
        printToDisplay(state.display.textContent+text);
    }
}

function stackOperation(anOperator) {
    state.operator = (x, y) => anOperator(parseInt(x), parseInt(y));
    state.stack = state.display.textContent;
    state.clearRequired = true;
}


window.addEventListener('load', () => {
    let calculator = document.querySelector('.calculator');
    let keys = calculator.querySelector('.calculator__keys');

    state = new CalculatorState(calculator.querySelector('.calculator__display'));
    
    keys.addEventListener(
        'click', 
        function(event) {
            console.log(event.target.textContent);
            switch (event.target.textContent) {
                case 'AC': 
                    state.clear();
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
                    printToDisplay(state.operator(state.stack, state.display.textContent));
                    state.clearRequired = true;
                    break;
                default: appendToDisplay(event.target.textContent);
            }
        }
    );
});
