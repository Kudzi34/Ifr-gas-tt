(function getMovies() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    " https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies",
    true
  );
  xhr.onload = function() {
    if (xhr.status == 200) {
      const movies = JSON.parse(this.responseText);
      // console.log(movies);
      let movieList = "";

      for (i in movies) {
        movieList +=
          "<a href= 'index2.html'>" +
          '<div class= "moviesList">' +
          "<ul>" +
          "<li> Movie " +
          movies[i].id +
          " </li>" +
          "<li> " +
          movies[i].title +
          "</li>" +
          "</ul>" +
          "<button class='btn'>View Movie" +
          "</button>";
        ("</div>");
        ("</a>");
      }

      document.getElementById("moviesDisplay").innerHTML = movieList;
    }
  };

  xhr.send();
})();

(function getMovie() {
  const xhr2 = new XMLHttpRequest();
  xhr2.open(
    "GET",
    " https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=2",
    true
  );
  xhr2.onload = function() {
    if (xhr2.status == 200) {
      const movie = JSON.parse(this.responseText);
      let movieDetails = "";

      movieDetails +=
        '<div class= "movie">' +
        "<p> Movie: " +
        movie.id +
        " </p>" +
        "<p>Title: " +
        movie.title +
        "</li>" +
        "<p> Year " +
        movie.int +
        "</p>" +
        "<img src=" +
        movie.poster +
        ">" +
        "<p>" +
        movie.description +
        "</p>" +
        "<p id='actors'>Actors " +
        movie.actors +
        "" +
        "</p>" +
        "</div>";

      document.getElementById("movie-responseText").innerHTML = movieDetails;
    }
  };

  xhr2.send();
})();
