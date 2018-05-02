import React from 'react';
import TemperatureInput from './TemperatureInput.js';

function BoilingVerdict (props){
    if (props.celsius >= 100) {
        return <p>The water would boil</p>;
    } 
    return <p>The water would NOT boil</p>;
}

function toCelsius(f) {
    return ((f-32) * 5/9);
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
export default class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleChange(e) {
        this.setState({scale: 'c', temperature});
    }
    handleFarenheitChange(e){
        this.setState({scale: 'f', temperature});
    } 

     render() {
         const temperature = this.props.temperature;
         const scale = this.props.scale;
         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
         const fahrenheit  = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
          return (
            <div>
            <TemperatureInput scale="c"  temperature={temperature}/>
            <TemperatureInput scale="f" temperature={temperature} />
          </div>
    
    
    );
  }
}

