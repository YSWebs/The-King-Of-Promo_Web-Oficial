window.onload = function() {
    setTimeout(() => {
   the_table_body.style.display="table" 
        
}, 100);
    setTimeout(() => {
   trloadtabletext.style.display="none"}, 1300);
setTimeout(() => {
   if(trloadtabletext.innerHTML=="Cargando..."){
      trloadtabletext.innerHTML="Cargando...<br>Su conexion a Internet es lenta o inestable.<br>Por favor revise su conexion a internet."
   }
}, 13000);
}
