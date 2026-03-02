//Typescript - Lesson 5
//Task 1
var student;
student = {
    name: "John Marston",
    age: 42
    //name: 42 - doesn't work as value of name must be string
    //age: "John Marston" - doesn't work as value of age must be number
};
var dog = {
    name: "Rex",
    age: 3,
    //breed: "German Shepherd" - doesn't work as interface Animal has no such property
};
var employee = {
    name: "Michael Scott",
    age: 44
    //department property is not necessary
};
var students = [
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
];
var printBookInfo = function (book) {
    console.log(book);
};
var firstBook = {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    pages: 336
};
var secondBook = {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pages: 256
};
var thirdBook = {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961
};
console.log(printBookInfo(firstBook));
console.log(printBookInfo(secondBook));
//console.log(printBookInfo(thirdBook)); - This throws error as property called pages is required in Book interface
