var kullanicilar = [{
        email: "berat@gmail.com",
        sifre: "12345"
    },
    {
        email: "erva@gmail.com",
        sifre: "12345"
    }
]

var tivitler = [{
        email: "berat@gmail.com",
        tivit: "Bugün hava çok güzel."
    },
    {
        email: "erva@gmail.com",
        tivit: "Güzel hava güzel hava."
    },
    {
        email: "aleyna@gmail.com",
        tivit: "Kapıyı ben açacağım."
    }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
        console.log(tivitler);
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı!");
    }
}

giris(email, sifre);