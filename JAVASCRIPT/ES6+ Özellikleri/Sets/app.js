// Setler - Kümeler

const mySet = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Bilal");
myset.add(true);
myset.add([1, 2, 3]);
myset.add({
    a: 1,
    b: 2
});

const mySet2 = new Set([100, 3.14, "Bilal"]);

console.log(mySet);
console.log(mySet2);


// Size

console.log(mySet.size);


// Delete Metodu

myset.delete("Bilal");


// Has Metodu

console.log(mySet.has("Bilal"));
console.log(mySet.has(3.14));
console.log(mySet.has(2000));
console.log(mySet.has([1, 2, 3]));


// For Each

mySet.forEach(function (value) {
    console.log(value);
})


// For Of

for (let value of mySet) {
    console.log(value);
}


const array = Array.from(mySet);
console.log(array);