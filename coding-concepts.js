// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Echo 2023"
// console.log(cohort.split(""))

// // a) Your answer: [ 'Echo', '2023' ]
// b) Verify and explain: .split("") with no space between the quotations splits the string into indvidual letters. Whereas .split(" ") with the space would would change it to ["Echo", "2023" ]. Paying attention to spacing is important.
  // ['E', 'c', 'h',
  // 'o', ' ', '2',
  // '0', '2', '3'
  // ]

// --------------------2) What will this log?

// const greeter = (name) => {
//    `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))
// const greeter = (name) => {
//   return `Hello, ${name}!`
// } Would  return Hello, LEARN Student!

// a) Your answer: undefined
// b) Verify and explain: Because the function does not know what to return.

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: it will return [ 8, 10, 12, 14, 16 ] 
// b) Verify and explain: because when the array is passed using .map() the array is multipled by 2. It iterates over each element and returns a new array of the same length.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [11, 13, 15], because .filter() filters through an array with built in if statements and returns a subset of the original array as a new array. The combination of the .filter(), modulo operator and the bang operator filter through and return the numbers we want.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: myCodingSkills is the object and languages is the key, dot notation joins them together and [] counts the index.


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Echo"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("Sarah")
// console.log(learnStudent)

// a) Your answer: student: George, cohort: "Echo", year: 2023
// b) Verify and explain: { student: 'George', cohort: 'Echo', year: 2023 } 'new' creates a new instance of aclass but the blue print remains the same. 
// 