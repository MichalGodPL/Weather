//Godzina

const Teraz = new Date();

const Godziny = Teraz.getHours();

const Minuty = Teraz.getMinutes();

const Czas = (Godziny < 10 ? '0' : '') + Godziny + ':' + (Minuty < 10 ? '0' : '') + Minuty;

document.querySelector('.Czas-Wynik').innerHTML = Czas;

// Losowanie Temperatury

var ZmiennaTemperatura = 0;

function LosowanieTemperatura(MaksymalnaWartosc) {

    ZmiennaTemperatura = Math.floor(Math.random() * MaksymalnaWartosc);

    return ZmiennaTemperatura;

}

LosowanieTemperatura(35);

document.querySelector('.Temperatura-Tekst').innerHTML = ZmiennaTemperatura + '°C';


var ZmiennaPomocniczaIkony = 0;

function LosowanieIkony() {

    ZmiennaPomocniczaIkony = Math.floor(Math.random() * 3);

    var Obrazek = document.querySelector('.Pogoda img');

    if(ZmiennaPomocniczaIkony === 0) {

        Obrazek.src = 'MadgeChmurasy.png';

    } else if(ZmiennaPomocniczaIkony === 1) {

        Obrazek.src = 'Chmurki.png';

    } else {

        Obrazek.src = 'Slonce.png';

    }
}

LosowanieIkony();


var ZmiennaPomocniczaUV = 0;

function LosowanieUV() {

    if(ZmiennaTemperatura < 15) {

    const MaksymalnaWartosc = 4;
        
    ZmiennaPomocniczaUV = Math.floor(Math.random() * MaksymalnaWartosc);

    return ZmiennaPomocniczaUV;

    }

    else {

        const MaksymalnaWartosc = 7;
        
        ZmiennaPomocniczaUV = Math.floor(Math.random() * MaksymalnaWartosc);
    
        return ZmiennaPomocniczaUV;

    }

}

LosowanieUV();

document.querySelector('.UV-Wynik').innerHTML = ZmiennaPomocniczaUV;



var ZmiennaPomocniczaDeszcz = 0;

function LosowanieDeszcz(MaksymalnaWartosc) {

    ZmiennaPomocniczaDeszcz = Math.floor(Math.random() * MaksymalnaWartosc);

    return ZmiennaPomocniczaDeszcz;

}

LosowanieDeszcz(101);

document.querySelector('.Deszcz-Wynik').innerHTML = ZmiennaPomocniczaDeszcz + '%';



var ZmiennaPomocniczaWiatr = 0;

function LosowanieWiatr(MaksymalnaWartosc) {

    ZmiennaPomocniczaWiatr = Math.floor(Math.random() * MaksymalnaWartosc);

    return ZmiennaPomocniczaWiatr;

}

LosowanieWiatr(25);

document.querySelector('.Wiatr-Wynik').innerHTML = ZmiennaPomocniczaWiatr + 'km/h';



const Przycisk2 = document.querySelector('.Przycisk_2');

function ZmianaNaKrakow(){

    const Miasto = document.querySelector('.Miasto-Tekst');

    Miasto.innerHTML = 'Kraków';

    LosowanieTemperatura(35);

    document.querySelector('.Temperatura-Tekst').innerHTML = ZmiennaTemperatura + '°C';

    LosowanieIkony();

    LosowanieUV();

    document.querySelector('.UV-Wynik').innerHTML = ZmiennaPomocniczaUV;

    LosowanieDeszcz(101);

    document.querySelector('.Deszcz-Wynik').innerHTML = ZmiennaPomocniczaDeszcz + '%';

    LosowanieWiatr(25);

    document.querySelector('.Wiatr-Wynik').innerHTML = ZmiennaPomocniczaWiatr + 'km/h';

    var Panorama = document.querySelector('.Informacje-Sektor-2 img');

    Panorama.src = 'Panorama-Krakow.jpeg';

}

Przycisk2.addEventListener('click', ZmianaNaKrakow);


const Przycisk3 = document.querySelector('.Przycisk_3');

function ZmianaNaRzeszow(){

    const Miasto = document.querySelector('.Miasto-Tekst');

    Miasto.innerHTML = 'Rzeszów';

    LosowanieTemperatura(35);

    document.querySelector('.Temperatura-Tekst').innerHTML = ZmiennaTemperatura + '°C';

    LosowanieIkony();

    LosowanieUV();

    document.querySelector('.UV-Wynik').innerHTML = ZmiennaPomocniczaUV;

    LosowanieDeszcz(101);

    document.querySelector('.Deszcz-Wynik').innerHTML = ZmiennaPomocniczaDeszcz + '%';

    LosowanieWiatr(25);

    document.querySelector('.Wiatr-Wynik').innerHTML = ZmiennaPomocniczaWiatr + 'km/h';

    var Panorama = document.querySelector('.Informacje-Sektor-2 img');

    Panorama.src = 'Panorama-Rzeszow.jpg';

}

Przycisk3.addEventListener('click', ZmianaNaRzeszow);


const Przycisk1 = document.querySelector('.Przycisk_1');

function ZmianaNaPrzemysl(){

    const Miasto = document.querySelector('.Miasto-Tekst');

    Miasto.innerHTML = 'Przemyśl';

    LosowanieTemperatura(35);

    document.querySelector('.Temperatura-Tekst').innerHTML = ZmiennaTemperatura + '°C';

    LosowanieIkony();

    LosowanieUV();

    document.querySelector('.UV-Wynik').innerHTML = ZmiennaPomocniczaUV;

    LosowanieDeszcz(101);

    document.querySelector('.Deszcz-Wynik').innerHTML = ZmiennaPomocniczaDeszcz + '%';

    LosowanieWiatr(25);

    document.querySelector('.Wiatr-Wynik').innerHTML = ZmiennaPomocniczaWiatr + 'km/h';

    var Panorama = document.querySelector('.Informacje-Sektor-2 img');

    Panorama.src = 'Przemysl_Panorama_1.jpg';

}

Przycisk1.addEventListener('click', ZmianaNaPrzemysl);

