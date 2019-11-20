/* global moment */

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    chirp: $("#author").val().trim(),
    user_name: $("#chirp-box").val().trim(),
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.chirp + " chirped: </p>");
      row.append("<p>" + newChirp.user_name + "</p>");
      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].chirp + " chirped.. </p>");
      row.append("<p>" + data[i].user_name + "</p>");
      $("#chirp-area").prepend(row);

    }

  }

});
