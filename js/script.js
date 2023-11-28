function tas(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3))
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu = 'img/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (bilgisayarinSecimi == 'tas'){
        document.getElementById('result').innerHTML="Sonuç: Berabere!";
    }

    if (bilgisayarinSecimi == 'kagit'){
        document.getElementById('result').innerHTML="Sonuç: Yenildiniz!";
    }

    if (bilgisayarinSecimi == 'makas'){
        document.getElementById('result').innerHTML="Sonuç: Kazandınız!";
    }
    
}

function kagit(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3))
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu= 'img/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (bilgisayarinSecimi == 'tas'){
        document.getElementById('result').innerHTML="Sonuç: Yenildiniz!";
    }

    if (bilgisayarinSecimi == 'kagit'){
        document.getElementById('result').innerHTML="Sonuç: Berabere!";
    }

    if (bilgisayarinSecimi == 'makas'){
        document.getElementById('result').innerHTML="Sonuç: Kazandınız!";
    }
}

function makas(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3))
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu= 'img/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (bilgisayarinSecimi == 'tas'){
        document.getElementById('result').innerHTML="Sonuç: Yenildiniz!";
    }

    if (bilgisayarinSecimi == 'kagit'){
        document.getElementById('result').innerHTML="Sonuç: Yendiniz!";
    }

    if (bilgisayarinSecimi == 'makas'){
        document.getElementById('result').innerHTML="Sonuç: Berabere!";
    }
}