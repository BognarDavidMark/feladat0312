/* File: index.html
* Author: Bognár Dávid Márk
* Copyright: 2022, Bognár Dávid Márk
* Group: Szoft  I/N
* Date: 2022-02-28
* Github: https://github.com/bognardavidmark/
* Licenc: GNU GPL */

var oldalIn = document.getElementById("oldal");
var alfaIn = document.getElementById("alfa");
var szamitGomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitGomb.addEventListener('click', function(){
    let oldal = oldalIn.value
    let alfa = alfaIn.value
    let sugar = 1/2*oldal*Math.sin(alfa);
    console.log(sugar.toLocaleString());
    eredmenyIn.value = (sugar.toLocaleString());
});
