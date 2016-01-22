function getNewRandomQuote() {

    //quote array
    var quotes = [
        {
            author: "Patrick Rothfuss",
            book: "The Wise Man's Fear",
            quote: "There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man"
        },
        {
            author: "Robert Jordan",
            book: "The Wheel of Time",
            quote: "Death is lighter than a feather. Duty, heavier than a mountain."
        },
        {
            author: "Terry Pratchett",
            book: "Jingo",
            quote: "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life."
        },
        {
            author: "Mark Lawrence",
            book: "King of Thorns",
            quote: "There is no sound more annoying than the chatter of a child, and none more sad than the silence they leave when they are gone."
        },
        {
            author: "George R.R. Martin",
            book: "A Game of Thrones",
            quote: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him."
        }
    ];

    document.getElementById("quoteText").innerHTML = "\"" + quotes[Math.floor(Math.random() * quotes.length)].quote + ".\"";

}