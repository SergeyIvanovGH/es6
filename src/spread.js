const firstUser = {
    name: "sergey",
    age: 23
};

const data = {
    color: "yellow",
    gol: [],
    width: 40
};

const resultObject = {
    ...firstUser,
    ...data,
    newValue: "new value",
    antother: "another"
};

console.log(resultObject);




const firstArray = [1,2,3,4,5];
const secondArray = [6,7,8,9];

// const resultArray = firstArray.concat(secondArray);

const resultArray = [
    ... firstArray,
    34,
    "jfefwerfwkerew",
    ...secondArray
];

console.log(resultArray);