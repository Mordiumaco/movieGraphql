// import fetch from "node-fetch";
import axios from "axios";

const API_URL = "https://yst.am/api/v2";
const MOVIE_LIST_URL = `${API_URL}/list_movies.json`;
const MOVIE_DETAIL_URL = `${API_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_URL}/movie_suggestions.json`;

const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_LIST_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

const getMovie = async movie_id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAIL_URL, {
    params: {
      movie_id
    }
  });

  return movie;
};

const getSuggestions = async movie_id => {
    const {
        data : {
            data: {
                movies
            }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id
        }
    });

    return movies
}
export { getMovies, getMovie, getSuggestions };
