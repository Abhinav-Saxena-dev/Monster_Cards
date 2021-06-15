import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/Search-Box/searchBox.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : "",
    };
    
  }
//  async FetchComp() {
//     const prof = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await prof.json();
//     return data;
//   } A different way of using fetch.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters : data}))
  }
  HandleChange = (e) => this.setState( {searchField : e.target.value})

  render(){
    const {monsters, searchField} = this.state; //destructured monsters and searchFields from the state object.
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1 className="head">Monster Mania</h1>
        <SearchBox 
        placeholder="Search Monsters"
        HandleChange = {this.HandleChange}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
