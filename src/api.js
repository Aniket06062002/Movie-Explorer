// src/api.js
export async function PopularMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
        const data = await response.json();
        return data.results; // Assuming the API response contains an array of movie objects
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

export async function TopRatedMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
        const data = await response.json();
        return data.results; // Assuming the API response contains an array of movie objects
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

export async function UpComingMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
        const data = await response.json();
        return data.results; // Assuming the API response contains an array of movie objects
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

export async function fetchMovieDetails(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      return data; // Assuming the API response contains movie details
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null; // Return null in case of an error
    }
  }

  export async function fetchCast(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      return data.cast; // Assuming the API response contains cast details in `data.cast`
    } catch (error) {
      console.error('Error fetching movie cast:', error);
      return null; // Return null in case of an error
    }
  }
  
