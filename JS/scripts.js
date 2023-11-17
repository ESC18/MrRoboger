function arrayGenerator(input) {
    newArray = [];
    for (let i = 0; input > i; i++) {
        newArray.push(i);
    }
    textInsertion(newArray);
}

function textInsertion(newArray) {
    resultArray = []
    newArray.forEach(function(num) {
        switch (num) {
            case 3:
                
        }
    })
}








function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputNumber = document.querySelector("input").value;
        arrayGenerator(inputNumber);
    })
}