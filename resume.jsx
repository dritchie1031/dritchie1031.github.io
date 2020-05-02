cs = {
    exp: [
        {
            title: "crc",
            header: "UC Davis Center for Regional Change",
            text: <div>
                    <p>June 2019 - June 2020</p>
                    <p>For UC Davis' CRC, my partner and I created the Community Futures Community Lore from scratch. It is a front end website with HTML, CSS, JavaScript, and React. Check out my project page for more!</p>
                </div>
        },
        {
            title: "Kite",
            header: "Kite",
            text: <div>
                    <p>November 2019 - January 2020</p>
                    <p>At Kite, I created high quality answers to top Python questions, on topics ranging from general purpose scripting to machine learning and data science.</p>
                </div>
        },
        {
            title: "TStem",
            header: "ThoughtSTEM",
            text: <div>
                    <p>June 2019 - August 2019</p>
                    <p>At ThoughtSTEM, I worked with my other interns to teach kids to code, using game-oriented
                        languages that were custom-built with Racket. We also worked to develop new languages and curricula, managing a large
                        GitHub repository and issues-based workflow.</p>
                </div>
        },
        {
            title: "biolab",
            header: "Ronald Lab, UC Davis",
            text: <div>
                    <p>October 2018 - December 2018</p>
                    <p>With the Ronald Lab, I wrote scripts to clean and prepare genetic data for analysis. I also
                        managed their WordPress website, which included automating certain tasks with Python.</p>
                </div>
        }
    ],
    ed: [
        {name: "Object-Oriented Programming and Software Design", grade: "A"},
        {name: "Data Structures and Algorithms", grade: "A"},
        {name: "Probability and Statistical Modeling", grade: "A"},
        {name: "Web Programming", grade: "B+"},
        {name: "Algorithm Design and Analysis", grade: "A"},
        {name: "Machine Learning", grade: "B+"},
        {name: "Operating Systems", grade: "A"},
        {name: "Programming Languages", grade: "IP"}
    ],
    langs: [
        {amt: "80", name: "Python"},
        {amt: "80", name: "Java"},
        {amt: "80", name: "C"},
        {amt: "70", name: "C++"},
        {amt: "60", name: "JavaScript"},
        {amt: "60", name: "R"},
        {amt: "50", name: "Lisp"},
        {amt: "50", name: "Go"},
        {amt: "40", name: "Racket"},
        {amt: "100", name: "HTML and CSS"}
    ],
    tech: [
        {text: "Git and GitHub"},
        {text: "Eclispe IDE"},
        {text: "Vim"},
        {text: "*nix Environments"},
        {text: "RStudio"},
        {text: "Django"},
        {text: "Node.js"},
        {text: "Express.js"},
        {text: "IntelliJ"},
        {text: "Android Studio"},
        {text: "DrRacket"},
        {text: "React"}
    ],
    awards: [
        {text: "Letters and Sciences Dean's Honor List, 6 quarters"},
        {text: "University Honors Program, 3 years"}
    ]
}

csResume = [
    <ResumeSection title="Exp" headerText="Experience" body={<ContentStory items={cs.exp}/>}/>,
    <ResumeSection title="Ed" headerText="Education" body={<Education items={cs.ed}/>}/>,
    <ResumeSection title="PLangs" headerText="Programming Languages" body={<ProgressBars items={cs.langs}/>}/>,
    <ResumeSection title="Tech" headerText="Technologies and Frameworks" body={<List items={cs.tech}/>}/>,
    <ResumeSection title="Academics" headerText="Academic Awards and Distinctions" body={<List items={cs.awards}/>}/>
]

eduResume = [
    <ResumeSection title="Exp" headerText="Experience" body={<ContentStory items={cs.exp}/>}/>,
    <ResumeSection title="PLangs" headerText="Education Technology" body={<ProgressBars items={cs.langs}/>}/>
]

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        csResume: true
      }
      this.toCS = this.toCS.bind(this);
      this.toEDU = this.toEDU.bind(this);
    }

    toCS() {
        this.setState({csResume: true});
    }

    toEDU() {
        this.setState({csResume: false});
    }

    render() {
        var accordion;
        if (this.state.csResume) {
            accordion = csResume
        } else {
            accordion = eduResume
        }
        return (
            <div className="album py-5 bg-light">
                <div className="btn-group container" style={{paddingBottom: "3vw"}}role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary" onClick={this.toCS}>Computer Science</button>
                  <button type="button" className="btn btn-secondary" onClick={this.toEDU}>Education</button>
                </div>
                <div className="accordion" id="accordionExample">
                    {accordion}
                </div>
            </div>
        );
    }

}

function ResumeSection(props) {
    return (
        <div key={props.title} className="card">
          <div className="card-header" id={"heading" + props.title}>
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + props.title} aria-expanded="true" aria-controls={"collapse" + props.title}>
                {props.headerText}
              </button>
            </h2>
          </div>

          <div id={"collapse" + props.title} className="collapse" aria-labelledby={"heading" + props.title} data-parent="#accordionExample">
            <div className="card-body">
              {props.body}
            </div>
          </div>
        </div>
    );
}

function ContentStory(props) {
    var listLeft = props.items.map((item) => <a className="list-group-item list-group-item-action" id={"list-"+ item.title +"-list"} data-toggle="list" href={"#list-"+item.title} role="tab" aria-controls="home">{item.header}</a>);
    var listRight = props.items.map((item) => <div className="tab-pane fade" id={"list-"+item.title} role="tabpanel" aria-labelledby={"list-"+ item.title +"-list"}>{item.text}</div>)
    return (
        <div className="row">
          <div className="col-6">
            <div className="list-group" id="list-tab" role="tablist">
                {listLeft}
            </div>
          </div>
          <div className="col-6">
            <div className="tab-content" id="nav-tabContent">
                {listRight}
            </div>
          </div>
        </div>
    );
}

function ProgressBars(props) {
    var barlist = props.items.map((item) =>
        <div className="progress" style={{height: "25px", marginBottom: "10px"}}>
            <div className="progress-bar" role="progressbar" style={{width: item.amt+"%"}} aria-valuenow={item.amt} aria-valuemin="0" aria-valuemax="100">{item.name}</div>
        </div>
    );
    return (
        <div>
            {barlist}
        </div>
    );
}

function Education(props) {
    var classes = props.items.map((item) =>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <span className="badge badge-primary badge-pill">{item.grade}</span>
        </li>
    );
    return (
        <div>
            <h1 class="display-4">University of California, Davis</h1>
            <p>Expected Graduation: Spring 2021</p>
            <p>GPA: 3.94</p>
            <p>Computer Science Coursework:</p>
            <ul className="list-group">
                {classes}
            </ul>
        </div>
    );
}

function List(props) {
    var listitems = props.items.map((item) =>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.text}
        </li>
    );
    return (
        <div>
            <ul className="list-group">
                {listitems}
            </ul>
        </div>
    );
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
