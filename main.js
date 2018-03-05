window.onload= function(){
    cargarTop();
	cargarFiltros();
	cargarArenas();
}
function cargarTop(){
    document.getElementById("top").innerHTML="<img align='center' id='cabecera'src='Cabecera.png'/>";
}
function cargarFiltros()
{
	document.getElementById("filtros").innerHTML='<p><strong>Rareza:</strong><a id="Common" href="#" onClick="cartasRareza(this.id)" class="boton_1">Comunes</a>' +
										'<a id="Rare" href="#" onClick="cartasRareza(this.id)" class="boton_1">Raras</a>' +
										'<a id="Epic" href="#" onClick="cartasRareza(this.id)" class="boton_1">Epicas</a>' +
										'<a id="Legendary" href="#" onClick="cartasRareza(this.id)" class="boton_1">Legendarias</a></p>' +

										'<p><strong>Tipo:</strong><a id="Spell" href="#" onClick="cartasTipo(this.id)" class="boton_2">Hechizos</a>' +
										'<a id="Troop" href="#" onClick="cartasTipo(this.id)" class="boton_2">Tropas</a>' +
										'<a id="Building" href="#" onClick="cartasTipo(this.id)" class="boton_2">Edificios</a>' +
										'<p><a href="#" onClick="cargarArenas()" class="boton_1">Arenas</a></p>';

}
function cargarCartasArena(){
    if (window.XMLHttpRequest) {
		peticion_httpCartasArena = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpCartasArena = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.-Preparar la funcion de respuesta
	peticion_httpCartasArena.onreadystatechange = muestraContenido;
	var url = 'http://www.clashapi.xyz/api/cards';
	peticion_httpCartasArena.open('GET', url, true);
	peticion_httpCartasArena.send(null);
	function muestraContenido(){
		if (peticion_httpCartasArena.readyState == 4 && peticion_httpCartasArena.status == 200)
		{
			var respuesta_json = peticion_httpCartasArena.responseText;
			var objeto_json = eval("(" + respuesta_json + ")");
			var imagenes0='';
			var imagenes1='';
			var imagenes2='';
			var imagenes3='';
			var imagenes4='';
			var imagenes5='';
			var imagenes6='';
			var imagenes7='';
			var imagenes8='';
			var imagenes9='';
			var imagenes10='';
			var imagenes11='';
			for ( var i = 0; i < objeto_json.length; i++)
			{
				switch (objeto_json[i].arena) {
					case 0:
						imagenes0+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 1:
						imagenes1+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 2:
						imagenes2+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 3:
						imagenes3+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 4:
						imagenes4+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 5:
						imagenes5+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 6:
						imagenes6+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 7:
						imagenes7+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 8:
						imagenes8+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 9:
						imagenes9+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 10:
						imagenes10+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					case 11:
						imagenes11+='<img class="cartaArena" id="' + objeto_json[i].idName +'" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
							'onclick="estadisticas(this.id)"/>';
						break;
					default:
						break;
				}
			}
			document.getElementById(0).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes0 + '</div>';
			document.getElementById(1).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes1 + '</div>';
			document.getElementById(2).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes2 + '</div>';
			document.getElementById(3).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes3 + '</div>';
			document.getElementById(4).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes4 + '</div>';
			document.getElementById(5).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes5 + '</div>';
			document.getElementById(6).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes6 + '</div>';
			document.getElementById(7).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes7 + '</div>';
			document.getElementById(8).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes8 + '</div>';
			document.getElementById(9).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes9 + '</div>';
			document.getElementById(10).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes10 + '</div>';
			document.getElementById(11).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p>' + imagenes11 + '</div>';
			document.getElementById(12).innerHTML+='<div id="cartas"><p><strong>Cartas desbloqueadas en esta arena</strong></p><h2>No se desbloquean cartas en esta arena</h2></div>';
		}
	}
}
function cargarArenas()
{
	if (window.XMLHttpRequest) {
		peticion_httpArenas = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpArenas = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 2.-Preparar la funcion de respuesta
	peticion_httpArenas.onreadystatechange = muestraContenido;
	var url = "http://www.clashapi.xyz/api/arenas";
	peticion_httpArenas.open('GET', url, true);
	peticion_httpArenas.send(null);
	var arenas="";
	var imagenesCartas="";
	function muestraContenido() {
		if (peticion_httpArenas.readyState == 4 && peticion_httpArenas.status == 200)
		{
			var respuesta_jsonArenas = peticion_httpArenas.responseText;
			var objeto_jsonArenas = eval("(" + respuesta_jsonArenas + ")");
			var nombreArena = new Array(objeto_jsonArenas.length);
			var idArena = new Array(objeto_jsonArenas.length);
			var copasArena = new Array(objeto_jsonArenas.length);
			var ncartasArena = new Array(objeto_jsonArenas.length);
			for ( var i = 0; i < objeto_jsonArenas.length; i++)
			{
				nombreArena[i]=objeto_jsonArenas[i].name;
				idArena[i]=objeto_jsonArenas[i].idName;
				copasArena[i]=objeto_jsonArenas[i].minTrophies;
				ncartasArena[i]=objeto_jsonArenas[i].cardUnlocks.length;
				arenas+='<div class="fila" id="'+i+'"><div id="informacion"><h2>' + nombreArena[i] +
				'</h2><p><strong>Copas mínimas:</strong> ' + copasArena[i] + 
				'</p><img id="arena" src="http://www.clashapi.xyz/images/arenas/' +idArena[i]+'.png"/></div></div>';
			}
			document.getElementById("resultado").innerHTML=arenas;
			cargarCartasArena();
		}	
	}
}
function estadisticas(carta)
{
	if (window.XMLHttpRequest) {
		peticion_httpCarta = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpCarta = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.-Preparar la funcion de respuesta
	peticion_httpCarta.onreadystatechange = muestraContenido;
	var url = 'http://www.clashapi.xyz/api/cards/' + carta;
	peticion_httpCarta.open('GET', url, true);
	peticion_httpCarta.send(null);
	function muestraContenido(){
		if (peticion_httpCarta.readyState == 4 && peticion_httpCarta.status == 200)
		{
			var respuesta_json = peticion_httpCarta.responseText;
			var objeto_json = eval("(" + respuesta_json + ")");
			document.getElementById("resultado").innerHTML ='<div class="fila"><div id="informacion"><h2>' + objeto_json.name + '</h2>' +
			'<p><strong>Rareza: </strong>' + objeto_json.rarity + '<p/><p><strong>Tipo: </strong>' + objeto_json.type +
			'</p><p><strong>Descripcion</strong>' + objeto_json.description + '</p><p><strong>Coste de elixir: </strong>' +
			objeto_json.elixirCost + '</p></div><img src ="http://www.clashapi.xyz/images/cards/' +carta +'.png"/></div>';
		}
	}
}
function cartasRareza(rareza)
{
	if (window.XMLHttpRequest) {
		peticion_httpCarta = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpCarta = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.-Preparar la funcion de respuesta
	peticion_httpCarta.onreadystatechange = muestraContenido;
	var url = 'http://www.clashapi.xyz/api/cards/';
	peticion_httpCarta.open('GET', url, true);
	peticion_httpCarta.send(null);
	function muestraContenido(){
		if (peticion_httpCarta.readyState == 4 && peticion_httpCarta.status == 200)
		{
			var respuesta_json = peticion_httpCarta.responseText;
			var objeto_json = eval("(" + respuesta_json + ")");
			var cartas="";
			var cont=0;
			for(var i=0;i<objeto_json.length;i++)
			{
				if(objeto_json[i].rarity==rareza)
				{
					if(cont%2==0)
					{
						cartas+='<div class="filaFiltrosPar"><div id="informacion"><h2>' + objeto_json[i].name +'</h2><p><strong>Descripcion:</strong> '+ 
						objeto_json[i].description +'</p><p><strong>Coste de elixir:</strong> '+ objeto_json[i].elixirCost +
						'</p></div><img class="carta" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
						'/></div>';
					}
					else
					{
						cartas+='<div class="filaFiltrosImpar"><div id="informacion"><h2>' + objeto_json[i].name +'</h2><p><strong>Descripcion:</strong> '+ 
						objeto_json[i].description +'</p><p><strong>Coste de elixir:</strong> '+ objeto_json[i].elixirCost +
						'</p></div><img class="carta" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
						'/></div>';
					}
					cont++;
				}
			}
			document.getElementById("resultado").innerHTML=cartas;
		}
	}
}
function cartasTipo(tipo)
{
	if (window.XMLHttpRequest) {
		peticion_httpCarta = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpCarta = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.-Preparar la funcion de respuesta
	peticion_httpCarta.onreadystatechange = muestraContenido;
	var url = 'http://www.clashapi.xyz/api/cards/';
	peticion_httpCarta.open('GET', url, true);
	peticion_httpCarta.send(null);
	function muestraContenido(){
		if (peticion_httpCarta.readyState == 4 && peticion_httpCarta.status == 200)
		{
			var respuesta_json = peticion_httpCarta.responseText;
			var objeto_json = eval("(" + respuesta_json + ")");
			var cartas="";
			var cont=0;
			for(var i=0;i<objeto_json.length;i++)
			{
				if(objeto_json[i].type==tipo)
				{
					if(cont%2==0)
					{
						cartas+='<div class="filaFiltrosPar"><div id="informacion"><h2>' + objeto_json[i].name +'</h2><p><strong>Descripcion:</strong> '+ 
						objeto_json[i].description +'</p><p><strong>Coste de elixir:</strong> '+ objeto_json[i].elixirCost +
						'</p></div><img class="carta" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
						'/></div>';
					}
					else
					{
						cartas+='<div class="filaFiltrosImpar"><div id="informacion"><h2>' + objeto_json[i].name +'</h2><p><strong>Descripcion:</strong> '+ 
						objeto_json[i].description +'</p><p><strong>Coste de elixir:</strong> '+ objeto_json[i].elixirCost +
						'</p></div><img class="carta" src ="'+ 'http://www.clashapi.xyz/images/cards/' + objeto_json[i].idName +'.png"' +
						'/></div>';
					}
					cont++;
				}
			}
			document.getElementById("resultado").innerHTML=cartas;
		}
	}
}