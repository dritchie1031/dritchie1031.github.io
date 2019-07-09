'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Home() {
  return React.createElement(
    'div',
    { id: 'homePage', className: 'content' },
    React.createElement('img', { src: 'assets/DanielRitchie.jpg' }),
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'header' },
        'About Me'
      ),
      React.createElement(
        'p',
        null,
        'I\'m an undergraduate student at the University of California, Davis. I\'m majoring in Computer Science and pursuing a minor in Education. Some of my hobbies include reading, writing, playing soccer, and Dungeons and Dragons.'
      ),
      React.createElement(
        'p',
        { className: 'subheader' },
        'Programmer'
      ),
      React.createElement(
        'p',
        null,
        'On the programming end, I have lots of interests. I have done some web development work, and I have done a couple of personal projects with game and android app development. I am further interested in AI and machine learning, but I have yet to jump into that area.'
      ),
      React.createElement(
        'p',
        { className: 'subheader' },
        'Teacher'
      ),
      React.createElement(
        'p',
        null,
        'Tutoring and teaching is also a big part of my life. I have tutored each summer for the last several years, and I hope to become a teacher or professor at some point in my career.'
      )
    )
  );
}
function Projects() {
  return React.createElement(
    'h2',
    null,
    'This is the Project Page'
  );
}
function Tutoring() {
  return React.createElement(
    'h2',
    null,
    'This is the Tutoring Page'
  );
}
/*function Contact() {
  return(
    <div>
    <p className='header'>Contact</p>
    <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
        <div class="row">
            <label class="required" for="name">Your name:</label><br />
            <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
            <span id="name_validation" class="error_message"></span>
        </div>
        <div className="row">
            <label class="required" for="email">Your email:</label><br />
            <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
            <span id="email_validation" class="error_message"></span>
        </div>
        <div class="row">
            <label class="required" for="message">Your message:</label><br />
            <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
            <span id="message_validation" class="error_message"></span>
        </div>

        <input id="submit_button" type="submit" value="Send email" />
    </form>
    </div>
  );
}*/

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      currentView: 0
    };
    _this.homeView = _this.homeView.bind(_this);
    _this.projectsView = _this.projectsView.bind(_this);
    _this.tutoringView = _this.tutoringView.bind(_this);
    /*this.contactView = this.contactView.bind(this);*/
    return _this;
  }

  _createClass(Main, [{
    key: 'homeView',
    value: function homeView() {
      this.setState({ currentView: 0 });
    }
  }, {
    key: 'projectsView',
    value: function projectsView() {
      this.setState({ currentView: 1 });
    }
  }, {
    key: 'tutoringView',
    value: function tutoringView() {
      this.setState({ currentView: 2 });
    }
  }, {
    key: 'contactView',
    value: function contactView() {
      this.setState({ currentView: 3 });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;
      switch (this.state.currentView) {
        case 0:
          content = React.createElement(Home, null);
          break;
        case 1:
          content = React.createElement(Projects, null);
          break;
        case 2:
          content = React.createElement(Tutoring, null);
          break;
        /*case 3:
          content = <Contact/>
          break;*/
        default:
          content = React.createElement(Home, null);
      }

      return React.createElement(
        'div',
        { id: 'main-page' },
        React.createElement(
          'header',
          null,
          React.createElement(
            'h1',
            { onClick: this.homeView },
            'Daniel Ritchie'
          ),
          React.createElement(
            'nav',
            null,
            React.createElement(
              'a',
              { onClick: this.projectsView, href: '#' },
              'Projects'
            ),
            React.createElement(
              'a',
              { onClick: this.tutoringView, href: '#' },
              'Tutoring'
            )
          )
        ),
        React.createElement('hr', null),
        content,
        React.createElement('footer', null)
      );
    }
  }]);

  return Main;
}(React.Component);

// render the page


ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));

