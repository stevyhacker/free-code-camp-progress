function wikiSearch() {

    var query = document.getElementById("query-field").value;
    //alert(query);
    //https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

// Using XMLHttpRequest
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');

// Using jQuery
    $.ajax({
        url: remoteUrlWithOrigin,
        data: query,
        dataType: 'json',
        type: 'POST',
        headers: {'Api-User-Agent': 'Example/1.0'},
        success: function (data) {
            // do something with data
        }
    });

}