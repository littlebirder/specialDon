import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style/style.css';
import styl from './css/index.css';

class App extends Component {
    render() {
  	console.log(styl)
        return <div className='red'> Hello, world! </div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
