//Sample call to Twitch api
// $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//    console.log(data);
//});


var twichUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];


function getUserData(username) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + username + '?callback=?', function (data) {
        console.log(data);
        return data;
    });
}