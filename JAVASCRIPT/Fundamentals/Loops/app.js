// While

let i = 0;
while (i < 10) { // Sonsuz Döngü
    console.log(i);
    i++;
}



let i = 10;
while (i > 0) {
    console.log(i);

    // i--;    // i--
    i -= 2;
}



// Break ve Continue
let i = 0;
while (i < 10) {
    if (i == 3 || i == 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}




// Do While
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


const langs = ["Python", "Javascript", "Java"];


let index = 0;
while (index < langs.length) {
    console.log(langs[index]);
    index++;
}



for (let index = 0; index < langs.length; index++) {
    console.log(array[index]);
}



langs.forEach(function (lang, index) {
    console.log(lang, index);
});



const users = [{
        name: "Sude",
        age: 25
    },
    {
        name: "Yağmur",
        age: 20
    },
    {
        name: "Ali",
        age: 12
    }
];



const names = users.map(function (user) {
    return user.name;
});

const ages = users.map(function (user) {
    return user.age;
})

console.log(names);
console.log(ages);


const user = {
    name: "Pelin",
    age: 25
};

for (let key in user) {
    console.log(key, user[key]);
}