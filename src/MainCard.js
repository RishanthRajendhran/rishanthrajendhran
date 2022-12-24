import React, {Component} from "react";

class MainCard extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const eduHistory = this.props.eduHistory.map((item, index) => (
        <div className="eduHistoryItem">
            <div>
                {item.name}
            </div>
            <div>
                {item.program}
            </div>
            <div>
                {item.start}-{item.end}
            </div>
        </div>
      ))

      const expHistory = this.props.experience.map((item, index) => (
        <div className="eduHistoryItem" key={index}>
            <div>
                {item.title}
            </div>
            <div>
                {item.desc}
            </div>
            <div>
                {item.org}
            </div>
            <div>
                {item.supervisor}
            </div>
            <div>
                {item.start}-{item.end}
            </div>
        </div>
      ))

      const githubRepos = this.props.githubRepos.map((item, index) => (
        <div className="mainCardGithubBox" key={index}>
            <div>
                <a href={item.link} target="_blank">
                    {item.title}
                </a>
            </div>
            <div>
                {item.desc}
            </div>
        </div>
      ))

      return (
        <div id="mainCard">
          <div id="mainCardCredo">
            <div>
              {this.props.credo}/
            </div>
            <div>
              /{this.props.credoInTamil}
            </div>
          </div>
          <div id="mainCardDesc">
            {this.props.description}
          </div>
          <div id="mainCardGithub">
            <div className="mainCardGithubBox">
                <h4>
                    Some Github Repositories
                </h4>
            </div>
            {githubRepos}
          </div>
          <div id="history">
            <div className="timeline">
                <h4>
                    Educational History
                </h4>
                {eduHistory}
            </div>
            <div className="timeline">
                <h4>
                    Experiences
                </h4>
                {expHistory}
            </div>
          </div>
        </div>
      )
    }
  }

  export default MainCard;