const person = {
    name: 'John Smith',
    age: 25,
    salary: 3000
};

const langs = ["Python", "Java", "C++", "PHP"];

const name = "John";


// For In
// Object
for (let prop in person) {
    console.log(prop, person[prop]);
}


// Array
for (let index in langs) {
    console.log(index, langs[index]);
}

// String
for (let index in name) {
    console.log(index, name[index]);
}


// Object
for (let value of langs) {
    console.log(value);
}


// String

for (let character of name) {
    console.log(character);
}