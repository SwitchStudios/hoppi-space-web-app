import React from 'react';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <main>
          <div id="consult-banner">
            <p id="consult-copy">Located in the D.C. metro area? Sign-up for a free consultation!</p>
          </div>
              <div className="container">
                <div className ="row">
                  <div className ="col-lg-12" id="lead">
                    <h1>Hoppi Space</h1>
                    <h2>Connecting the artist within to the space you are without</h2>
                  </div>
                </div>
              </div>

              <div id="search">
                <h2>Dive on in.</h2>                  
              </div>

              <section>
                <div id="featured-carousel">
                  <h2>Featured Studios</h2>
                  <h3>A selection of our favorite digs.</h3>
                  {/*TO DO: Implement Featured Studios carousel*/}
                </div>
              </section>

            <section>
              <div id="how-it-works">
            {/*TO DO: Ad back countraction to "you've"*/}
                <h2>How It Works</h2>
                <h3>Browse, Book, Pay</h3>
                <p>We are your new favorite local coffee shop community board. Browse hundreds of available workshops in your area or worldwide using our fast and efficient search engine. 
                We optimize results with your craft needs, tools, and budget in mind. 
                When youve found "the one", our effortless booking system will relay your request to our owners for confirmation, and utilizing our secure Braintree-based payment system, make your payment. Welcome home.</p>
              </div>
            </section>
            <footer id="footer-items">
              <div>
                <h4>Socialize</h4>
                <ul className="social-share" id="footer-social">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>

              <div id="footer-contact">
                <h4>Get In Touch</h4>
                <ul>
                  <li>General: contact@hoppispace.com</li>
                  <li>Support: support@hoppispace.com</li>
                  <li>{/*TO DO: Add phone icon*/}Phone: 000.000.0000</li>
                </ul>
              </div>

              <div>
                <ul id="footer-copyright">
                  <li>Copyright &copy; Hoppi Space 2018</li>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Careers</li>
                </ul>
              </div>
            </footer>
      </main>
    </div>
  );
};

export default HomePage;
