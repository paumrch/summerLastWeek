'use strict'

// JSON Javascript Object Notation
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Cargado")
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        país: "EEUU"
    };
    
    var peliculas = [
        {titulo: "La verdad duele", year: 2016, país: "España"},
        pelicula
    ];
    console.log(pelicula);
    var caja_peliculas = document.querySelector("#peliculas")
    var index;
    for(index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].titulo);
        caja_peliculas.append(p)
    }
})
    