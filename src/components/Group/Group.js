import React from 'react';

import classes from './Group.css';

const group = (props) => {
    return(
        <li className={classes.Group} 
            onClick={props.click}>     
                <h2>{props.name}</h2>
                <p>{props.members} {props.who}</p>
                {props.photo ? <img src={props.photo} alt="group img"/> : null}
        </li>
    );
}

export default group