// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// input: 15
// output: "15 is divisible by three"
// input: 0 
// output: "0 is divisible by three"
// input: -7
// output: "-7 is not divisible by three"

// describe("divByThree", () => {
//     it("will test number to see if evenly divisble by three", () => {
//         const object1 = { number: 15 }
//         const object2 = { number: 0 }
//         const object3 = { number: -7 }
//         expect(divByThree(object1)).toEqual("15 is divisible by three")
//         expect(divByThree(object2)).toEqual("0 is divisible by three")
//         expect(divByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })
// FAIL  ./code-challenges.test.js
//   divByThree
//     ✕ will test number to see if evenly divisble by three (1 ms)
//   ● divByThree › will test number to see if evenly divisble by three
//     ReferenceError: divByThree is not defined
// PASS  ./code-challenges.test.js
// divByThree
//   ✓ will test number to see if evenly divisble by three (2 ms)BOOM SHAKALAKA

// b) Create the function that makes the test pass.
// const object1 = { number: 15 }
// const object2 = { number: 0 }
// const object3 = { number: -7 }

// const divByThree = (value) => {
//       if (value.number % 3 === 0) {
//         return  `${value.number} is divisible by three`
//       } else if (value % 3 !== 0) {
//         return  `${value.number} is not divisible by three`
//       }
    //  else {
    //     return "whoopsie daisy"
    //   }
    //  }
//   console.log(divByThree(object1))
//   console.log(divByThree(object2))
//   console.log(divByThree(object3))

// Pseudo code: 
// function: divByThree
// input: const object1, const object2, const object3
// output: "15 is divisible by three", "0 is divisible by three", "-7 is divisible by three"
// Process: string interpolation, dot notation, and a conditional statement

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// input: ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// input: ["temperature", "database", "chopsticks", "mango"]
// output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("capFirstLett", () => {
//     it("returns an array with all the words capitalized", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         expect(capFirstLett(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion",     "Nephew"])  
//     })
// })

// FAIL  ./code-challenges.test.js
// capFirstLett
//   ✕ returns an array with all the words capitalized (1 ms)
// ● capFirstLett › returns an array with all the words capitalized
//   ReferenceError: capFirstLett is not defined
// GOOD FAIL  
// PASS  ./code-challenges.test.js
//   capFirstLett
//     ✓ returns an array with all the words capitalized (2 ms)


// b) Create the function that makes the test pass.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

// const capFirstLett = (array) => {
//     return array.map((value) => {
//         return value[0].toUpperCase() + value.substring(1)
    
//     })
// } 

// console.log(capFirstLett(randomNouns1))
// console.log(capFirstLett(randomNouns2))

// Pseudo code:
// Function: capFirstLett
// Input: randomNouns1 and randomNouns2
// Output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         ["Temperature", "Database", "Chopsticks", "Mango"]
// Process: .map() AND .toUpperCase() + .substring()

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// Input: "learn"
// output: 1
// Input: "academy"
// Output: 0
// Input: "challenges"
// Output: 2

// describe("firstVowel", () => {
//     it("the index of the first vowel", () => {
//         const vowelTester1 = "learn"
//         const vowelTester2 = "academy"
//         const vowelTester3 = "challenges"
//         expect(firstVowel(vowelTester1)).toEqual(1)
//         expect(firstVowel(vowelTester2)).toEqual(0)
//         expect(firstVowel(vowelTester3)).toEqual(2)
//     })
// })
// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ the index of the first vowel
// ● firstVowel › the index of the first vowel
//   ReferenceError: firstVowel is not defined
// b) Create the function that makes the test pass.
// Create a function that takes in a string and logs the index of the first vowel.
    //     const vowelTester1 = "learn"
    //     const vowelTester2 = "academy"
    //     const vowelTester3 = "challenges"

    //    const firstVowel = (string) => {
    //     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //     return firstVowel.indexOf().filter(

    //     )
    //    }

    //    console.log(vowelTester1)

// I do not know what to do for this one. At first I thought I would use .filter() and .indexOf() but I am not even sure how to fully set this up.
// Pseudo code:
// Function: firstVowel
// Input:  const vowelTester1 = "learn"
        // const vowelTester2 = "academy"
        // const vowelTester3 = "challenges"
// Output: [1], [0], [2]
// Process: .filter(), .indexOf()