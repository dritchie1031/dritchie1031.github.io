'use strict';

function Home() {
    return (
        <div id="homePage" className='content'>
            <img src='assets/DanielRitchie.jpg'/>
            <div>
                <p className='header'>About Me</p>
                <p>I'm an undergraduate student at the University of California,
                Davis. I'm majoring in Computer Science and pursuing a minor in
                Education. Some of my hobbies include reading, writing,
                playing soccer, and Dungeons and Dragons.</p>
                <p className='subheader'>Programmer</p>
                <p>On the programming end, I have lots of interests. I have done
                some web development work, and I have done a couple of personal
                projects with game and android app development. I am further
                interested in AI and machine learning, but I have yet to jump
                into that area.</p>
                <p className='subheader'>Teacher</p>
                <p>Tutoring and teaching is also a big part of my life. I have
                tutored each summer for the last several years, and I hope to
                become a teacher or professor at some point in my career.</p>
            </div>
        </div>
    );
}
function Projects() {
  return (
    <h2>This is the Project Page</h2>
  );
}
function Tutoring() {
  return (
    <h2>This is the Tutoring Page</h2>
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0
    }
    this.homeView = this.homeView.bind(this);
    this.projectsView = this.projectsView.bind(this);
    this.tutoringView = this.tutoringView.bind(this);
    /*this.contactView = this.contactView.bind(this);*/
  }

  homeView() {
    this.setState({currentView: 0});
  }

  projectsView() {
    this.setState({currentView: 1});
  }

  tutoringView() {
    this.setState({currentView: 2});
  }

  contactView() {
    this.setState({currentView: 3});
  }

  render() {
    let content;
    switch(this.state.currentView) {
      case 0:
        content = <Home/>
        break;
      case 1:
        content = <Projects/>
        break;
      case 2:
        content = <Tutoring/>
        break;
      /*case 3:
        content = <Contact/>
        break;*/
      default:
        content = <Home/>;
    }

    return(
      <div id="main-page">
        <div className="row">
          <h1 className="col-md-6" onClick={this.homeView}>Daniel Ritchie</h1>
          <nav>
            <a onClick={this.projectsView} href="#" className="col-md-3">Projects</a>
            <a onClick={this.tutoringView} href="#" className="col-md-3">Tutoring</a>
            {/*<a onClick={this.contactView} href="#">Contact</a>*/}
          </nav>
        </div>
        {content}
      </div>
    );
  }
}

// render the page
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
