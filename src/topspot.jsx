import React from 'react'

export default props => (
          <div className='well' style={{display:'flex', flexFlow:'row wrap', justifyContent:'space-around'}}>
              <h4 className='card' style={{padding:'10px', backgroundColor: '#25DDF2', textAlign:'center', width:'80%'}}>{props.name}</h4>
              <p className='card' style={{padding:'10px', backgroundColor:'#25DDF2', textAlign:'center', width:'80%'}}>{props.description}</p>
              <a role='button' className='card btn btn-primary' style={{marginBottom:'50px', width:'80%', color:'black', backgroundColor:'#25DDF2'}} href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Go!</a>
          </div>
        );