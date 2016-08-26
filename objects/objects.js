// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;

// 2. Bracket notation:
twitter["ceo"] = "Jack Dorsey";

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter["address"] = twittersAddress;	// added using bracket notation

//console.log(twitter);

// 4. Array:
var addTweet = function(twitter, newTweet) {
	if (!twitter.hasOwnProperty("tweets")) {
		twitter["tweets"] = [];
	}
	twitter["tweets"].push(newTweet);
}

addTweet(twitter, "this is my first tweet!");
addTweet(twitter, "I can get used to this tweeting thing");
addTweet(twitter, "and again...");

//testing
//console.log(twitter);

// 5. Loop through array:
var logger = function(stringToLog) {
	console.log(stringToLog);
};

var loop = function(collection, callback) {
	for (var i = 0; i < collection.length; i++) {
		callback(collection[i]);
	}
};

loop(twitter["tweets"], logger);

// 5. Invoke countCharacters:
twitter.countCharacters(twitter["tweets"][1]);	// should return 37 characters for "I can get used to this tweeting thing"

// 6. Loop through twitter object:
var objectLoop = function(object) {
	for(var key in object) {
		console.log(key);
	}
};
objectLoop(twitter);
