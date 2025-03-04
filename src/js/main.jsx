import React from 'react'
import ReactDOM from 'react-dom/client'



//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

function SimpleCounter({ digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="counter">
            <div className="clock">
                <i className="fa-regular fa-clock"></i> 
            </div>
            <div className="four">{digitSix % 10}</div>
            <div className="four">{digitFive % 10}</div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}
let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
    );
}, 1000);
