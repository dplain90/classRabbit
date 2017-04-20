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
            Follow Us! We are friendly:
          </span>
          <a href="#" className="social-media links">
            <img src="" alt="facebook" />
          </a>
          <a href="#" className="social-media links">
            <img src="" alt="twitter" />
          </a>
          <a href="#" className="social-media links">
            <img src="" alt="instagram" />
          </a>
        </section>

        <section className="bottom-nav">
          <div className="discover">
            <span className="footer-title">Discover</span>
            <ul>
              <li><a href="#">Become a Tasker</a></li>
              <li><a href="#">The TaskRabbit Elite</a></li>
              <li><a href="#">Buy a Gift Card</a></li>
              <li><a href="#">TaskRabbit for Good</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="company">
            <span className="footer-title">Company</span>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Terms   Policy</a></li>
            </ul>
          </div>

          <div className="download-app">
            <span className="footer-title">Download our app</span>
            <p> Tackle your to-do list wherever you are with our mobile app. </p>
            <span> <img src="" alt="App Store" /></span>
            <span> <img src="" alt="Google Play" /></span>
          </div>
        </section>

      </footer>

    );

  }

}


export default withRouter(BottomNav);
