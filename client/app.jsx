
class App extends React.Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.state = {
      movieList: [],
      filteredMovieList: [],
      watchedMovies=[],
      searchResultsNull: false,
      movieCount=0,
    }
  }

  componentDidMount() {
    this.setState({
      filteredMovieList: this.state.movieList,
    })
  }

  addMovie() {
    var inputMovie = document.getElementById('addInput')
    console.log(inputMovie);
    console.log(inputMovie.value);
    var movieListCopy = this.state.movieList.slice();
    var filteredListCopy = this.state.filteredMovieList.slice();
    movieListCopy.push({title: inputMovie.value});
    filteredListCopy.push({title: inputMovie.value});
    this.setState({
      movieList: movieListCopy,
      filteredMovieList: filteredListCopy,
      movieCount: movieCount + 1,
    })
  }

  searchMovie() {
    var movies = document.getElementsByClassName('movieTitle');
    var searchInput = document.getElementById('searchInput');
    console.log(searchInput)
    var count = 0;
    var filtered = this.state.filteredMovieList.slice();
    var newFilter = [];
    for (var i = 0; i < movies.length; i++) {
      var movieName = movies[i].innerHTML.toLowerCase();
      var search = searchInput.value.toLowerCase();
      if (movieName.includes(search)) {
        count++;
        newFilter.push({title: movies[i].innerHTML});
      }
      this.setState({
        filteredMovieList: newFilter,
      })
    }
  }

  allMovies() {
    this.setState({
      filteredMovieList: this.state.movieList,
    })
  }

  watchMovies() {
    alert('hi');
  }

  render() {
    return (
      <div>
        <Search searchMovie={this.searchMovie}/>
        <InputMovie addMovie={this.addMovie}/>
        <div>{this.state.searchResultsNull ? "No search results found" : ""}</div>
      <table className="movies">
      <tbody>
        {this.state.filteredMovieList.map((movie) => (
          <tr>
            <td className="movieTitle">{movie.title}</td>
            <td className="movieButton">
            <button id={this.state.movieCount} className="watched" onClick={this.watchMovies.bind(this)}>Watched?</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={this.allMovies.bind(this)}>See All Movies!</button>
      </div>
    )
  }

}

class Search extends React.Component {
  render() {
    return (
      <div>
        <input id="searchInput" type="text" defaultValue="Search..."></input>
        <input type="submit" value="Go!" onClick={this.props.searchMovie}></input>
      </div>
    )
  }
}



class InputMovie extends React.Component {
  render() {
    return (
      <div>
        <input id="addInput" type="text" defaultValue="Add movie title here"></input>
        <input type="submit" value="Add!" onClick={this.props.addMovie}></input>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("movieList"));


