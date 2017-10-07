
var fs = require("fs");
var request = require("request");
var twitter = require ("twitter");
var spotify = require ("spotify");
var keys = require("./keys.js");
var nodeArg = process.argv[2];



if(nodeArg === "my-tweets"){
  runTwitter();
}
else if(nodeArg === "spotify-this-song"){
  runSpotify();
}
else if(nodeArg === "movie-this"){
  runOMDB();
}
else if(nodeArg === "do-what-it-says"){
  runDoIt();
}
else {
  "Liri is not sure where you are asking for. Try again!"
}

function runTwitter(){
 
  
  var client = new twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret, 
  });

  var tweets = data[i];
  var params = {screen_name: 'mandawisniowski'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
      console.log(response);
  
       for (var i = 0; i < 5; i++) {
              console.log(tweets[i]);
          }
    }
    else{
      console.log(error);
    }
  });

}