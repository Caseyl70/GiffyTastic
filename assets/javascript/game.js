//Need to add an on.click function for the button menu
$("#buttons").on("click", "buttons", function() {
    //Grab my Variable and Query URL and plug it in
    var keyword = $(this).attr("#data-world");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=1UDXeUjPXD7dVqzhJqMItp1MDQrx5uth&limit=10";
    console.log(keyword);
    
    //.AJAX method to grab the URL and method: GET 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
// console.log(response)
        var results = response.data;
        for (var i = 0; i < ratings.length; i++) {
            var worldDiv = $("<div>");

            var ratings = results[i].ratings;
            var p = $("<p>").text("Rating: " + ratings);
            //FOR each state of image, still or animate( Need a .attr and the string argument)
            
            var worldImage = $("<img>").addClass("gif").attr("data-state", "still").attr("data-animate", results[i].images.fixed_height_url)
            worldImage.attr("src", results[i].images.fixed_height_still.url);
            //Will need to use my new div to set equal to what will pull images(still, animated)

            //And then prepend the new div to the page
            worldDiv.prepend(p);
            worldDiv.prepend(worldImage);
            console.log(ratings)

            $("#gifs-appear-hear").prepend(worldImage);
        }
    }
}


//Create a results variable, and add a for loop so it runs each time when you click a button
