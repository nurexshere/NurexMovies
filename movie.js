const API_KEY = "k_5xankg20";
const urlMostPolular = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`;
const SEARCH_URL = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}`;
fetch(urlMostPolular)
  .then((response) => response.json())
  .then((mostPolularData) => {
    console.log(mostPolularData);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded shadow-lg"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${mostPolularData.items[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${mostPolularData.items[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${mostPolularData.items[i].title}
        </p>
        <p class="text-muted">
          ${mostPolularData.items[i].year} 
          <span class="badge bg-secondary float-end">${mostPolularData.items[i].imDbRating}</span>
        </p>
      </div>`;

      document.getElementById(`popularMoviesCard`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));

  function searchMovie() {
    const API_KEY = "k_5xankg20";
    var title = document.getElementById("searchId");
    const urlSearchMovies = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${title.value}`;
    fetch(urlSearchMovies)
      .then((response) => response.json())
      .then((searchMovies) => {
        let m='';
        document.getElementById(`popularMoviesCard`).innerHTML = m;
        
        document.getElementById('popularMoviesCardDiv').innerHTML=m;
      
        for (let i = 0; i < searchMovies.results.length; i++) {
          console.log(searchMovies.results[i])
          let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
          <button class="cards border-0 rounded shadow-lg"
          style="
          width: 170px;
          height: 260px;
          background-image: url(${searchMovies.results[i].image});
          background-size: cover;
          background-position: center;"
          
         value="${searchMovies.results[i].id}" onclick="getID(this.value)">
          </button>
          <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
            ${searchMovies.results[i].title}
          </p>
          <p class="text-muted">
           
            <span class="badge bg-secondary float-end"></span>
          </p>
        </div>`;
        document.getElementById('searchBodyNew').innerHTML+=card;
        }
      })
    .catch(err=>console.error(err))
  }
  
  