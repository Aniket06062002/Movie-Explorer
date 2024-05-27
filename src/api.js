// Method for PopularMovies

export async function PopularMovies(page = 1) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return { results: [], total_pages: 1 }; 
  }
}

// Method for TopRatedMovies

export async function TopRatedMovies(page = 1) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return { results: [], total_pages: 1 };
  }
}

// Method for UpComingMovies

export async function UpComingMovies(page = 1) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { results: [], total_pages: 1 };
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

export async function searchMovies(query, page = 1) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=${page}`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return { results: [], total_pages: 1 }; 
  }
}
