'use strict';

/* For animations: https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935 */

function Main() {
    return (
        <div className="row">
        <ProjectCard
            thumbnail="assets/cfclthumbnail.png"
            cardText="I have been building the Community Futures, Community Lore website for the last several months."
            realm="Work"
            longText="Another Computer Science student and I have been working on building the front end of a website for several months. We have been using HTML, CSS, JavaScript, and React to follow a design. We managed the project with Github and created our own plan, milestones, and goals with our employer. This is a work in progress still, but it should be at Version 1 soon."
            link="https://ucdavis.github.io/cfclsite"
            ></ProjectCard>
        <ProjectCard
            thumbnail="assets/langothumbnail.png"
            cardText="Lango is the language-learning flash card web app that I made for my web programming class."
            realm="School"
            longText="I created a this app in the Spring of 2019 for my class. It translates a phrase for you and turns it into a flashcard, which you can then quiz yourself on. It then tests you on flashcards in a semirandom manner, where flashcards that you miss are more likely to show up. I used Google OAuth 2, Google Translate API, Node.js, Express.js, React.js, HTML, CSS, JavaScript, and SQLite."
            link="https://github.com/dritchie1031/lango"
            ></ProjectCard>
        <ProjectCard
            thumbnail="assets/plastic.jpg"
            cardText="CRiT is a cross-platform app that scans a barcode to tell the user whether to recycle, compost, or trash the item."
            realm="Hackathon"
            longText="My brother and I began this app at HackDavis 2019, following the environmental track. The app scans a products barcode, and would rely on a user-input database to classify an item. We decided to use Dart and Flutter to create the app in order to get experience with a new technology, and making the app cross-platform would make it more accessible."
            link="https://github.com/dritchie1031/CRiT"
            ></ProjectCard>
        <ProjectCard
            thumbnail="assets/dnd.jpg"
            cardText="A random NPC Generator for Dungeons and Dragons Fifth Edition. My first project!\n"
            realm="Personal"
            longText="I started this project when I was a senior in high school, because I started to play D&D as a Game Master and needed a way to quickly come up with characters. It was my first actual project. I used Python for web scraping in order to get the data, and stored it in text files. The program reads the text files and generates a random combination. More customizability and a better GUI is on the way."
            link="https://github.com/dritchie1031/NPCGen"
            ></ProjectCard>
        </div>
    );
}

class ProjectCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        moreInfo: false,
        thumbnail: props.thumbnail,
        cardText: props.cardText,
        realm: props.realm,
        longText: props.longText,
        link: props.link,
      }
      this.showMoreInfo = this.showMoreInfo.bind(this);
      this.hideMoreInfo = this.hideMoreInfo.bind(this);
    }

    showMoreInfo() {
        this.setState({moreInfo: true});
    }

    hideMoreInfo() {
        this.setState({moreInfo: false})
    }

    render() {
        if (!this.state.moreInfo) {
            return (<div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src={this.state.thumbnail} className="card-img-top" width="100%" height="225"/>
                <div className="card-body">
                  <p className="card-text">{this.state.cardText}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.showMoreInfo}>More Info</button>
                    </div>
                    <small className="text-muted">{this.state.realm}</small>
                  </div>
                </div>
              </div>
            </div>);
        } else {
            return (<div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <p className="card-text">{this.state.longText}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.hideMoreInfo}>Front</button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href={this.state.link} target="blank">Check it out!</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>);
        }
    }
}

// render the page
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
