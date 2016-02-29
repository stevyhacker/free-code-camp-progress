//Sample call to Twitch api
// $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//    console.log(data);
//});

var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "MedryBW"];
var html = '';

function getUserData(username) {

    $.getJSON('https://api.twitch.tv/kraken/streams/' + username + '?callback=?', function (data) {
        console.log(data);
        var status;
        var game = '';
        var link = "http://www.twitch.tv/" + username;
        if (data.stream === null) {
            status = "offline";
        }
        else {
            status = "online";
            game = data.stream.game;
        }
        //$('#users').html(username + ": " + status + " <br> ");
        html += "<div class='user'> " + "<a href='" + link + "'>" + username + " </a> <br> " + status + " <br> " + game + "</div> <br> ";
        $('#users').html(html);

    });

}

function getAllUserData() {

    twitchUsers.forEach(function (user) {

        console.log("user: " + user);
        getUserData(user);

    });
}

$(document).ready(function () {

    getAllUserData();

});