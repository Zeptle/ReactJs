import React from 'react';


const element = React.createElement(
    'h1',{className: 'greeting'}, 'Hello World!'
);

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    children: 'Hello, world'
  }
};

//return component back to index
export default class Expressions extends React.Component{
    render() {
        return (
            element
        );
    }

}