import React from 'react';


//function created to populate from object
function getGreeting(user) {

    if (user) { return <h1>Hello, {user.firstName}  {user.lastName}</h1>;  } else {return <h1>Hello, Stranger!</h1>} 
}

//Create object with properties
const user = {  firstName: "Laurence", lastName: "Brown"};

//called function
const element = (getGreeting(user));

const element2 = (getGreeting());


//return component back to index
export default class Expressions2 extends React.Component{
    render() {
        return (
            <div>{element} <br /> {element2}</div>
        );
    }

}