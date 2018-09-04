// new giffy function 88888888888888888888888// everytime this is called. we can make a giffy out of it
function getGiphy(animal) {
  $("#gifs-appear-here").empty();// clean up the gif list
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var animalDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);
      var animalImage = $("<img>");
      animalImage.addClass("image-class");
      animalImage.attr("src", results[i].images.fixed_height_still.url);
      animalImage.attr("data-still", results[i].images.fixed_height_still.url);
      animalImage.attr("data-animate", results[i].images.fixed_height.url);
      animalImage.attr("data-state", "still");
      animalDiv.append(p);
      animalDiv.append(animalImage);
      $("#gifs-appear-here").prepend(animalDiv);
    }
  });
}
// making buttons
function renderButtons() {
  var a = $("<button>");
  a.addClass("animal-btn");
  a.attr("data-animal", $("#search-animal").val());
  a.text($("#search-animal").val().trim());
  $("#buttons-view").append(a);
}

$(".btn").on("click", function () {
  renderButtons($(this).attr("data-animal"));
});
$(document).on("click", ".animal-btn", function () {
  getGiphy($(this).attr("data-animal"));
});
////
$(document).on("click", ".image-class", function () {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
