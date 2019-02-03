import React, { Component } from 'react';


// import axios from 'axios';

import Group from '../../components/Group/Group';
import Spiner from '../../components/Spiner/Spiner';
import classes from './GroupsShow.css';


class GroupsShow extends Component {


    onSingleGroupShow = (id) => {
        const singleGroup = this.props.groups.find(el => {
            return el.id === id;
        })
        console.log(singleGroup);
        this.props.history.push({
            pathname: '/group/' + singleGroup.urlname,
            state: { group: singleGroup }
        });


    }


    render(props) {
        console.log("[GroupsCortrol.js] Inside Render");


        let groups = <Spiner />
        const groupsArr = this.props.groups;

        if (groupsArr.length > 0) {
            groups = groupsArr.map(el => {
                return (
                    <Group
                        key={el.id}
                        name={el.name}
                        members={el.members}
                        who={el.who}
                        photo={el.hasOwnProperty("key_photo") ? el.key_photo.photo_link : null}
                        click={() => this.onSingleGroupShow(el.id)}
                    />
                );
            })
        }

        return (
            <ul className={classes.Groups}>
                {groups}
            </ul>
        );

    }
}

export default GroupsShow;