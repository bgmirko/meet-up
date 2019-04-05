import React, { Component } from 'react';
import axios from 'axios';

import Event from './Event/Event';
import classes from './Events.css';

import Spiner from '../../Spiner/Spiner';


class Events extends Component {

    state = {
        events: []
    }

    componentDidMount(){
        console.log("[Events.js] inside componentDidMount");
        let signed_url="";
        const urlProxy = `https://cors-anywhere.herokuapp.com/`;
     //   const urlProxy2 = "https://crossorigin.me/"
        axios.get(`${urlProxy}https://api.meetup.com/2/events?key=472c6450634cb4168431c3166224721&group_urlname=${this.props.eventUrlName}&sign=true`)
            .then(response => {
                signed_url = response.data.meta.url;
                console.log(signed_url);
                axios.get(`${urlProxy}${signed_url.replace("upcoming", "past")}`)
                    .then(response => {
                    console.log(response.data.results);
                    this.setState({events: response.data.results})
                    }).catch(error => {
                        console.log("error events of group 2");
                    })
            })
            .catch(error => {
                console.log("error events of group");
            })
    }

    render(props){
        console.log("[Events.js] inside render");
        console.log(this.state.events);
       

        let events = <Spiner />;

        if(this.state.events.length !==0){
            events = this.state.events.slice(0).reverse().map(el => {
                return(<Event key = {el.id}
                    eventUrl = {this.props.eventUrlName +`/events/${el.id}`}
                    time={el.time}
                    name={el.name}
                    location={el.hasOwnProperty("venue") ? el.venue.name : "Not defined"}
                    polaznika={el.yes_rsvp_count}
                    click={() => this.props.clickOnGroupEvent(el, this.props.eventUrlName, el.id)}/>
                );
            })
        }
      
        return(
            <div className={classes.Events}>
                <h2>Past events ({this.state.events.length})</h2>
                {events}
            </div>
        )

    }
}

export default Events;