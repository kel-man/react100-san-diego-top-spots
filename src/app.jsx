import React, { Component } from 'react';
import axios from "axios";
import TopSpot from './topspot';
// class rowCard extends Component {
//   render() {
//     return(
//       <div className='card' style={{backgroundColor: '#f5f5f5', width: '22%', textAlign:'center', minHeight:'7em'}}>
//         <div className='card-body'>
//           <h4 className='card-title'>{this.props.title}</h4>
//           <p className='card-text'>{this.props.amount}</p>
//         </div>
//       </div>
//     )
//   }
//   //Will return individual row with one top-spot
// }

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
    // console.log(this.state);
    return (
      <div className='App'>
        <h1 style={{color:'white', padding:'20px', borderStyle:'solid', borderWidth:'2px', borderColor:'red', width:'500px'}}>San Diego Top Spots</h1>
        <h4 style={{color:'white', padding:'20px', borderStyle:'solid', borderWidth:'2px', borderColor:'red', width:'500px'}}>A list of the top 30 places to see in San Diego, California.</h4>
        <hr style={{borderTop:'3px solid white'}}/>
        <table className='mainTable'>
          {this.state.topspots.map(topspot =>(
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))}
          <thead>
            <th className='name'        >Name: </th>
            <th className='description' >Description: </th>
            <th className='location'    >Location: </th>
          </thead>
          <tbody className='rows'>
            {/* <genRow className=this.state.spot/> */}
          </tbody>
        </table>
        <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
        
      </div>
    );
  }
}

export default App;



// $.getJSON('data.json', function(data){
//   $.each(data, function(key, value){
//       //below, make a variable that represents an entire table row with the intended information included
//       let coordinates = value.location[0]+ "," +value.location[1];
//       let hyperlink = 'https://www.google.com/maps?q=' + coordinates + '>Open in Google Maps!</a>';
//       let eventInfo = '<tr>' + key + '<td>' + value.name + '</td>' + '<td>' + value.description + 
//                       + '</td>' + '<td>' + "<a href = " + hyperlink + '</td></tr>';
//                       //above block should equal row with name, description, location hyperlink
//       $('#mainTable tbody').append(eventInfo);
//       console.log(coordinates);
//       })
//   })
// });