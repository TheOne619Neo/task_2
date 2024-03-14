function addToDisplay(value) {
    // Essentially, this function is used to add numbers, operators, or any other input to the display,
    // typically when a user clicks on buttons representing those values.
    
    document.getElementById('display').value += value;

    //This function is designed to add a value to the display.
    //It takes one parameter, value, which represents the value to be added.
    //It finds the HTML element with the id display.
    //It appends the provided value to the current value of the display element.
}

function clearDisplay() {
    //This function clears the display.

    document.getElementById('display').value = '';

    //It finds the HTML element with the id display.
    //It sets the value of the display element to an empty string.
    //This function is typically called when a "Clear" or "AC" button is clicked in a calculator interface, resetting the display to an empty state.
}

function calculate() {
    //This function is used to perform a calculation based on the current content of the display.

    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }

    //Inside the try block, it uses JavaScript's eval() function to evaluate the expression in the display element. 
    //This essentially calculates the result of the expression.
    //Called when a user clicks on the "Equals" button in a calculator interface, 
    //resulting in the evaluation of the expression currently displayed.


}
