# NurexMovies
Movie Blog
This is an HTML file that includes a Bootstrap 5.3.0-alpha2 stylesheet and bundle, and a JavaScript file called "movie.js" in the head section.

The HTML file defines a header section with a search form and a main section with a div element that has an id of "output". The main section also includes a container element for popular movies, with a header and another div element that has an id of "popularMoviesCard".

The API_KEY constant contains a unique identifier assigned by the IMDb API for authentication purposes. This identifier allows the application to make requests to the API and retrieve data.

The urlMostPolular constant contains the URL for fetching the most popular movies from the IMDb API. The URL includes the API_KEY constant and a query parameter limit=36, which limits the number of movies returned to 36.

The SEARCH_URL constant contains the URL for searching for movies on the IMDb API. The URL includes the API_KEY constant and a query parameter query=, which can be replaced with a search term to search for movies matching the term.

The fetch() function is used to make an HTTP request to the urlMostPolular URL and retrieve data from the IMDb API. The response is returned as a Promise object.

The then() function is used to handle the Promise object returned by the fetch() function. It takes a callback function that is executed when the Promise object is resolved (i.e., when data is successfully retrieved from the API). The callback function takes the response object as an argument and returns the response in JSON format using the json() function.

The displayPopularMovies() function is called in the callback function of the then() function. This function takes the response data in JSON format and extracts information about the 36 most popular movies, such as their titles, release years, IMDb ratings, and poster images.

The extracted information is then used to create HTML elements that are appended to the "popular-movies" section of the webpage using the innerHTML property. These HTML elements include div elements that display the movie title, release year, and IMDb rating, as well as an img element that displays the movie poster image.



There is also a function called "searchMovie" that is called when the user clicks the search button in the search form. This function fetches data from the IMDb API using the SEARCH_URL with the user's search query, clears the content of the "popularMoviesCard" div, and displays the search results in the same div with the same format as the popular movies.

The HTML file uses CSS Grid and Flexbox to create a grid layout for displaying movies and styling for the search form and movie cards. The Bootstrap stylesheet and bundle are used for additional styling and responsiveness.


==============================================================

