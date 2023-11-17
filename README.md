describe arrayGenerator()

Test: Will take in the number that the user has inputted and will generator an array of numbers from 0 to the users specificied number.
Code: for (let i = 0; i < inputNumber; i++) {
        newArray.push(i);
    }
Input: 10.
Expected Result: [0,1,2,3,4,5,6,7,8,9,10].

describe textInsertion() 

Test: Will take the newly generated array from arrayGenerator() and will go through the array - and identify if it contains the numbers[1,2,3] at a given index. And will proceed to replace the number with specified string.
Code: newArray.forEach(function(num) {
    switch (num) {
        case 3:
            resultArray.push("Won't you be my neighbor?");
    }
})
Input: [0,1,2,3,4,5,6,7,8,9,10].
Expected Result: [0, beep, boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep];

