function Position(){
   var zakladeczka = document.getElementById('Zakladeczka');
   zakladeczka.addEventListener('click', OnZakladeczkaClick);
   
   var teamMystic = document.getElementById('mystic');
    teamMystic.addEventListener('click', OnMysticClick);

    var ustawienieOkna = document.getElementById('middle-buttons');
    var szerokoscOkna = window.innerWidth;
    var wysokoscOkna = window.innerHeight;

    var pozycja =(szerokoscOkna/2) -(ustawienieOkna.clientWidth/2);
    var srodekWysokosci = (wysokoscOkna/3) - (ustawienieOkna.clientHeight/2);
    ustawienieOkna.style.right = pozycja+"px";
    ustawienieOkna.style.bottom = srodekWysokosci+"px";
  }

function OnZakladeczkaClick(){  
  document.getElementById("content").innerHTML = '';
  document.getElementById("content").innerHTML='<object type="text/html" data="tabelka.html" ></object>';
  
}

function OnMysticClick(){
	
	document.getElementById("content").innerHTML = '';
	document.getElementById("content").innerHTML='<object type="text/html" data="mystic.html" ></object>';
}