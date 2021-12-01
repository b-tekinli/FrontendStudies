// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://wwww.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardBody.appendChild(newLink);



// // Text Content
// cardBody.textContent = "saadasdsda";



// // Text Node
// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardBody);



console.log(newLink);