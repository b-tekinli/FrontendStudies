// Dinamik Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");



// Remove Metodu
todos[0].remove();


// Remove Child
todoList.removeChild(todoList.lastChild);
todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);