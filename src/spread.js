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
    data
};

console.log(resultObject);
