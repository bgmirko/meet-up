import React from 'react';
import DOMPurify from 'dompurify';

import classes from './EventDetails.css'

const EventDetails = (props) => {

    console.log("pojedinacan event");
    console.log(props.event);

    const date = new Date(props.event.time)
    const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

    return (
        <div className={classes.EventDetails}>
            <div className={classes.PageHead}>
                <div className={classes.Wrap}>
                    <div className={classes.PageHeadElements}>
                        <div className={classes.DateDisplay__wrapper}>
                            <time>
                                <span className={classes.DateDisplay_day}>{date.getDate()}</span>
                                <span className={classes.DateDisplay_month}>{monthName[date.getMonth()]}</span>
                            </time>
                        </div>
                        <div className={classes.PageHeadEventInfo}>
                            <span>{props.event.status.charAt(0).toUpperCase() + props.event.status.slice(1)}&nbsp;event</span>
                            <h1>{props.event.name}</h1>
                            <div className={classes.HeaderInfo}>
                                <div classes={classes.Line}><span>From&nbsp;{props.event.group.name}</span></div>
                                <span>Public group</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={classes.EventDescription}>
                <div className={classes.Wrap}>
                    <img src={props.event.photo_url ? props.event.photo_url.replace("global", "highres") : null} alt="event"/>
                    <h2>Details</h2>
                    <div className={classes.Content} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.event.description) }}></div>
                </div>
            </section>
        </div>

    )

}

export default EventDetails;