
var fs = require("fs");
var request = require("request");
var twitter = require ("twitter");
var spotify = require ("node-spotify-api");
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
 
  
  var client = new twitter(keys.twitterKeys);
    


  // var tweets = data[i];
  var params = {screen_name: 'lornasocool', count: 20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
     
      // console.log(response);
  
       for (var i = 0; i < tweets.length; i++) {
        var date= tweets[i].created_at;

          console.log("@lornasocool" + tweets[i].text + "Created at: " +  date)

          }
    }
    else{
      console.log(error);
    }
  });

}



function runSpotify (){
var secondArg = process.argv[3];
 
var spotifyAPI = new spotify(keys.spotifyKeys);
 

 spotifyAPI.search({ type: 'track', query: secondArg || "The Sign Ace of Base"}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

 else {
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Preview Here: " + data.tracks.items[0].preview_url)
 }

});


}


function runOMDB (){
  var secondArg = process.argv[3];
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + secondArg + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("RT Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

  }
});
}