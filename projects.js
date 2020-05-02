'use strict';
/* For animations: https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935 */

function Main() {
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/cfclthumbnail.png",
    cardText: "I have been building the Community Futures, Community Lore website for the last several months.",
    realm: "Work",
    longText: "Another Computer Science student and I have been working on building the front end of a website for several months. We have been using HTML, CSS, JavaScript, and React to follow a given design. We managed the project with Github and created our own plan, milestones, and goals with our employer. Check out the newly released site!",
    link: "https://ucdavis.github.io/cfclsite"
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/coding.jpg",
    cardText: "A review of existing games for Computer Science Education.",
    realm: "Research",
    longText: "I spent a quarter looking at the academic literature related to games that teach students how to code. I compiled a set of criteria by which we can evaluate these games for their effectiveness. Lastly, I proposed a game to meet the established critera. I hope to attempt to implement the game as my senior project. Say tuned!",
    link: "https://drive.google.com/file/d/1m_i89YmRVaQ5X0EY_pi0l8iX-ilhYtOd/view?usp=sharing"
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/scatterArrayFig1.png",
    cardText: "My group's final project for our Machine Learning Class: a snowfall predictor.",
    realm: "School",
    longText: "As our final project, me and 9 other students decided to create a snowfall predictor, using government-published weather datasets for the Tahoe area. We used multiple methods to predict the snowfall, but the most effective was our time series neural network (which was my main role in the group). Take a look at our datasets, code, and methods on GitHub!",
    link: "https://github.com/brandon-lau0/ECS-171-Course-Project"
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/langothumbnail.png",
    cardText: "Lango is the language-learning flash card web app that I made for my web programming class.",
    realm: "School",
    longText: "I created a this app in the Spring of 2019 for my class. It translates a phrase for you and turns it into a flashcard, which you can then quiz yourself on. It then tests you on flashcards in a semirandom manner, where flashcards that you miss are more likely to show up. I used Google OAuth 2, Google Translate API, Node.js, Express.js, React.js, HTML, CSS, JavaScript, and SQLite.",
    link: "https://github.com/dritchie1031/lango"
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/plastic.jpg",
    cardText: "CRiT is a cross-platform app that scans a barcode to tell the user whether to recycle, compost, or trash the item.",
    realm: "Hackathon",
    longText: "My brother and I began this app at HackDavis 2019, following the environmental track. The app scans a products barcode, and would rely on a user-input database to classify an item. We decided to use Dart and Flutter to create the app in order to get experience with a new technology, and making the app cross-platform would make it more accessible.",
    link: "https://github.com/dritchie1031/CRiT"
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    thumbnail: "assets/dnd.jpg",
    cardText: "A random NPC Generator for Dungeons and Dragons Fifth Edition. My first project!",
    realm: "Personal",
    longText: "I started this project when I was a senior in high school, because I started to play D&D as a Game Master and needed a way to quickly come up with characters. It was my first actual project. I used Python for web scraping in order to get the data, and stored it in text files. The program reads the text files and generates a random combination. More customizability and a better GUI is on the way.",
    link: "https://github.com/dritchie1031/NPCGen"
  }));
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
      link: props.link
    };
    this.showMoreInfo = this.showMoreInfo.bind(this);
    this.hideMoreInfo = this.hideMoreInfo.bind(this);
  }

  showMoreInfo() {
    this.setState({
      moreInfo: true
    });
  }

  hideMoreInfo() {
    this.setState({
      moreInfo: false
    });
  }

  render() {
    if (!this.state.moreInfo) {
      return /*#__PURE__*/React.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card mb-4 shadow-sm"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.thumbnail,
        className: "card-img-top",
        width: "100%",
        height: "225"
      }), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, this.state.cardText), /*#__PURE__*/React.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary",
        onClick: this.showMoreInfo
      }, "More Info")), /*#__PURE__*/React.createElement("small", {
        className: "text-muted"
      }, this.state.realm)))));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card mb-4 shadow-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, this.state.longText), /*#__PURE__*/React.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary",
        onClick: this.hideMoreInfo
      }, "Front")), /*#__PURE__*/React.createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-outline-secondary"
      }, /*#__PURE__*/React.createElement("a", {
        href: this.state.link,
        target: "blank"
      }, "Check it out!")))))));
    }
  }

} // render the page


ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('root'));