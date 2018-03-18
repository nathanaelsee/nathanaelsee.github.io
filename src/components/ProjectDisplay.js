import React, { Component } from "react";
import { Header, List, Segment, Container, Transition, Label, Button, Icon } from "semantic-ui-react";
import "./App.css";

class ProjectDisplay extends Component {

  constructor(props) {
    super(props);

    // Generate list of all tags on projects
    var allTags = [];
    this.props.projects.map(project => allTags = [...allTags, ...project.tags]);

    // Generate boolean map of tags for toggling
    var currTags = {};
    allTags.map(tag => currTags = Object.assign({}, currTags, {[tag]: false}));

    this.state = { currTags };
  }

  toggleTag = (event, {value}) => {
    var {currTags} = this.state;
    currTags[value] = !currTags[value];
    this.setState({currTags});
  }

  checkVisible = (tags) => {

    // Check if no tags are currently toggled
    if(Object.values(this.state.currTags).every(val => (val === false))) {
      return true;
    }

    // Otherwise display only if there is some matching toggle tag
    for(var i = 0, len = tags.length; i < len; i++) {
      if(this.state.currTags[tags[i]]) {
        return true;
      }
    }
    return false;
  }

  render() {
    const {projects} = this.props;
    const {currTags} = this.state;

    return (
      <Container text textAlign = "left" style = {{margin: "2em"}}>
        <Header as = "h2" content = "Projects"/>
        <Segment attached = "top" inverted>
          <Header content = "Filter by tag:" size = "small"/>
          {Object.keys(currTags).sort().map(tag =>
            (<Button compact size = "small" color = {this.props.color}
              basic = {!currTags[tag]}
              key = {tag}
              value = {tag}
              content = {tag}
              onClick = {this.toggleTag}
              />
            )
          )}
        </Segment>
        <Segment attached = "bottom">
          {projects.map(project =>
              (<ProjectItem color = {this.props.color} key = {project.title} project = {project} visible = {this.checkVisible(project.tags)}/>
          ))}
        </Segment>
      </Container>
    );
  }

}

class ProjectItem extends Component {

  render() {
    const {visible} = this.props;
    const {title, subtitle, github, description, tags} = this.props.project;
    return (
      <Transition visible = {visible} animation = "fade left">
        <Segment basic>
          <Segment attached = "top" clearing>
            <Header size = "large" content = {title} subheader = {subtitle} floated = "left"  style = {{margin:0, padding: 0}}/>
            <Segment basic floated = "right" style = {{margin:0, padding: 0}}>
              {github && <a title = {github} href = {"https://github.com/" + github} target = "_blank">
                <div><Icon size = "big" link name = "github"/>{github}</div>
              </a>}
            </Segment>
          </Segment>
          <Segment attached>
            {tags.map(tag => (<Label key = {tag} content = {tag} color = {this.props.color} size = "large"/>))}
          </Segment>
          <Segment attached = "bottom" size = "large">
            {description && <List relaxed items = {description} />}
          </Segment>
        </Segment>
      </Transition>
    );
  }

}

export default ProjectDisplay;
