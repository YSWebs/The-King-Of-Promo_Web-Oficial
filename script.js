
        
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
	videoreproendiv.style.display="none";
	img1divflotvideo.style.display="none"
	videotitle.innerHTML="Titulo";
	videoinfo.innerHTML="Descripción";
}
function openvideodiv(){
	contentdiv.style.display="none";
	setTimeout(() => {videoreproendiv.play();}, 100);
	document.getElementById("divflotvideoview").style.display="block";
}




function openvideofiesta1(){
	videoreproendiv.src="VID-20251118-WA0000.mp4";
	videoreproendiv.style.display="block";
	img1divflotvideo.style.display="block";
videotitle.innerHTML="fiesta 1";
	videoinfo.innerHTML="Descripcion fiesta 1";
	setTimeout(() => {openvideodiv();}, 100);
}


