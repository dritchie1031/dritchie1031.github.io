'use strict';

/* For animations: https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Main() {
    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(ProjectCard, {
            thumbnail: "assets/cfclthumbnail.png",
            cardText: "I have been building the Community Futures, Community Lore website for the last several months.",
            realm: "Work",
            longText: "Another Computer Science student and I have been working on building the front end of a website for several months. We have been using HTML, CSS, JavaScript, and React to follow a design. We managed the project with Github and created our own plan, milestones, and goals with our employer. This is a work in progress still, but it should be at Version 1 soon.",
            link: "https://ucdavis.github.io/cfclsite"
        }),
        React.createElement(ProjectCard, {
            thumbnail: "assets/langothumbnail.png",
            cardText: "Lango is the language-learning flash card web app that I made for my web programming class.",
            realm: "School",
            longText: "I created a this app in the Spring of 2019 for my class. It translates a phrase for you and turns it into a flashcard, which you can then quiz yourself on. It then tests you on flashcards in a semirandom manner, where flashcards that you miss are more likely to show up. I used Google OAuth 2, Google Translate API, Node.js, Express.js, React.js, HTML, CSS, JavaScript, and SQLite.",
            link: "https://github.com/dritchie1031/lango"
        }),
        React.createElement(ProjectCard, {
            thumbnail: "assets/golden_dragon.png",
            cardText: "INH (Insert Name Here) is a 2D turn-based RPG that lets you create your own characters.",
            realm: "Personal",
            longText: "Me and a few other CS students started this in 2019. We love games like Fire Emblem, but wanted more customizability in the characters (hence the name 'Insert Name Here'). It's been slow going with school and everything, but we hope to make more progress soon. We decided to program the game in Java, using the LibGDX library. We have configured the game to eventually work as an Android app, but current development is focusing on desktop.",
            link: "https://github.com/dritchie1031/InsertNameHere"
        }),
        React.createElement(ProjectCard, {
            thumbnail: "assets/plastic.jpg",
            cardText: "CRiT is a cross-platform app that scans a barcode to tell the user whether to recycle, compost, or trash the item.",
            realm: "Hackathon",
            longText: "My brother and I began this app at HackDavis 2019, following the environmental track. The app scans a products barcode, and would rely on a user-input database to classify an item. We decided to use Dart and Flutter to create the app in order to get experience with a new technology, and making the app cross-platform would make it more accessible.",
            link: "https://github.com/dritchie1031/CRiT"
        }),
        React.createElement(ProjectCard, {
            thumbnail: "assets/dnd.jpg",
            cardText: "A random NPC Generator for Dungeons and Dragons Fifth Edition. My first project!\\n",
            realm: "Personal",
            longText: "I started this project when I was a senior in high school, because I started to play D&D as a Game Master and needed a way to quickly come up with characters. It was my first actual project. I used Python for web scraping in order to get the data, and stored it in text files. The program reads the text files and generates a random combination. More customizability and a better GUI is on the way.",
            link: "https://github.com/dritchie1031/NPCGen"
        })
    );
}

var ProjectCard = function (_React$Component) {
    _inherits(ProjectCard, _React$Component);

    function ProjectCard(props) {
        _classCallCheck(this, ProjectCard);

        var _this = _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).call(this, props));

        _this.state = {
            moreInfo: false,
            thumbnail: props.thumbnail,
            cardText: props.cardText,
            realm: props.realm,
            longText: props.longText,
            link: props.link
        };
        _this.showMoreInfo = _this.showMoreInfo.bind(_this);
        _this.hideMoreInfo = _this.hideMoreInfo.bind(_this);
        return _this;
    }

    _createClass(ProjectCard, [{
        key: "showMoreInfo",
        value: function showMoreInfo() {
            this.setState({ moreInfo: true });
        }
    }, {
        key: "hideMoreInfo",
        value: function hideMoreInfo() {
            this.setState({ moreInfo: false });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.state.moreInfo) {
                return React.createElement(
                    "div",
                    { className: "col-md-4" },
                    React.createElement(
                        "div",
                        { className: "card mb-4 shadow-sm" },
                        React.createElement("img", { src: this.state.thumbnail, className: "card-img-top", width: "100%", height: "225" }),
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "p",
                                { className: "card-text" },
                                this.state.cardText
                            ),
                            React.createElement(
                                "div",
                                { className: "d-flex justify-content-between align-items-center" },
                                React.createElement(
                                    "div",
                                    { className: "btn-group" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn btn-sm btn-outline-secondary", onClick: this.showMoreInfo },
                                        "More Info"
                                    )
                                ),
                                React.createElement(
                                    "small",
                                    { className: "text-muted" },
                                    this.state.realm
                                )
                            )
                        )
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    { className: "col-md-4" },
                    React.createElement(
                        "div",
                        { className: "card mb-4 shadow-sm" },
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "p",
                                { className: "card-text" },
                                this.state.longText
                            ),
                            React.createElement(
                                "div",
                                { className: "d-flex justify-content-between align-items-center" },
                                React.createElement(
                                    "div",
                                    { className: "btn-group" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn btn-sm btn-outline-secondary", onClick: this.hideMoreInfo },
                                        "Front"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "btn-group" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn btn-sm btn-outline-secondary" },
                                        React.createElement(
                                            "a",
                                            { href: this.state.link },
                                            "Check it out!"
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }
        }
    }]);

    return ProjectCard;
}(React.Component);

// render the page


ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));

