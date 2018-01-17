const id = Symbol();

const user = {
    name: "Dima",
    age: 33,
    color: "yellow",
    [id]: "kgbavjbalkalrjgalejj"
};

console.log(user);

for (let key in user) {
    console.log(user[key]);
}

user.id ="new ID";


const first = Symbol();
const second = Symbol();

console.log(first === second);


const firstFor = Symbol.for("first");
const secondFor = Symbol.for("first");

console.log(firstFor === secondFor);
