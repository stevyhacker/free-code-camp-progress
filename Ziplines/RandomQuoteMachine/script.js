function getNewRandomQuote (){

    // single quote
    var quote = {
        author:"Patrick Rothfuss",
        book:"The Wise Man's Fear",
        quote:"There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man"
    };

    //quote array
    var quotes = [
        {
            author:"Patrick Rothfuss",
            book:"The Wise Man's Fear",
            quote:"There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man"
        }
    ];

    document.getElementById("quoteText").innerHTML="\"New quote " + quotes[ Math.floor(Math.random()*quotes.length)].quote + ".\"";

}