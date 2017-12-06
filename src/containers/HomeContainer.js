import React from 'react';

const HomePage = () => {
  return (
    <div>
      <main>
            {/*Lead Section w/ Search*/}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 align-center" id="lead">
                    <h1>Hoppi Space</h1>
                    <h2>Connecting the artist within to the space you are without</h2>
                  {/*TO-DO: Add Anchor linked buttons to content below*/}
                  <form>
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search for..." />
                          <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            {/*Featured Studios Section*/}
              <div className="container">
                <div id="featured-carousel">
                  <h2>Featured Studios</h2>
                  <h3>A selection of our favorite digs.</h3>
                  {/*TO DO: Implement Featured Studios carousel*/}
                </div>
              </div>

            {/*How it Works Section*/}
              <div className="container">
                <div className="jumbotron" id="how-it-works">
                {/*TO DO: Ad back countraction to "you've"*/}
                  <h2 className="display-3">How It Works</h2>
                  <h3>Browse, Book, Pay</h3>
                  <hr/>
                  <p className="lead">We are your new favorite local coffee shop community board. Browse hundreds of available workshops in your area or worldwide using our fast and efficient search engine.
                  We optimize results with your craft needs, tools, and budget in mind.
                  When youve found "the one", our effortless booking system will relay your request to our owners for confirmation, and utilizing our secure Braintree-based payment system, make your payment. Welcome home.</p>
                </div>
              </div>

          {/*Footer => TO BE REFECTORED*/}

      </main>
    </div>
  );
};

export default HomePage;
