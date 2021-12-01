/* Agregar contenido pelicula*/
let titulo=["Sangre por sangre",
                    "Harry potter",
                    "el puente magico de terabithia",
                    "divergente",
                    "Arcane"];
let calif=[8,
                      9,
                      9,
                      9,
                      10];
let im=["https://es.web.img3.acsta.net/pictures/17/08/12/23/32/075544.jpg",
                "https://static.cinepolis.com/resources/mx/movies/posters/414x603/37281-619105-20211110041007.jpg",
                "https://i.ytimg.com/vi/L21NU2bMkZ0/movieposter.jpg",
                "https://es.web.img3.acsta.net/pictures/210/581/21058113_20131115104650328.jpg",
                "https://www.lacasadeel.net/wp-content/uploads/2021/11/arcane-encabezado.jpg"];
/**inicializa tabla**/
function agregaTabla(){
  var output = document.getElementById("output1");
  var hoverOutput = document.getElementById("hovertext1");
  for (var i = 0; i < titulo.length; i++) {
    var newDiv =  document.getElementById("output1").insertRow(-1);
    newDiv.innerHTML = '<td onmouseover="ponerImg(this)" id="'+i+'">'+titulo[i]+'</td><td>'+calif[i]+'</td>';
    output.appendChild(newDiv);
  }
  hoverOutput.innerHTML = ' <img class="tam" src="'+im[0]+'" alt="poster" >';
}

function ponerImg(ob) {
  var target = document.getElementById("hovertext1");
  target.innerHTML = '<img class="tam" src="'+im[ob.id]+'" alt="poster" >'
}
/**agregar**/
function agregarFila(){
  if(titulo.length==10){
    alert("solo se permiten 10 peliculas");
  }
  else{
    var tituloadd = prompt("Ingresa el nombre de la pelicula: ");
    var califadd = prompt("Ingresa calificacion de pelicula: ");
    var link = prompt("URL de portada de pelicula: ");

    if (tituloadd == null || califadd == null || link == null) {
      alert("te falto llenar un dato");
    }
    else{
      alert("Agregado");
      titulo.push(tituloadd);
      calif.push(califadd);
      im.push(link);
      console.log("titulo: "+tituloadd+" calificacion: "+califadd+" link:"+link);
      document.getElementById("output1").insertRow(-1).innerHTML = '<td onmouseover="ponerImg(this)" id="'+(titulo.length-1)+'">'+tituloadd+'</td><td>'+califadd+'</td>';
    }
  }
    
}
/**eliminar**/
function eliminarFila(){
  var table = document.getElementById("output1");
  var rowCount = table.rows.length;
  if(rowCount <= 1)
    alert('No hay mas que borrar');
  else
    table.deleteRow(rowCount -1);
    titulo.pop();
    calif.pop();
    im.pop();
}


