import React from 'react';

import classes from './Slider.css';
import mainPhoto from '../../../assets/img/main-photo.jpg'

const slider = () => {

    const style = {
        backgroundImage: `url(${mainPhoto})`,
        color: 'white',
        height: 330,
        paddingTop: 50
    };


    return (
        <div style={style}>
            <div className={classes.SliderText}>
                <h1>Meetups are</h1>
                <h2>neighbors getting together to learn something, do something, share something…</h2>
            </div>
        </div>
    );

}

export default slider;