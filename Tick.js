import React from 'react';

function Ticks() {

     const element = (                 
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    

  );
  
 return element;

}

export default class Tick extends React.Component{
    
    render() {
        return (
            <div><h1>{Ticks()}</h1></div>
            
        );
        


    }

}