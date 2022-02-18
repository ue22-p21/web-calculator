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


class Calculator {
    
    constructor(display) {
        this.display = display;
        this.operator = undefined;
        this.stack = undefined;
        this.clearRequired = undefined;
    }

    printToDisplay(text) {
        this.display.textContent = text;
    }
    
    appendToDisplay(text) {
        if (this.clearRequired==true) {
            this.clearRequired = false;
            this.printToDisplay(text);
        }
        else {
            this.printToDisplay(display.textContent+text);
        }
    }
    
    clearDisplay() {
        this.printToDisplay("0");
        this.clearRequired = true;
        this.operator = (x, y) => y; //undefined operator: just print again current display
        this.stack = undefined;
    }
    
     stackOperation(anOperator) {
        this.operator = (x, y) => anOperator(parseInt(x), parseInt(y));
        this.stack = this.display.textContent;
        this.clearRequired = true;
    }

    processInput(inputContent) {
        switch (inputContent) {
            case 'AC': 
                this.clearDisplay(); 
                break;
            case '+' :
                this.stackOperation((x, y) => (x+y));
                break;
            case '×' :
                this.stackOperation((x, y) => (x*y));
                break;
            case '×' :
                this.stackOperation((x, y) => (x*y));
                break;
            case '-' :
                this.stackOperation((x, y) => (x-y));
                break;
            case '÷' :
                this.stackOperation((x, y) => (x/y).toPrecision(6));
                break;
            case '=' : 
                this.printToDisplay(this.operator(this.stack, this.display.textContent));
                this.clearRequired = true;
                break;
            default: this.appendToDisplay(inputContent);
        }
    }
}


window.addEventListener('load', () => {
    let calculator = document.querySelector('.calculator');
    let keys = calculator.querySelector('.calculator__keys');
    
    calculator = new Calculator(calculator.querySelector('.calculator__display'));

    calculator.clearDisplay();
    
    keys.addEventListener(
        'click', 
        function(event) {
            console.log(event.target.textContent);
            calculator.processInput(event.target.textContent);
        }
    );
});
