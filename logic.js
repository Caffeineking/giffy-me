// $("button").on("click", function () {
//   $("#gifs-appear-here").empty();

//   // Grabbing and storing the data-animal property value from the button
//   var animal = $(this).attr("data-animal");

//   // Constructing a queryURL using the animal name
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//   // Performing an AJAX request with the queryURL
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//     // After data comes back from the request
//     .then(function (response) {
//       console.log(queryURL);

//       console.log(response);
//       // $("#artist-div").empty();
//       // storing the data from the AJAX request in the results variable
//       var results = response.data;

//       // Looping through each result item
//       for (var i = 0; i < results.length; i++) {

//         // Creating and storing a div tag
//         var animalDiv = $("<div>");

//         // Creating a paragraph tag with the result item's rating
//         var p = $("<p>").text("Rating: " + results[i].rating);

//         // Creating and storing an image tag
//         var animalImage = $("<img>");

//         animalImage.addClass("image-class");// added to identify the new images
//         // Setting the src attribute of the image to a property pulled off the result item
//         animalImage.attr("src", results[i].images.fixed_height.url);

//         // Appending the paragraph and image tag to the animalDiv
//         animalDiv.append(p);
//         animalDiv.append(animalImage);

//         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//         $("#gifs-appear-here").prepend(animalDiv);

//       }

//     });
  // starting functions for the on click buttons



  // function renderButtons() {

  //   // Deleting the movies prior to adding new movies
  //   // (this is necessary otherwise you will have repeat buttons)
  //   $("#buttons-view").empty();

  //   // Looping through the array of movies


  //   // Then dynamicaly generating buttons for each movie in the array
  //   // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  //   var a = $("<button>");
  //   // Adding a class of movie-btn to our button
  //   a.addClass("animal-btn");
  //   // Adding a data-attribute
  //   a.attr("data-animal", $("#search-animal").val());
  //   // Providing the initial button text
  //   a.text($("#search-animal").val().trim());
  //   // Adding the button to the buttons-view div
  //   $("#buttons-view").append(a);
  // }

//   $("#run-search").on("click", function (event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var animal = $("#search-animal").val().trim();

//     // Adding movie from the textbox to our array

//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();
//   });

//     // provide on click function for the new buttons
    

//     $("#run-search").on("click", function (event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var animal = $("#search-animal").val().trim();

//     // Adding movie from the textbox to our array

//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();
//   });


// });


// $(document).on("click", ".animal-btn",function(){
 
//   var dataVal = $(this).val(".data-animal");
//   console.log("your value is " + dataVal);

// });


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
      animalImage.attr("src", results[i].images.fixed_height.url);
      animalDiv.append(p);
      animalDiv.append(animalImage);
      $("#gifs-appear-here").prepend(animalDiv);
    }
  });
}
// button on click function for the preloaded buttons
// $(".animal-btn").on("click",function(){
//   getGiphy($(this).attr("data-animal"));
// });


// making buttons
function renderButtons() {
  var a = $("<button>");
  a.addClass("animal-btn");
  a.attr("data-animal", $("#search-animal").val());
  a.text($("#search-animal").val().trim());  
  $("#buttons-view").append(a);
}

$(".btn").on("click",function(){
  renderButtons($(this).attr("data-animal"));
});

$(document).on("click", ".animal-btn", function(){
  getGiphy($(this).attr("data-animal"));

});
