import React, { Component } from "react";
import { Header, List, Segment } from "semantic-ui-react";
import "./App.css";

class PersonalHeader extends Component {

  state = {
    info: {
      name: {
        first: "Loading...",
        last: " "
      },
      description: " ",
    }
  };

  // Load in info to state from props
  static getDerivedStateFromProps(props, state) {
    if (props && props.info && props.info !== state.info) {
      return {info: props.info};
    }
    return null;
  }

  render() {
    const {name, logo, description, location, email, github, linkedin, resume} = this.state.info;

    return (
      <Segment basic inverted textAlign = "center">
        <Header inverted dividing as = "h1" image = {logo} content = {name.first + " " + name.last} subheader = {description} />
        <List horizontal size = "large" style = {{margin: "0"}}>
          {location && <List.Item icon = "marker"
                                  content = {location} />}
          {email    && <List.Item icon = "mail"
                                  content = {<a target = "_blank" rel="noopener noreferrer" title = "Email me"
                                  href = {"mailto:" + email}>Email</a>} />}
          {github   && <List.Item icon = "github"
                                  content = {<a target = "_blank" rel="noopener noreferrer" title = "Check out my repos"
                                  href = {"https://github.com/" + github}>Github</a>} />}
          {linkedin && <List.Item icon = "linkedin"
                                  content = {<a target = "_blank" rel="noopener noreferrer" title = "Connect with me"
                                  href = {"https://linkedin.com/in/" + linkedin}>LinkedIn</a>} />}
          {resume   && <List.Item icon = "file pdf outline"
                                  content = {<a target = "_blank" rel="noopener noreferrer" title = "View my resume"
                                  href = {"https://docs.google.com/viewer?url=" + resume}>Resume (PDF)</a>} />}
        </List>
      </Segment>
    );
  }
}

export default PersonalHeader;
