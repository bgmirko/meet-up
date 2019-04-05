import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Event.css';
import Icon from '../../../Icon/Icon';

const Event = (props) => {

    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

    const date = new Date(props.time);
    const dateFormated = `${weekday[date.getDay()]}, ${monthName[date.getMonth()]} ${date.getDate()}, 
        ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`;

    // specava desni klik
    const contextMenu = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.Event}>
            <Link to={props.eventUrl} onClick={props.click} onContextMenu={contextMenu}></Link>
            <div className={classes.EventDetails}>
                <time>{dateFormated}</time>
                <h3>{props.name}</h3>
                <div className={classes.Line}>
                    <span><Icon name="location" /></span><address>{props.location}</address>
                </div>
                <p>{props.polaznika} attendees</p>
            </div>
        </div>
    );
}

export default Event;