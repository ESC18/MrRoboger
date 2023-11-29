//Business Logic
//Creates array from 0 to user number.
function arrayGenerator(input) {
    let newArray = [];
    for (let i = 0; input >= i; i++) {
        newArray.push(i);
    }
     return textInsertion(newArray);
}

//Takes array from arrayGenerator and replaces numbers with specified strings if they contain 1,2, or 3.
function textInsertion(newArray) {
    let resultArray = [];
    newArray.forEach(function(number) {
        let num = number.toString();
        if (num.includes("3")) {
            resultArray.push("Won't you be my neighbor?");
        } else if (num.includes("2")) {
            resultArray.push("Boop!");
        } else if (num.includes("1")) {
            resultArray.push("Beep!");
        } else {
            resultArray.push(num);
        }
    });
    return resultArray;
}

//UI Logic
//Calls business logic and returns value to User.
function displayResult(inputNumber) {
    let result = document.getElementById("result");
    return result.innerHTML = arrayGenerator(inputNumber).join(" ");
}

//Initializes Code
function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputNumber = document.querySelector("input").value;
        displayResult(inputNumber);
    });
}

initializer();