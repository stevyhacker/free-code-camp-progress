var openWeatherApiKey = "0046bebb8d990ce411fa52d91c85572c";

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported");
    }
}


function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "  Longitude: " + position.coords.longitude);
    getWeatherData(position.coords.latitude, position.coords.longitude);
}

function getWeatherData(latitude, longitude) {
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    url += "lat=" + latitude + "&lon=" + longitude;
    url += "&appid=" + openWeatherApiKey;
    $.getJSON(url, function (json) {

        alert(JSON.stringify(json));
        //$(".message").html(JSON.stringify(json));

    });
}


//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=44db6a862fba0b067b1930da0d769e98