//resolver은 기본적으로 View Controller 같은 거라 보면 된다.
//schema.graphql은 URLs 같은거라고 보면 된다. 어디 갈지 알려주고 타입형태도 정해줄 수 있음

// import { getMovies, getById, deleteMovie, addMovie } from "./db";

// const resolvers = {
//   Query: {
//     // people: () => people,
//     // person: (_, { id }) => getById(id)
//     movies: () => getMovies(),
//     movie: (_, {id}) => getById(id),
//     // deleteMovie: (_, {id}) => deleteMovie(id)
//   },
//   Mutation: {
//       addMovie: (_, {name, score}) => addMovie(name, score),
//       deleteMovie: (_, {id}) => deleteMovie(id)
//   }

// };

// export default resolvers;

import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    //movies 보면 앞에 인자에 '_' 그냥 variable 이름인데 저리 
    // 쓰는 이유는 그냥 안쓸꺼니까 _ 하는거
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, {id}) => getMovie(id),
    suggestions: (_, {id}) => getSuggestions(id)
  }
};

export default resolvers;
