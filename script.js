
        
		function search(){
			var num_cols, display, input, filter, table_body, tr, td, i, txtValue;
			num_cols = 1;
			input = document.getElementById("q");
			filter = input.value.toUpperCase();
			table_body = document.getElementById("the_table_body");
			tr = table_body.getElementsByTagName("tr");

			for(i=0; i< tr.length; i++){				
				display = "none";
				for(j=0; j < num_cols; j++){
					td = tr[i].getElementsByTagName("td")[j];
					if(td){
						txtValue = td.textContent || td.innerText;
						if(txtValue.toUpperCase().indexOf(filter) > -1){
							display = "";
						}
					}
				}
				tr[i].style.display = display;
			}
		}		
	
function cerrardivvideo(){
	document.getElementById("divflotvideoview").style.display="none";
document.getElementById("videoreproendiv").pause();
document.getElementById("videoreproendiv2").pause();
	videoreproendiv.style.display="none";
	videoreproendiv2.style.display="none";
img1divflotvideo.style.display="none";
	videotitle.innerHTML="Titulo";
	videoinfo.innerHTML="Descripción";
}
function openvideodiv(){
	if(videoreproendiv.style.display=="block"){videoreproendiv.play();}
	document.getElementById("divflotvideoview").style.display="block";
}




function P2(){
	videoreproendiv.src="Publicaciones/P2v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="Proximo palo que se acerca ???";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function P3(){
	videoreproendiv.src="Publicaciones/P3v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="Los Ordara";
	videoinfo.innerHTML="Bailarines";
	setTimeout(() => {openvideodiv();}, 100);
}

function P4(){
	videoreproendiv.src="Publicaciones/P4v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="???";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function P5(){
	videoreproendiv.src="Publicaciones/P5v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="Los Ordara 💨 🥵 parten esta joya de tema con sus pasillos.";
	videoinfo.innerHTML="Colaboracion de Bailarines";
	setTimeout(() => {openvideodiv();}, 100);
}

function E1(){
	videoreproendiv.src="Publicaciones/E1v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="Party";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function E2(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/E2i1.jpg";
videotitle.innerHTML="Party";
	videoinfo.innerHTML="Otro de nuestros eventos.";
	setTimeout(() => {openvideodiv();}, 100);
}

function P6(){
	videoreproendiv.src="Publicaciones/P6v1.mp4";
	videoreproendiv.style.display="block";
videotitle.innerHTML="Palo, sale pronto ???";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function E3(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/E3i1.jpg";
videotitle.innerHTML="";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function E4(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/E4i1.jpg";
videotitle.innerHTML="";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
}

function P7(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/P7i1.jpg";
videotitle.innerHTML="*Ofertas de promoción por ⚜️ lista de difusión ⚜️*";
	videoinfo.innerHTML="5x100📲Transferencia  💳:200💸<br>15x250📲Transferencia 💳:700 <br>25x360📲Transferencia 💳:1500<br>*Promo completa incluido canal estas más que quemados y  apoyo de dos promotores*📲 :420Trasferencia  💳:2000";
	setTimeout(() => {openvideodiv();}, 100);
}

function P8(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/P8i1.jpg";
videotitle.innerHTML="*Ofertas de promoción por ⚜️ separado y completa precios y forma de pago y froma de trabajo del proyecto*";
	videoinfo.innerHTML=pinfop8.innerHTML;
	setTimeout(() => {openvideodiv();}, 100);
}

function P9(){
	videoreproendiv.src="Publicaciones/P9v1.mp4";
videoreproendiv2.src="Publicaciones/P9v2.mp4";
	videoreproendiv.style.display="block";
videoreproendiv2.style.display="block";
	videoreproendiv2.play()
videotitle.innerHTML="*Los oldara 💨 🥵 rompen este Tema*";
	videoinfo.innerHTML="";
	setTimeout(() => {openvideodiv();}, 100);
	setTimeout(() => {
		videoreproendiv.pause();
		videoreproendiv2.pause();
	}, 1000);
}

function E6(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/E6i1.jpg";
videotitle.innerHTML="*Sport Club Bar y 360°Show*";
	videoinfo.innerHTML=pe6.innerHTML;
	setTimeout(() => {openvideodiv();}, 100);
}

function P10(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/P10i1.jpg";
videotitle.innerHTML="*Oferta*";
	videoinfo.innerHTML=pinfop10.innerHTML;
	setTimeout(() => {openvideodiv();}, 100);
}


function P15(){
	img1divflotvideo.style.display="block";
	img1divflotvideo.src="Publicaciones/P15i3.jpg";
videotitle.innerHTML="Contador de Dinero para Android";
	videoinfo.innerHTML="Contador de Dinero:<br>Util para contar su dinero de manera facil.<br>Creado por Yuniel Sánchez<br><a href='https://yunielsanchez309-wq.github.io/YWebAPK/Contador_de_dinero.apk'>Descargar .apk</a>";
	setTimeout(() => {openvideodiv();}, 100);
}

