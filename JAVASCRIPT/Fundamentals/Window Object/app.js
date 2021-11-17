// Alert 
alert("Merhaba");



// Confirm
const cevap = confirm("Emin misiniz?");
if (cevap) {
    console.log("Silin gitsin.");
} else {
    console.log("Silmeyin.");
}



// Prompt
const cevap = prompt("2 + 2 = ?");

if (cevap == "4") {
    console.log("Doğru");
} else {
    console.log("Yanlış");
}



// Location
let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;



if (confirm("Sayfa yenilensin mi?")) {
    window.location.reload();
} else {
    console.log("Sayfa yenilenmedi.");
}


value = window.outerHeight;
value = window.outerWidth;


value = value.innerHeight;
value = value.innerWidth;


value = window.scrollX;
value = window.scrollY;


console.log(value);