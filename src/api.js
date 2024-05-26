// Method for PopularMovies

export async function PopularMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
}

// Method for TopRatedMovies

export async function TopRatedMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
}
// Method for UpComingMovies

export async function UpComingMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
}

//Method for Overall movie details

export async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; 
  }
}

// Method for showing Cast Details

export async function fetchCast(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    return null; 
  }
}

// Method for SearchResult

export async function searchMovies(movieName) {
  if (!movieName) return [];
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${movieName}&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }
    const data = await response.json();
    console.log('API response data:', data);
    return data.results;
  } catch (error) {
    console.error('Error fetching the movie data:', error);
    return [];
  }
}

