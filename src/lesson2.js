let age = 10;

if (true) {
    let age = 88;
    console.log("local age "  + age);
}

console.log(age);

const opt = {
    name: "Sergey",
    age: 44
};

function aaa({name: otherName, age}) {
    console.log(otherName, age);
}

aaa(opt);

const data = [1,2,3,4,5];

const [one, two, three, four, five] = data;

console.log(one, two, three, four);