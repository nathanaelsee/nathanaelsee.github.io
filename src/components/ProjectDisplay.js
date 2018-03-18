import React, { Component } from "react";
import { Header, List, Segment, Container, Transition, Label, Button } from "semantic-ui-react";
import "./App.css";

class ProjectDisplay extends Component {

  constructor(props) {
    super(props);

    // Generate list of all tags on projects
    var allTags = [];
    this.props.projects.map(project => allTags = [...allTags, ...project.tags]);

    // Generate boolean map of tags for toggling
    var currTags = {};
    allTags.map(tag => currTags = Object.assign({}, currTags, {[tag]: true}));

    this.state = { allTags, currTags };
  }

  toggleTag = (event, {value}) => {
    var {currTags} = this.state;
    currTags[value] = !currTags[value];
    this.setState({currTags});
  }

  checkVisible = (tags) => {
    for(var i = 0, len = tags.length; i < len; i++) {
      if(this.state.currTags[tags[i]]) {
        console.log(tags);
        return true;
      }
    }
    return false;
  }

  render() {
    const {projects} = this.props;
    const {allTags, currTags} = this.state;

    return (
      <Container text textAlign = "left">
        <Header as = "h2" content = "Projects"/>
        <Segment attached = "top" inverted>
          {allTags.map(tag => (<Button compact basic = {!currTags[tag]} key = {tag} value = {tag} content = {tag} color = "orange" onClick = {this.toggleTag}/>))}
        </Segment>
        <Segment attached = "bottom">
          {projects.map(project =>
              (<ProjectItem key = {project.title} project = {project} visible = {this.checkVisible(project.tags)}/>
          ))}
        </Segment>
      </Container>
    );
  }

}

class ProjectItem extends Component {

  render() {
    const {visible} = this.props;
    const {title, description, tags} = this.props.project;
    return (
      <Transition visible = {visible} animation = "fade left">
        <Segment basic>
          <Header attached = "top" size = "huge" content = {title}/>
          <Segment attached size = "large" >
            {description && <List bulleted items = {description} />}
          </Segment>
          <Segment attached = "bottom" >
            {tags.map(tag => (<Label key = {tag} content = {tag} color = "orange" size = "large"/>))}
          </Segment>
        </Segment>
      </Transition>
    );
  }

}

export default ProjectDisplay;
