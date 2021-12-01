const todoInput = document.getElementById("todo");
let element; 


element = todoInput;
element = todoInput.classList;

// todoInput.className = "from-control newClass";
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");


element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder", "Naber");
todoInput.setAttribute("title", "Input");
element = todoInput.removeAttribute("name");

element = todoInput;
// element = todoInput.hasAttribute("name");


console.log(element);