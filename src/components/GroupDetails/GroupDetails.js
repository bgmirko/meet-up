import React from 'react';
import DOMPurify from 'dompurify'

import classes from './GroupDetails.css';

import Icon from '../../components/Icon/Icon';
import Events from '../../components/GroupDetails/Events/Events';

const groupDetails = (props) => {

    let group = {};

    if (props.location.state) {
        group = props.location.state.group;
    }

    return (
        <div className={classes.GroupDetails}>
            <div className={classes.GroupHomeHeader}>
                <div className={[classes.Wrap, classes.Flex_row].join(" ")}>
                    <div className={classes.LeftBoxInHeader}>
                        <img src={group.hasOwnProperty("key_photo") ? group.key_photo.photo_link : null} alt="group visual" />
                    </div>
                    <div className={classes.RightBoxInHeader}>
                        <h1>{group.name}</h1>
                        <div className={classes.Line}>
                            <span><Icon name="location" /></span><span>{group.localized_location}</span>
                        </div>
                        <div className={classes.Line}>
                            <span><Icon name="people" /></span><span>{group.members}</span><span> members - {group.visibility.charAt(0).toUpperCase() + group.visibility.slice(1)}&nbsp;group</span>
                        </div>
                        <div className={classes.Line}>
                            <span><Icon name="person" /></span>Organized by&nbsp;<span>{group.organizer.name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.GroupPageContent}>
                <div className={classes.Wrap}>
                    <h2>What we're about</h2>
                    <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(group.description) }}></div>
                    <Events eventUrlName={group.urlname} 
                            clickOnGroupEvent={(event, eventUrlName, id) => props.clickOnGroupEvent(event, eventUrlName, id)}/>
                </div>
            </div>
        </div>
    );
}

export default groupDetails;