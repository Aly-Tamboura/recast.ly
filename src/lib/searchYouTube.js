var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
  	url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ options.query + "&maxResults=" + options.max + "&order=viewCount&key=" + options.key,
  	type: "GET",
  	contentType: "application/json",
  	success: function(data){
  	  callback(data.items)
  	},
  	error: function(data){

  	},
  })
};

window.searchYouTube = searchYouTube;
