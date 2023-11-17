function arrayGenerator(input) {
    newArray = [];
    
}








function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputNumber = document.querySelector("input").value;
        arrayGenerator(inputNumber);
    })
}