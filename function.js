// functionalities 


// display function
function displayWhenClicked(value) {
    document.getElementById('display').value += value;
}


// calculate function 
function calculate() {
    const equation = document.getElementById('display');

    try {
        const answer = eval(equation.value);
        document.getElementById('display').value = `Ans: ${answer}`;
    }
    catch(e) {
        document.getElementById('display').value = "ERROR";
    }
}


// clear screen function
function clearScreen() {
    document.getElementById('display').value = "";
}

