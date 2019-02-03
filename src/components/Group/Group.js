import React from 'react';
// import { Link } from 'react-router-dom';

import classes from './Group.css';


const group = (props) => {
    return(
        <li className={classes.Group} 
            onClick={props.click}>     
            {/* <Link to={props.name.split(" ").join("-").toLowerCase()} onClick={props.click}> */}
                <h2>{props.name}</h2>
                <p>{props.members} {props.who}</p>
                {props.photo ? <img src={props.photo} alt="group img"/> : null}
                {/* <img src="https://secure.meetupstatic.com/photos/event/7/8/1/5/600_474390741.jpeg" alt="group img"/> */}
            {/* </Link>       */}
        </li>
    );
}

export default group