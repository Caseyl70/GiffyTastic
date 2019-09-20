//Need to add an on.click function for the button menu
$("#buttons").on("click", ".buttons", function() {
    //Grab my Variable and Query URL and plug it in
    var keyword = $(this).attr("data-world");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=1UDXeUjPXD7dVqzhJqMItp1MDQrx5uth&limit=10";
    console.log("keyword")

    //.AJAX method to grab the URL and method: GET 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log("Clicked Button")
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var worldDiv = $("<div>");

            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            //FOR each state of image, still or animate( Need a .attr and the string argument)

            var worldImage = $("<img>")
            worldImage.attr("src", results[i].images.fixed_height_still.url);
            worldImage.attr("data-animate", results[i].images.fixed_height.url);
            worldImage.attr("data-state", "still");
            worldImage.attr("data-still", results[i].images.fixed_height_still.url);
            worldImage.addClass("gif");
            
            
            

            // worldImage.att("gif")
            //Will need to use my new div to set equal to what will pull images(still, animated)

            //And then prepend the new div to the page
            worldDiv.prepend(p);
            worldDiv.prepend(worldImage);
            console.log("It works")

            $("#gifs-appear-here").prepend(worldImage);

        }
    });
});
//on.click function for animating gifs
//This is where everytime you click the picture, the picture goes from animate, to still, and back.
            $("#gifs-appear-here").on("click", "gif", function(){
            var state = $(this).attr("data-state");
            var stillImages = $(this).attr("data-still");
            var animateImages = $(this).attr("data-animate");
            
            if (state === "still") {
                $(this).attr("src", stillImages);
                $(this).attr("data-state", "animate");
                //     "src": animateImages,
                //     "data-state": "animate"
                // })

            } else {
                // $(this).attr({
                    $(this).attr("src", animateImages);
                    $(this).attr("data-state", "still");
                    // "src": stillImages,
                    // "data-state": "still"
                // })
            }
        });
        

        $("#submit").on("click", function() {
            var input = $("#input").val();
            // console.log(input)
            // var newField = $("<button>").attr("data-world", input).addClass
            var newField = $("<button>").attr("data-world", input).addClass("buttons").text(input);
            console.log(input)



            $("#buttons").append(newField);
        })

