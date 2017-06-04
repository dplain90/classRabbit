import React from 'react';
import { Link, withRouter } from 'react-router';

class BottomNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <footer>
        <section className="social-media">
          <span className="social-media title">
            Want to find out more? Connect with me today:
          </span>
          <a href="#" className="social-media links">
            <div className="linkedin">

            </div>

          </a>
          <a href="#" className="social-media link twitter">
            <div className="github">

            </div>

          </a>
          <a href="#" className="social-media links">
            <div className="angel-list">

            </div>
          </a>
        </section>

        <section className="bottom-nav">
          <div className="discover">
            <span className="footer-title">Discover Other Great Projects</span>
            <ul>
              <li><a href="https://www.beatsmaster.us">BeatsMaster</a></li>
              <li><a href="https://www.on-tap.us">On Tap</a></li>
              <li><a href="https://getflix-app.herokuapp.com/#/">GetFlix</a></li>
              <li><a href="http://billionairbnb.us/">BillionairBnB</a></li>
              <li><a href="https://keep-scrolling.herokuapp.com">KeepScrolling</a></li>
            </ul>
          </div>

          <div className="company">
            <span className="footer-title">About Me</span>
            <ul>
              <li><a href="http://dannyplain.com">Portfolio</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="http://github.com/dplain90">GitHub</a></li>
            </ul>
          </div>

          <div className="download-app">
            <span className="footer-title">Games for Students:</span>
              <span className="download-app desc">
                Need some games to play with your students? Check out some of my other projects:
              </span>

            <span className="app-store-buttons">
              <a href="http://microcity.builders"><div className="microcity"></div></a>
              <div className="plainchess"> </div>
            </span>
          </div>
        </section>

      </footer>

    );

  }

}


export default withRouter(BottomNav);
