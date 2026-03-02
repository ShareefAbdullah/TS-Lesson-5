//Typescript - Lesson 5
//Task 1
let student: {
    name: string,
    age: number
}

student = {
    name: "John Marston",
    age: 42
    //name: 42 - doesn't work as value of name must be string
    //age: "John Marston" - doesn't work as value of age must be number
}

//Task 2
interface Animal {
    name: string
    age: number
}

let dog: Animal = {
    name: "Rex",
    age: 3,
    //breed: "German Shepherd" - doesn't work as interface Animal has no such property
}

//Task 3
interface Employee {
    name: string,
    age: number,
    department?: string 
}

let employee: Employee = {
    name: "Michael Scott",
    age: 44
    //department property is not necessary
}

//Task 4
interface Student {
    name: string,
    grades: number[]
}

let students: Student [] = [
        {
            name: "Harry Potter",
            grades: [4, 5, 4, 5]
        },
        {
            name: "Hermione Granger",
            grades: [5, 5, 5, 5]
        },
        {
            name: "Ron Weasley",
            grades: [4, 4, 3, 4]
        },
        /*{
            name: "Severus Snape",
            age: 54
        }  - this doesn't work as Student interface has no age property*/
]

//Task 5
interface Book {
    title: string
    author: string
    pages: number
}

const printBookInfo = (book: Book): void => {
    console.log(book)
}

let firstBook: Book = {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    pages: 336
}

let secondBook: Book = {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pages: 256
}

let thirdBook = {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961
}

console.log(printBookInfo(firstBook));
console.log(printBookInfo(secondBook));
//console.log(printBookInfo(thirdBook)); - This throws error as property called pages is required in Book interface


