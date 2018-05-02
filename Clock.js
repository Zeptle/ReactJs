import React from 'react';
//import ReactDom from 'react-dom';

function FormattedDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

/*function App(){
    return (
        
        <div><h1>App</h1>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}*/



export default class Clock extends React.Component {
constructor(props)
{
    super(props);
    this.state = {date: new Date()};
}



componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
}

componentWillUnMount() {
    clearInterval(this.timerId);
}


tick() {
    this.setState({
        date: new Date()
    });
}


    render() {
        return (
        <div>
            <h1>Hello, World!</h1>
            <FormattedDate date={this.state.date} />
        </div>
        );
    }



}
/*ReactDom.render(
  <App />, document.getElementById('app')
); */