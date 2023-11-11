let edad = Number(prompt("¿ingrese cuantos años tiene?"));
let licencia = confirm("¿Tiene licencia profesional?");
if(edad >= 25 && licencia){
    alert("APTO");
}
else{
    alert("NO APTO")
}