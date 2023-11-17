function arrayGenerator(input) {
    let newArray = [];
    for (let i = 0; input > i; i++) {
        newArray.push(i);
    }
     return textInsertion(newArray);
}

function textInsertion(newArray) {
    let resultArray = []
    newArray.forEach(function(num) {
        switch (num) {
            case 3:
                resultArray.push("Won't you be my neighbor?");
                break;
            case 2:
                resultArray.push("Boop!");
                break;
            case 1: 
                resultArray.push("Beep!");
                break;
            default:
                resultArray.push(num);
                break;
        }
    })
    return resultArray;
}

function displayResult(inputNumber) {
    let result = document.getElementById("result");
    return result.innerHTML = arrayGenerator(inputNumber).join(" ");
}

function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputNumber = document.querySelector("input").value;
        displayResult(inputNumber);
    })
}

initializer();