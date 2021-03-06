import React, { Component } from 'react';
import axios from "axios";
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }
  
  componentWillMount(){
    axios 
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    return (
      <div className='App'>
        <h1 style={{color:'white', padding:'20px', borderStyle:'solid', borderWidth:'2px', borderColor:'white', width:'500px'}}>San Diego Top Spots</h1>
        <h4 style={{color:'white', padding:'20px', borderStyle:'solid', borderWidth:'2px', borderColor:'white', width:'500px'}}>A list of the top 30 places to see in San Diego, California.</h4>
        <hr style={{borderTop:'3px solid white'}}/>
          {this.state.topspots.map(topspot =>(
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))}
      </div>
    );
  }
}

export default App;



