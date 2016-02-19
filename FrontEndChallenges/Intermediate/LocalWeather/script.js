var openWeatherApiKey = "0046bebb8d990ce411fa52d91c85572c";
//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=44db6a862fba0b067b1930da0d769e98
var temp;
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
    //alert("Latitude: " + position.coords.latitude + "  Longitude: " + position.coords.longitude);
    getWeatherData(position.coords.latitude, position.coords.longitude);
}

function getWeatherData(latitude, longitude) {
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    url += "lat=" + latitude + "&lon=" + longitude;
    url += "&units=imperial";
    url += "&appid=" + openWeatherApiKey;
    $.getJSON(url, function (json) {
        //alert(JSON.stringify(json));
        $('#icon').attr('src', 'http://openweathermap.org/img/w/' + json.weather[0].icon + ".png");
        $('#city').html(json.name);
        $('#temperature').html(json.main.temp + " °F");
        temp = json.main.temp;
    });
}

function unitConvert() {
    if (document.getElementById("unit-convert").textContent == "Imperial units") {
        $('#temperature').html(toCelsius(temp) + " °C");
        $('#unit-convert').html("Metric units");
    }
    else {
        $('#temperature').html(temp + " °F");
        $('#unit-convert').html("Imperial units");
    }
}

function toCelsius(f) {
    return Math.round(((5 / 9) * (f - 32)) * 100) / 100;
}