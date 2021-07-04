import React from 'react';
import './spinner.scss';

const Spinner = () => {
    return <div className="spinner">
     <div className="container">
        <div className="clock">
            <div className="clock-inner">
            <div className="clock-minutes"></div>
            <ul className="clock-numbers">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
            </div>
         </div>
     </div>
     <h2>Loading ...</h2>
    </div>
}

export default Spinner;