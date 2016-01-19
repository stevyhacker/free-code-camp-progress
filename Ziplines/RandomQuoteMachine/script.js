function getNewRandomQuote (){

    document.getElementById("quoteText").innerHTML="\"New quote " + Math.floor(Math.random()*100)+1 + ".\"";

}