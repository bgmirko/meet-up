import React from 'react';

import classes from './Header.css';
import logo from '../../assets/img/vega-logo.png';

const header = () => {
    return(
        <div className={classes.Header}>
            <img src={logo} alt="vega logo" />
        </div>
    );
}

export default header;