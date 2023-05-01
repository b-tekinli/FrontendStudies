// Yazara Göre Kitap Bulma Uygulaması

let k1 = {
    kitapAdi : "İnsanciklar",
    yazar : "Dostoyevski",
    sayfa : 175
}

let k2 = {
    kitapAdi : "Kumarbaz",
    yazar : "Dostoyevski",
    sayfa : 192
}

let k3 = {
    kitapAdi : "Yeraltindan Notlar",
    yazar : "Dostoyevski",
    sayfa : 139
}

let k4 = {
    kitapAdi : "Boyle Buyurdu Zerdust",
    yazar : "Nietzsche",
    sayfa : 308
}

let k5 = {
    kitapAdi : "İyinin ve Kotunun Otesinde",
    yazar : "Nietzsche",
    sayfa : 224
}

let k6 = {
    kitapAdi : "1984",
    yazar : "George Orwell",
    sayfa : 350
}

let k7 = {
    kitapAdi : "Dorian Grayin Portresi",
    yazar : "Oscar Wilde",
    sayfa : 190
}

let k8 = {
    kitapAdi : "Mutlu Prens",
    yazar : "Oscar Wilde",
    sayfa : 64
}

let k9 = {
    kitapAdi : "Sineklerin Tanrisi",
    yazar : "Jack London",
    sayfa : 262
}

let k10 = {
    kitapAdi : "Martin Eden",
    yazar : "Jack London",
    sayfa : 520
}

var inputKitap = prompt("Hangi yazarin kitaplari goruntulensin?");
var kitaplar = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10];
var filtrelenenKitaplar = [];

function kitaplariFiltrele(kitaplar) {
    kitaplar.forEach(kitap => {
        if (kitap.yazar.toUpperCase().includes(inputKitap.toUpperCase(), 0)) {
            filtrelenenKitaplar.push(kitap);
        }
    });
}

function kitaplariYazdir(kitaplar) {
    kitaplar.forEach(kitap => {
        console.log(`Kitap Adi: ${kitap.kitapAdi}\nYazari: ${kitap.yazar}\nSayfa Sayisi: ${kitap.sayfa}`);
    });
}

kitaplariFiltrele(kitaplar);
kitaplariYazdir(filtrelenenKitaplar);

