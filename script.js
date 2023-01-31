/* 
-Create an array inside a function and call that function on window load.
-Retrieve the quote from the array.
-Use the index generated to display the quote into the paragraph tag using innerHTML.
*/

/* Create an array inside a function and call that function on window load */
const generateQuote = function() {
    const quotes = [
            "Det bedste tegn på, at der findes intelligens i rummet, er, at de aldrig har forsøgt at kontakte os.",
            "Livet er langt, lykken er kort, salig er den, der tør give den bort", 
            "Latter er den korteste afstand mellem to mennesker.",
            "Uden musik ville livet være en fejl.",
            "Det bedste tidspunkt at plante et træ på, er for 20 år siden. Det næstbedste tidspunkt er i dag.",
            "Uanset om du tror du kan eller ikke kan, så har du ret.",
            "Hvis du fortæller sandheden, så behøver du ikke huske alt.",
            "En rigtig ven siger gode ting om dig, bag din ryg.",
            "Hvis man når dertil, at man ikke længere lægger planer for fremtiden, kan man ligeså godt trække græstørvene over hovedet.",
            "Der findes kun to måder at leve livet på. Den ene er, som om ingenting er et mirakel. Den anden er, som om alting er et."
    ];
    let arrayIndex = Math.floor(Math.random() * 10);



    /* use the index generated to display the quotes into the paragraph tag using innerHTML */
    
    document.getElementById("quotes").innerText = quotes[arrayIndex];
    
   
}


/* Array values can be retrieves by their indexes. */
/* on page-load pick a random quote (index) from the array to display */
/* math.random returns a floating-point number eg: 0.65 and in order to access the array values we need an integer - math-floor */
/* Math.floor returns a number representing the largest integer less than or equal to the specified number. */
/* in order to return a more efficient number lets multiply the random number with the array length and use math.floor wich will return us an integer and save that value in a variable */


window.onload = function() {
    generateQuote();

   /*  console.log(arrayIndex); */
}