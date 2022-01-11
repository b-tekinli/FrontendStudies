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

function kullaniciVarmi(email, sifre) {
    console.log(email);
    console.log(sifre);
    for(i=0; i<kullanicilar.length; i++) {
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (kullaniciVarmi(email, sifre)) {
        console.log(tivitler);
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı!");
    }
}

giris(email, sifre);