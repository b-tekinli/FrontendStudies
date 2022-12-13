//Document Objesi

// console.log(window);

// let value ;

// console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;


// value = document.all;
// value = document.characterSet;

// value = document.title;
// value = document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];

// value  = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;

// console.log(value);



// Selectors (Seçiciler) - Style Özellikleri

// classname, id, tag name

// getElementById: id'ye göre elementi yakalar.
// getElementByClass: class ismine göre yakalar.
// getElementByTagName: etiket ismine göre yakalar.

// const button = document.getElementById("todoAddButton");
// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

//const classList = button.classList[3];
// const classList = button.classList[2];

// const classList = button.classList;

// classList.forEach(function(className) {
//     console.log(className);
// });

// console.log(classList);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);


// button.textContent = "<b>Todo Ekleyin</b>";
// button.innerHTML = "<b>Todo Ekleyin</b>";



// const todoList = document.getElementsByClassName("list-group-item");
// todoList.forEach(function(todo) {
//     console.log(todo.textContent);
// });

// console.log(todoList);



// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form) {
//     console.log(form);
// });
// console.log(forms[1].name);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



// getElementById - getElementsByClassName - getElementsByTagName

// querySelector - querySelectorAll

// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElemenyById("todoClearButton"));

// const todoList = document.querySelector(".list-group");
// console.log(todoList);


// odd ve even
// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList.forEach(function(todo) {
//     todo.style.backgroundColor = "lightgrey";
// });

// console.log(todoList);


// Style Özellikleri

// const listItem = document.querySelectorAll(".list-group-item")[0];
// listItem.style.backgroundColor = "red";
// listItem.style.fontWeight = "bold";
// listItem.style.color = "#fff";


// const todoList = document.querySelector(".list-group");
// todoList.style.marginTop = "30px";


// const row = document.querySelector(".row");
// row.style.marginBottom = "20px";


// const btn = document.querySelector("#todoClearButton");
// btn.style.backgroundColor = "#53aa4c";
// btn.style.border = "green";
// btn.style.borderRadius = "17px";
// btn.style.padding = "8px";


// const icon = document.querySelectorAll("<a>");
// icon.style.color = "white";


// Anneden Çocuğa Erişmek

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group"); 
// const card = document.querySelector(".card");

// let value = todoList;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[3].textContent = "Değişti.";


// Elementler Üzerinde Gezinme

// value = Array.from(todoList.children);

// value.forEach(function(todo) {
//     console.log(todo.textContent);
// });



// Çocuktan Anneye Erişmek

// value = todo;
// value = todo.parentElement.parentElement;



// // Kardeşler Arasında Gezinmek

// value = todo.nextElementSibling.nextElementSibling;
// const lastChild = document.querySelector(".list-group-item:nth-child(4)");

// value = lastChild;
// value = lastChild.previousElementSibling;
// value = lastChild.previousElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;


// const row = document.querySelector(".row");
// let value;

// value = row.children[0].children[3].children[0].textContent = "Başlık Değiştirildi";
// let todo2 = row.children[0].children[3].children[2].children[1];
// todo2.textContent = "Todo 2 ama değiştirildi."
// value = todo2.previousElementSibling.textContent = "Todo 1'e erişildi.";
// value = todo2.nextElementSibling.nextElementSibling.textContent = "Todo 4'e erişildi.";
// todo2.style.backgroundColor = "red";
// todo2.style.color = "#fff";

// let clearBtn = row.children[0].children[3].children[2].children[1];
// btn = clearBtn.parentElement.parentElement.children[3];
// btn.style.padding = "8px";
// btn.style.backgroundColor = "#987654";
// btn.style.borderRadius = "20px";



// console.log(value);



// Dinamik Olarak Element Oluşturma

// const cardBody = document.querySelectorAll(".card-body")[1];
// console.log(cardBody);

// const link = document.createElement("a");
// link.id = "goWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href = "http://google.com";
// link.target = "_blank";
// link.innerHTML = "Google'a Git";

// cardBody.appendChild(link);

// console.log(link);


// const todo = document.querySelector(".list-group");
// const liste = document.createElement("li");
// const a = document.createElement("a");
// const i = document.createElement("i");

// liste.className = "list-group-item d-flex justify-content-between";
// liste.innerHTML = "Todo 5";

// a.href = "#";
// a.className = "delete-item";

// i.className = "fa fa-remove";

// a.appendChild(i);
// liste.appendChild(a);
// todo.appendChild(liste);

// console.log(liste);



// Element Silme

// const todoList = document.querySelector(".list-grop");
// const todos = document.querySelectorAll(".list-group-item");
// const todo1 = document.querySelector(".list-item-group");

// todos[0].remove();
// todos[3].remove();
// todos[todos.length - 1].remove();
// todo1.remove();


// todoList.removeChild(todos[todos.length - 1]);
// todoList.removeChild(todos[0]);
// todoList.removeChild(todoList.lastElementChild);



// Elementleri Değiştirmek

// const cardBody = document.querySelectorAll(".card-body")[1];

// const newTitle = document.createElement("h2");
// newTitle.className = "card-title";
// newTitle.textContent = "Todo Listesi - Yeni";

// cardBody.replaceChild(newTitle, cardBody.childNodes[1]);




// EVENT OLAY
// addEventListener()

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle);

// document.querySelectorAll('.card-title')[1].textContent = "Todo Başlığı Değiştirildi!";

function changeTitle(e) {                 // e ==> event'ı belirtir.
    console.log(e.type);                  // event tipini gösterir.
    console.log(e.target);                // event'ın çalıştığı html elementini verir.
    console.log(e.target.textContent);    // event'ın çalıştığı html elementinin text içeriğini verir.
    console.log(e.target.className);      // class adını verir.
}


