//generate array
$("#array-search").on("click", function () {
    generateTopics($(this).attr("data-animal")); 
});
//add animal button
$(".search").on("click", function () {
  if ($(".form-control").val() !== ""){    // fixed random button generating when its empty parameters
    renderButtons($(this).attr("data-animal"));
  }
});
//
$(document).on("click", ".animal-btn", function () {
  getGiphy($(this).attr("data-animal"));
});
////condition for on click event
$(document).on("click", ".image-class", function () {
  var state = $(this).attr("data-state"); 
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
//
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
  a.addClass("animal-btn animal-btn btn btn-dark");// css styling added
  a.attr("data-animal", $("#search-animal").val());
  a.attr("type", "button");
  a.text($("#search-animal").val().trim());
  $("#buttons-view").append(a);
}
// 
var topics = ["cat", "dog", "bird", "iguana", "elephant", "lion", "panda","koala", "bear",];
function generateTopics(){
  $("#gifs-appear-here").empty();
  var animal = topics[Math.floor((Math.random() * 10))];
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