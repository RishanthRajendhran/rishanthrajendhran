import './App.css';
import React, {Component} from "react";
import Welcome from "./Welcome.js";
import Main from "./Main.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Rishanth Rajendhran",
      authorInTamil: "ரிஷாந்த் ராஜேந்திரன்",
      curLoc: "Salt Lake City, USA",
      hometown: "Chennai, Tamil Nadu, India",
      email: "rishanthrajendhran@outlook.com",
      linkedin: "https://www.linkedin.com/in/rishanth-rajendhran-11b436191/",
      github: "https://github.com/RishanthRajendhran",
      eduHistory: [
        {
          "name": "University of Utah",
          "program": "MSCS",
          "start": "2022",
          "end": "present"
        },
        {
          "name": "IIT Madras",
          "program": "BTech in CSE",
          "start": "2018",
          "end": "2022"
        },
      ],
      experience: [
        // {
        //   title: "Teaching Assistant",
        //   desc: "Database Systems",
        //   org: "University of Utah",
        //   supervisor: "Prof. Daniel Kopta",
        //   start: "Jan 23",
        //   end: "May 23",
        // },
        {
          title: "Researcher",
          desc: "Evaluation of consistency of large-scale finetuned models",
          org: "University of Utah",
          supervisor: "Prof. Ana Marasovic",
          start: "Nov 22",
          end: "Present",
        },
        {
          title: "Teaching Assistant",
          desc: "Natural Language Processing",
          org: "University of Utah",
          supervisor: "Prof. Ellen Riloff",
          start: "Aug 22",
          end: "Dec 22",
        },
        {
          title: "Student Researcher",
          desc: "Unconstrained ML models",
          org: "SENAI, IIT Madras",
          supervisor: "Prof. Ragupathy Rengaswamy",
          start: "Jul 21",
          end: "Feb 22",
        },
        {
          title: "Instructor",
          desc: "App Development Workshop",
          org: "Shaastra, IIT Madras Tech Fest",
          supervisor: "",
          start: "Jan 22",
          end: "Jan 22",
        },
        {
          title: "Web Developer",
          desc: "",
          org: "TechLary",
          supervisor: "",
          start: "Jun 21",
          end: "Jul 21",
        },
        {
          title: "Attendee",
          desc: "ML Summer School",
          org: "Amazon",
          supervisor: "",
          start: "Jul 21",
          end: "Jul 21",
        },
        {
          title: "Attendee",
          desc: "Deep Learning Workshop",
          org: "NVIDIA",
          supervisor: "",
          start: "Jul 21",
          end: "Jul 21",
        },
        {
          title: "Web Developer",
          desc: "",
          org: "EduVisory",
          supervisor: "Dr. Ravi Dadsena",
          start: "Jun 20",
          end: "Jan 21",
        },
        {
          title: "App Developer",
          desc: "Product Design Club",
          org: "Centre For Innovation, IIT Madras",
          supervisor: "",
          start: "Jul 20",
          end: "Dec 20",
        },
        {
          title: "Coordinator",
          desc: "Institute WebOps Team",
          org: "IIT Madras",
          supervisor: "",
          start: "Jul 20",
          end: "Feb 21",
        }
      ],
      githubRepos: [
        {
          title: "FLANT5",
          desc: "Evaluation of consistency of large-scale finetuned models",
          link: "https://github.com/RishanthRajendhran/flant5",
        },
        {
          title: "EigenGame",
          desc: "This is an implementation of the EigenGame proposed in the paper 'EigenGame: PCA as a Nash Equilibrium' by Gemp et. al..",
          link: "https://github.com/RishanthRajendhran/EigenGame",
        },
        {
          title: "CS6350",
          desc: "Lightweight Machine Learning Library developed for CS6350 at UofU",
          link: "https://github.com/RishanthRajendhran/CS6350",
        },
        {
          title: "InfoRetrievalSystem",
          desc: "Lightweight information retrieval system developed for CS6370 at IITM",
          link: "https://github.com/RishanthRajendhran/InformationRetrievalSystem",
        },
        {
          title: "TransliterationUsingRNNs",
          desc: "Transliteration from Tamil to English using RNNs",
          link: "https://github.com/RishanthRajendhran/transliterationUsingRNNs",
        },
        {
          title: "ImageClassifcationUsingCNNs",
          desc: "Image classification using CNNs",
          link: "https://github.com/RishanthRajendhran/imageClassificationUsingCNNs",
        },
        {
          title: "CPP",
          desc: "Solutions to several DSA questions in C++",
          link: "https://github.com/RishanthRajendhran/cpp",
        }
      ],
      credo: "Nothing worth having comes easy ",
      credoInTamil: " நல்லதே நடக்கட்டும்",
      description: "I am a Computer Science graduate from IIT Madras, currently pursuing a master’s at The University of Utah. I am interested primarily in Natural Language Processing applications such as question answering and grammar correction and broadly interested in machine learning and deep learning. Over the years, I have coded in several programming languages such as C++, Python, Javascript and have used with several frameworks and tools such as React Native, Express, Numpy, Tensorflow and WandB, to name a few.",
    }
  }

  componentDidMount() {
    setTimeout(function() {
      var welcomeDiv = document.getElementById("welcomeDiv");
      if(welcomeDiv) {
        welcomeDiv.style.animation = "fadeIntoOblivion 3s linear";
        setTimeout(function() {
          welcomeDiv.style.display = "none";
          var mainPage = document.getElementById("mainPage");
          if(mainPage) {
            mainPage.style.display = "flex";
          }
        }, 3000)
      }
    }, 5000);
  }

  render() {
    return (
      <div className="App">
          <Welcome showMainPage={this.showMainPage} author={this.state.author} authorInTamil={this.state.authorInTamil}/>
          <Main 
            author={this.state.author} 
            authorInTamil={this.state.authorInTamil} 
            eduHistory={this.state.eduHistory}
            experience={this.state.experience}
            curLoc={this.state.curLoc}
            hometown={this.state.hometown}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            credo={this.state.credo}
            credoInTamil={this.state.credoInTamil}
            description={this.state.description}
            githubRepos={this.state.githubRepos}
          />
      </div>
    );
  }
}

export default App;