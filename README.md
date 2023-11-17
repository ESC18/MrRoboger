# SC's Tool's: Program Language Selector Survey

#### By Elijah Shawn Cartwright
## Technologies used:
* HTML
* CSS
* GIT
* JS
* Firefox Web developer tools

## Description of Application:
This web application takes in a single number from the user, and then produces a long string from 0 to the desired number the user inputted. It will change certain numbers that contain either 1,2, or 3 to the respective strings: "Beep!", "Boop!", and "Won't you be my neighbor?". 

## Setup and installation requirements/guide:
1. Clone the repository _"MrRoboger_ to your device through this link: https://github.com/ESC18/MrRoboger
2. Select 'Code' in the repo page.
3. Copy the provided HTTPS Link.
4. Navigate through Git bash to your desired folder to place the project.
5. Do the necessary git commands to initialize the project and then proceed to do: 'git clone https://github.com/ESC18/MrRoboger.git'
6. Happy Coding!

### Requirements:
1. A basic computer with internet Access.

## Known Bugs:
* Site is NOT responsive. For best results use it with a device that has dimensions of 1920x1080p.

## Licensing:
MIT License

Copyright (c) 2023 Elijah Shawn Cartwright

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests:

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

