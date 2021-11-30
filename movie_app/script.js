const api_key = '18f31292f1ec9f6b5e183ff6c99a2908'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query="`
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
      </div>
    `
    main.appendChild(movieEl)
  })

  function getClassByRate(vote) {
    if(vote >= 8) {
      return 'green'
    } else if(vote >=5) {
      return 'orange'
    }else {
      return 'red'
    }
  }
}
getMovies(API_URL)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value
  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})