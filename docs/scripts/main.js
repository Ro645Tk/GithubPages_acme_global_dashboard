// main.js Module
/*
Este es el modulo principal que esta importando la funcion drawCharts
desde charts.js. Esto esta en plomo porque estamos importando algo
que no usamos por el momento.

Aqui el main.js no entiende lo que le queremos decir con drawCharts porque no
sabe donde esta a pesar que le diga la direccion a buscar (./charts.js).
Lo que sucede es que charts.js tiene el metodo drawCharts() (linea 6) pero no lo
expone para nadie, es privado practicamente. Entonces en la parte superior, lo que
vamos a hacer es decirle que por si acaso exporte drawCharts (linea 2), entonces
con eso ya se reconoce el drawCharts en main.js y el CallBack podra utilizarlo porque
el drawCharts ya esta expuesto por el charts.js, es visible
*/
import { drawCharts } from "./charts.js";

// Load Visualization API and codechart package.
/*
Entonces google charts pide que hagamos la carga de los paquetes que vamos
a utilizar. Aqui se cargaran los graficos, elem que va a utilizar o biblioteca
*/
google.charts.load('current', {'packages':['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
/*
Cuando cargue google charts va a llamar a una funcion que sera el drawCharts.
Como ya le estamos haciendo mencion a la funcion, automaticamente se pinta
el import (linea 8).
Asi ya tenemos el concepto de modulo, se tiene un modulo principal (linea 17)
y se puede poner varios import que importan cosas de otros modulos como el
charts.js lo cual hace que el codigo sea mas ordenado. Se podria hacer tod0
en un solo archivo pero no es tan ordenado, la descomposicion modular siempre
es una buena practica para que el codigo sea mas legible.

Cuando halla un CallBack, se invocara automaticamente al metodo drawCharts, es
decir, me pide que cargue y cuando REGRESE se dibujaran los graficos una vez que
termine de cargar
*/
google.charts.setOnLoadCallback(drawCharts);