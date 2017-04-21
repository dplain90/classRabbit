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
            <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/icons/facebook-white-c3a6136eef265690fc96b6d0d4ab06e4.svg" alt="facebook" />
          </a>
          <a href="#" className="social-media link twitter">
            <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/icons/twitter-white-3079b06bb5d6e9db5d69a649abc70a32.svg" alt="twitter" />
          </a>
          <a href="#" className="social-media links">
            <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/icons/instagram-white-8371c5be5bffe9b46f865c33738d4187.svg" alt="instagram" />
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
              <span className="download-app desc">
                Tackle your to list wherever you are the best damn mobile app the world has ever seen.
              </span>

            <span className="app-store-buttons">
              <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/icons/appstore_badge-b38296811f274beb5cf9e8811fd0ea73.svg" alt="App Store" />
              <img src="https://d31ebqhycylygn.cloudfront.net/v3/assets/web/icons/google_play_badge-f22ef50734324ff62305edcefa657fc0.svg" alt="Google Play" />
            </span>
          </div>
        </section>

      </footer>

    );

  }

}


export default withRouter(BottomNav);
