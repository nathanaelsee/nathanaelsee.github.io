import React, { Component } from "react";
import { Header, Image, List, Segment, Divider } from "semantic-ui-react";
import "./App.css";

class PersonalHeader extends Component {

  render() {
    const {name, logo, description, location, email, github, linkedin, resume} = this.props.info;

    return (
      <Segment basic inverted textAlign = "center">
        {logo && <Image circular centered size = "tiny" src = {logo} />}
        <Header inverted as = "h1">
          {name        && <Header.Content   content = {name.first + " " + name.last} />}
          {description && <Header.Subheader content = {description} />}
        </Header>
        <Divider inverted />
        <List horizontal size = "large" style = {{margin: "0"}}>
          {location && <List.Item icon = "marker"
                                  content = {location} />}
          {email    && <List.Item icon = "mail"
                                  content = {<a href={"mailto:" + email} target="_blank">Email</a>} />}
          {github   && <List.Item icon = "github"
                                  content = {<a href={"https://github.com/" + github} target="_blank">Github</a>} />}
          {linkedin && <List.Item icon = "linkedin"
                                  content = {<a href={"https://linkedin.com/in/" + linkedin} target="_blank">LinkedIn</a>} />}
          {resume   && <List.Item icon = "file pdf outline"
                                  content = {<a href={"https://docs.google.com/viewer?url=" + resume} target="_blank">Resume (PDF)</a>} />}
        </List>
      </Segment>
    );
  }
}

export default PersonalHeader;
