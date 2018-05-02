import React from 'react';


//function created to populate from object
function formatName(user) {
return user.firstName + ' ' + user.lastName;
}

//Create object with properties
const user = {  firstName: "Laurence", lastName: "Brown"};

//called function
const element = (<h1>Hello, {formatName(user)}</h1>);


//return component back to index
export default class Expressions extends React.Component{
    render() {
        return (
            element
        );
    }

}