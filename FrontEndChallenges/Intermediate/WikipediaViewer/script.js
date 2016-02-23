function wikiSearch() {

    var query = document.getElementById("query-field").value;
    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    var cb = '&callback=JSON_CALLBACK';

    var url = api + query + cb;
    //alert(url);
    //$.getJSON(url, function (json) {
    //        alert(JSON.stringify(json));
    //    });

    $.getJSON(url, function() {
            alert("success");
        })
        .success(function() { alert("second success"); })
        .error(function() { alert("error"); })
        .complete(function() { alert("complete"); });

}