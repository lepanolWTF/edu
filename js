	function cargarTabla(){
		var datos = 'todo='+"todo";
	    var xmlhttp;  // objeto XMLHttpRequest
	    if (window.XMLHttpRequest) {  // para IE7+, Firefox, Chrome, Opera, Safari
	        xmlhttp = new XMLHttpRequest();
	    } else {  // para IE6, IE5
	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    xmlhttp.onreadystatechange = function() {
	    // si el resultado está listo (readyState==4) y la respuesta es correcta (status==200)
	        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	            var respuesta = xmlhttp.responseText;
	            respuesta=respuesta.split(";");
				rellenarTabla(respuesta);
	        }
		}
		xmlhttp.open("GET","Back?" + datos ,true);  // crea la conexión con parámetros: método, url, asíncrono?
		xmlhttp.setRequestHeader("X-Requested-With", "xmlhttprequest");  // establece la cabecera HTTP necesaria
		xmlhttp.send();  // lanza la solicitud
	}
	
	function borrar(){
		document.getElementById("empleados").innerHTML="";
		
		var table = document.getElementById("empleados");
		var row = table.insertRow(0);
		row.className +=" tipo0";
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		var cell7 = row.insertCell(6);
		var cell8 = row.insertCell(7);
		var cell9 = row.insertCell(8);
		cell1.innerHTML = "Nº Empleado";
		cell2.innerHTML = "Nombre";
		cell3.innerHTML = "Oficio";
		cell4.innerHTML = "Salario";
		cell5.innerHTML = "Comisión";
		cell6.innerHTML = "Jefe";
		cell7.innerHTML = "Fecha contrato";
		cell8.innerHTML = "Departamento";
	}
	
	function rellenarTabla(respuesta){
		borrar();
		var table = document.getElementById("empleados");
		var tipo="tipo1";
		
		for(i=0;i<respuesta.length-1;i++){
			var spl=respuesta[i].split(",");
			var row = table.insertRow(document.getElementById("empleados").rows.length);
			if(tipo=="tipo1"){
				tipo="tipo2";
			}else{
				tipo="tipo1";				
			}
			row.className +=tipo;
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			var cell7 = row.insertCell(6);
			var cell8 = row.insertCell(7);
			var cell9 = row.insertCell(8);
			cell1.innerHTML = spl[0];
			cell2.innerHTML = spl[1];
			cell3.innerHTML = spl[2];
			cell4.innerHTML = spl[3]+"€";
			if(spl[4]!="null"){
				cell5.innerHTML = spl[4]+"€";
			}else{
				cell5.innerHTML = "Sin comisión";
			}
			cell6.innerHTML = spl[5];
			cell7.innerHTML = spl[6];
			cell8.innerHTML = spl[7];
			cell9.innerHTML = "<div class=\"modybor\" onclick=\"mii()\"><img class=\"icono\" src=\"./fotos/icons8-edit-24.png\"></div>         <div onclick=\"alertaBorrar("+spl[0]+")\" class=\"modybor\"><img class=\"icono conIco\" src=\"./fotos/icons8-trash-can-24.png\"></div>";
		}
	}
