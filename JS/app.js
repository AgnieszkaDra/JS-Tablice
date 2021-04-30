
let result = document.getElementById("result");

// let zm1 = "zm1";
// let zm2 = "zm2"; zmiana na tablicę
// let zm3 = "zm3";
// let zm4 = "zm4";

let tab = new Array("Poniedziałek", "Wtorek", "Sroda"); // new - utworzenie nowej tablicy
result.innerHTML += tab[0] + "<br>";
result.innerHTML += tab[1] + "<br>";
result.innerHTML += tab[2] + "<br>";
tab[3] = "Czwartek";
result.innerHTML += tab[3] + "<br>";
tab[4] = "Piątek";
result.innerHTML += tab[4] + "<br>";
tab[5] = "Sobota";
result.innerHTML += tab[5] + "<br>";
tab[6] = "Niedziela";
result.innerHTML += tab[6] + "<br>";
result.innerHTML += tab.length + "<br>";  // tablica nie może posiadać żadnych przerw, indeksów

result.innerHTML += "------<br>"

for (let i = 0; i < tab.length; i++)
{
    result.innerHTML += tab[i] + "<br>"
}
console.log(tab);

tab.forEach(x =>console.log(x)) //wyświetlone w konsoli 

let tab2 = new Array(3);
tab2[0] = 10; 
tab2[1] = true;
tab2[2] = 'JavaScript';

console.log(tab2);

let tab3 = ["Wiosna", "Lato", "Jesień", "Zima"];

console.log(tab3);

let tab4 = tab.concat(tab2).concat(tab3);
console.log(tab4);