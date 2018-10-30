function Position(){
    var ustawienieOkna = document.getElementById('panelButton');
    var szerokoscOkna = window.innerWidth;
    var wysokoscOkna = window.innerHeight;

    var pozycja =(szerokoscOkna/2) -(ustawienieOkna.clientWidth/2);
    var srodekWysokosci = (wysokoscOkna/2) - (ustawienieOkna.clientHeight/2);
    ustawienieOkna.style.right = pozycja+"px";
    ustawienieOkna.style.bottom = srodekWysokosci+"px";
}