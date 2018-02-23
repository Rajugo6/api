window.onload = function() {
    cargarTopPagina();
	cargarPartidos("Primera División");
	descargaLiga(1);
};

function cargarTopPagina(){
	document.getElementById("top").innerHTML ="<h2'>Bienvenido al portal de la Premier y la Liga </h2><div id='bts'>" +
		"<input id='btpremier' type='button' onclick='descargaLiga(10);' value='Premier League'/>" +
		"<input id='btsantander' type='button' onclick='descargaLiga(1);' value='Liga Santander'/>";
}
function cargarPartidos(ligacorrecta)
{
    	// 1.-Instancia del objeto XMLHttpRequest
	if (window.XMLHttpRequest) {
		peticion_httpPartidos = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpPartidos = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 2.-Preparar la funcion de respuesta
	peticion_httpPartidos.onreadystatechange = muestraContenido;

	// 3.-Realizar peticion HTTP
	var url = "https://apiclient.resultados-futbol.com/scripts/api/api.php?key=8dd68e754962cedfed36e2951bf5e25b&tz=Europe/Madrid&format=json&req=matchsday&date=" + new Date().toJSON().slice(0,10);
	peticion_httpPartidos.open('GET', url, true);
    peticion_httpPartidos.send(null);
	var insertar="";
	var introducida=false;
	function muestraContenido() {
		if (peticion_httpPartidos.readyState == 4 && peticion_httpPartidos.status == 200) {

				// se recoge el doc con notacion json
				var respuesta_json = peticion_httpPartidos.responseText;
				objeto_json = eval("(" + respuesta_json + ")");
				var cont=0;
				var liga = new Array(objeto_json.matches.length);
                var local = new Array(objeto_json.matches.length);
                var visitante = new Array(objeto_json.matches.length);
                var hora = new Array(objeto_json.matches.length);
                var minuto = new Array(objeto_json.matches.length);
                var status = new Array(objeto_json.matches.length);
                var resultado= new Array(objeto_json.matches.length);
                var localico = new Array(objeto_json.matches.length);
				var visitanteico = new Array(objeto_json.matches.length);
				var insertar="<h2 align='center'>Partidos del dia de hoy</h2>";
				for ( var i = 0; i < objeto_json.matches.length; i++)
				{	
                    liga[i]=objeto_json.matches[i].competition_name;
                    local[i]=objeto_json.matches[i].local_abbr;
                    visitante[i]=objeto_json.matches[i].visitor_abbr;
                    status[i]=objeto_json.matches[i].status;
                    resultado[i]=objeto_json.matches[i].result;
                    localico[i]=objeto_json.matches[i].local_shield;
					visitanteico[i]=objeto_json.matches[i].visitor_shield;
                    if(!introducida && liga[i]==ligacorrecta)
                    {
						insertar+= "<p align='center'>" + liga[i] + "</p>";
						cont++;
						introducida=true;
                    }
					insertar+="<div align='center'id='partido'>";
					if(liga[i]==ligacorrecta)
					{
						cont++;
						if (status[i]==-1)
						{
							hora[i]=objeto_json.matches[i].hour + ":" + objeto_json.matches[i].minute;
							insertar+="<a id='hora'>" + hora[i] +" -</a>";
						}
						else if(status[i]==0)
						{
							minuto[i]=objeto_json.matches[i].live_minute;
							insertar+="<a id='hora'>" + minuto[i] +" -</a>";
						}
						else if(status[i]==1)
						{
							minuto[i]="fin";
							insertar+="<a id='hora'>" + hora[i] +" -</a>";
						}
						insertar+="<img id='icono' src=" + localico[i] + "/>" + "<a>" + local[i] + " " +resultado[i] + " " + visitante[i] +
								"<a/><img id='icono' src=" + visitanteico[i] + "/></div>"; 
					}
				}
				if(cont==0)
				{
					insertar="<h2 align='center'> No existen partidos programados para hoy<h2>"
				}
				document.getElementById("partidos").innerHTML = insertar;
			}
	}
}
function descargaLiga(liga)
{
	var premier = "Premier League";
	var lsantander = "Primera División";
	if(liga==1)
	{
		cargarPartidos(lsantander);
	}
	else if(liga==10)
	{
		cargarPartidos(premier);
	}
	if (window.XMLHttpRequest) {
		peticion_httpLiga = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // navegadores obsoletos
		peticion_httpLiga = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 2.-Preparar la funcion de respuesta
	peticion_httpLiga.onreadystatechange = muestraContenido;
	var url = "https://apiclient.resultados-futbol.com/scripts/api/api.php?key=8dd68e754962cedfed36e2951bf5e25b&tz=Europe/Madrid&format=json&req=tables&league="+liga+"&group=1";
	peticion_httpLiga.open('GET', url, true);
	peticion_httpLiga.send(null);
	var insertarTabla="<table id='clasificacion'><tr><td>Posición</td><td>Equipo</td><td>Nombre</td>" +
					"<td>Puntos</td><td>Victorias</td><td>Empates</td><td>Derrotas</td><td>A Favor</td>" +
					"<td>En contra</td><td>Diferencia</td><td>Racha</td></tr>"
	function muestraContenido() {
		if (peticion_httpLiga.readyState == 4 && peticion_httpLiga.status == 200)
		{
			var respuesta_json = peticion_httpLiga.responseText;
			var objeto_json = eval("(" + respuesta_json + ")");
			var basealias = new Array(objeto_json.table.length);
			var posicion = new Array(objeto_json.table.length);
			var equipo = new Array(objeto_json.table.length);
			var nombre = new Array(objeto_json.table.length);
			var puntos = new Array(objeto_json.table.length);
			var victorias = new Array(objeto_json.table.length);
			var empates = new Array(objeto_json.table.length);
			var derrotas = new Array(objeto_json.table.length);
			var gaf = new Array(objeto_json.table.length);
			var gec = new Array(objeto_json.table.length);
			var dg = new Array(objeto_json.table.length);
			var racha = new Array(objeto_json.table.length);
			for ( var i = 0; i < objeto_json.table.length; i++)
			{
				basealias[i]=objeto_json.table[i].basealias;
				posicion[i]=objeto_json.table[i].pos;
				equipo[i]=objeto_json.table[i].shield;
				nombre[i]=objeto_json.table[i].team;
				puntos[i]=objeto_json.table[i].points;
				victorias[i]=objeto_json.table[i].wins;
				empates[i]=objeto_json.table[i].draws;
				derrotas[i]=objeto_json.table[i].losses;
				gaf[i]=objeto_json.table[i].gf;
				gec[i]=objeto_json.table[i].ga;
				dg[i]=objeto_json.table[i].avg;
				racha[i]=objeto_json.table[i].form;
				var estado = racha[i].split("");
				var forma="";
				for(var j=0;j<5;j++)
				{
					switch (estado[j]) {
						case "w":
							forma +="V";
							break;
						case "d":
							forma +="E";
							break;
						case "l":
							forma +="D";
							break;
					}
				}
				insertarTabla+="<tr><td>" + posicion[i] +"</td><td><img id='icono' src='" + equipo[i] + "'/></td>" +
								"<td>" +nombre[i] + "</td><td>" + puntos[i] + "</td><td>" + victorias[i] + "</td><td>" + empates[i] +
								"</td><td>" + derrotas[i] + "</td><td>" + gaf[i] + "</td><td>" + gec[i] + "</td><td>" + dg[i] + 
								"</td><td>" + forma +"</td></tr>";
			}
			document.getElementById("wrap").innerHTML = insertarTabla;
		}
	}
}