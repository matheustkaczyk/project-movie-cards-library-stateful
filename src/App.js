import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <div>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
