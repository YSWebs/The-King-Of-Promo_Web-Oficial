
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
	contentdiv.style.display="block";
	document.getElementById("divflotvideoview").style.display="none";
document.getElementById("videoreproendiv").pause();
}
function openvideodiv(){
	contentdiv.style.display="none";
	setTimeout(() => {videoreproendiv.play();}, 100);
	document.getElementById("divflotvideoview").style.display="block";
}
function pausarTodosLosVideos() {
	setTimeout(() => {

    const videos = document.querySelectorAll('.videoiddivcontenttable'); // Selecciona todos los videos
    videos.forEach(video => {
        video.pause(); // Pausa cada video
        video.currentTime = 0; // Opcional: reinicia el video al inicio
    });
		}, 1000);
}

// Llama a la función cuando se hace clic en el botón
document.getElementById('pausarButton').addEventListener('click', pausarTodosLosVideos);


function openvideochrislebronprestame(){
	videoreproendiv.src="Chris_Lebron_-_Préstame__Video_Lyrics____En_Honor_Al_Que_Ama(144p).mp4";
videotitle.innerHTML="Chris Lebron - Prestame";
	videoinfo.innerHTML="Cantante: Chris Lebron <br> Tema: Prestame";
	setTimeout(() => {openvideodiv();}, 100);
}
function openvideofiesta1(){
	videoreproendiv.src="VID-20251118-WA0000.mp4";
videotitle.innerHTML="fiesta 1";
	videoinfo.innerHTML="Descripcion fiesta 1";
	setTimeout(() => {openvideodiv();}, 100);
}


