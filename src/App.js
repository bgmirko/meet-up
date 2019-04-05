import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import classes from './App.css';
import Header from './components/Header/Header';
import GroupDetails from './components/GroupDetails/GroupDetails';
import GroupsShow from './containers/GroupsShow/GroupsShow';
import EventDetails from './components/EventDetails/EventDetails';
import Slider from './components/UI/Slider/Slider';
import SearchControl from './containers/SearchControl/SearchControl';


class App extends Component {

  state = {
    groups: [],
    eventLink: "/empty",
    event: []
  }

  handleGroups(groups) {
    this.setState({ groups: groups });
  }

  onGroupEventClicked(event, eventUrlName, id) {
    this.setState({ event: event, eventLink: `/group/${eventUrlName}/events/${id}` })
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Slider />
          <div className={classes.FindBar}>
             <SearchControl
                showGroups = { (groups) => this.handleGroups(groups)} />
          </div>
          <Switch>
            <Route path={this.state.eventLink} exact render={() => <EventDetails
              event={this.state.event}
            />} />
            <Route path="/group/" render={(props) =>
              <GroupDetails {...props}
                clickOnGroupEvent={(event, eventUrlName, id) => this.onGroupEventClicked(event, eventUrlName, id)}
              />
            } />
          </Switch>
          <Route path="/" exact render={(props) => <GroupsShow {...props}
            onGroupsLoad={(groups) => this.handleGroups(groups)}
            groups={this.state.groups}
          />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
