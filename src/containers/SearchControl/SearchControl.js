import React, { Component } from 'react';

import axios from 'axios';

import Icon from '../../components/Icon/Icon';
import classes from './SearchControl.css';

class SearchGroup extends Component {

    state = {
        search: true
    }

    componentDidMount(){
        console.log('[SearchControl] inside componentDidMount');
        const url = `https://api.meetup.com/find/groups?photo-host=public&sig_id=215516831&sig=72c4dc82697c409d7b1ebff806b0ed03be229f4e`;
        this.searchGroup(url);
    }

    onSearchHandler = (event) => {
        event.preventDefault();
        if (this.state.search) {
            const findGroupWithName = event.target[0].value;
            const url = `https://api.meetup.com/find/groups?key=472c6450634cb4168431c3166224721&sign=true&photo-host=public&text=${findGroupWithName}`;
            this.searchGroup(url);
            this.setState({ search: false });
        } else {
            this.inputNode.value = "";
            const url = `https://api.meetup.com/find/groups?photo-host=public&sig_id=215516831&sig=72c4dc82697c409d7b1ebff806b0ed03be229f4e`;
            this.searchGroup(url);
            this.setState({ search: true });
        }

    }

    searchGroup = (url) => {
        const urlProxy = `https://cors-anywhere.herokuapp.com/`;
        axios.get(`${urlProxy}${url}`)
            .then(response => {
                console.log(response.data);
                this.props.showGroups(response.data);
            })
            .catch(error => {
                console.log("error groups");
            })
    }

    render() {
        console.log("[SearcControl] inside render")
        return (
            <div className={classes.SearchControl}>
                <form onSubmit={this.onSearchHandler} >
                    <input type="text"
                        placeholder="Tech"
                        name="search-group"
                        autoComplete="off"
                        ref={node => { this.inputNode = node }} />
                    <button type="submit"><Icon name={this.state.search ? "icon-search" : "icon-cancel-circle"} /></button>
                </form>
            </div>
        )
    }
}

export default SearchGroup;