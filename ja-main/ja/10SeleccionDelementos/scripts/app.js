'use strict';
//nodos hojas del arbol
//repaint y reflaw
//seleccionar elementos de Dom
//get tomar traer set establecer valor
let myTitle=document.getElementById('titulo');
//seleccionar por el name
let tagName=document.getElementByName('art1');
//seleccion por etiqueta
let etiqueta=document.getElementBytagName("h3");
console.log(tagName);
//QuerySelector

let querycontainer = document.querySelector("#container");
//queryselector class
let myMenu = document.querySelector(".menu");
console.log(myMenu);

//queryselector etiqueta
let myOl = document.querySelector("ol");
//all
let allArt = document.querySelectorAll("aticle")
//console.log(allArt);
//crear elementos

let miparrafo = document.createElement("p");
miParrafo.id="Parrafo";
miParrafo.className="Parrafo";
miParrafo.textContent="<h3>Esto es otro titulo</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error labore omnis amet cupiditate neque illum sint incidunt iure illo nesciunt qui ipsa laboriosam quam sit iste commodi, quo tempora sapiente.";
miParrafo.innerHTML="<h3> Esto es otro titulo</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error labore omnis amet cupiditate neque <strong>illum sint incidunt iure illo nesciunt qui ipsa laboriosam </strong>quam sit iste commodi, quo tempora sapiente.";
//insertar elemento en el Dom

//documento.body.appendChild(miParrafo);
//selector elementos
let seleccion = document.getElementsById("section1");
seccion1.appendChild(miParrafo);



