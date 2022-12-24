import React, {Component} from "react";
import SideCard from "./SideCard";
import MainCard from "./MainCard";

class Main extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="mainPage">
          <SideCard 
            author={this.props.author} 
            authorInTamil={this.props.authorInTamil} 
            curLoc={this.props.curLoc}
            hometown={this.props.hometown}
            email={this.props.email}
            linkedin={this.props.linkedin}
            github={this.props.github}
          />
          <MainCard 
            credo={this.props.credo}
            credoInTamil={this.props.credoInTamil}
            description={this.props.description}
            experience={this.props.experience}
            eduHistory={this.props.eduHistory}
            githubRepos={this.props.githubRepos}
          />
        </div>
      )
    }
  }

  export default Main