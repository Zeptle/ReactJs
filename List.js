import React from 'react';

//A good rule of thumb is that elements inside the map() call need keys.

function ListItem(props) {
    return <li>{props.value}</li>
}


function NumberList(props) {
    const numbers = props.numbers;
    
    return (
        <ul>{ numbers.map((number) => <ListItem key={number.toString()} value={number} />)} </ul>
    )
}

const numbers = [1,2,3,4,5];

export default class List extends React.Component{
    render() {
        return (
            <div> <NumberList numbers={numbers} /></div>
        );
    }
}


