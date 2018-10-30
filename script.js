function Position(){
    var ustawienieOkna = document.getElementById('middle-buttons');
    var szerokoscOkna = window.innerWidth;
    var wysokoscOkna = window.innerHeight;

    var pozycja =(szerokoscOkna/2) -(ustawienieOkna.clientWidth/2);
    var srodekWysokosci = (wysokoscOkna/3) - (ustawienieOkna.clientHeight/2);
    ustawienieOkna.style.right = pozycja+"px";
    ustawienieOkna.style.bottom = srodekWysokosci+"px";
	console.log('dupa');
}