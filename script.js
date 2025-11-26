
        
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
	videoreproendiv.style.display="none";
	img1divflotvideo.style.display="none";
	videotitle.innerHTML="Titulo";
	videoinfo.innerHTML="Descripción";
}
function openvideodiv(){
	setTimeout(() => {videoreproendiv.play();}, 500);
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
	videoinfo.innerHTML="";
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