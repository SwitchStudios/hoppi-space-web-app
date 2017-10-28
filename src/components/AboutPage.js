import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <section id="mission">
        <h2 className="alt-header">Our Mission</h2>
        <p> {/*TO DO: Add back apostrophe to "today's creative"*/}
          At Hoppi Space, we believe that every individual should be able to pursue their artistic vision without a lack of space holding them back. Our goal is to transform the traditional avenues of searching for art-friendly venues to be more convenient for todays creative. 
          Implementing a "one-stop shop" approach, we hope to build an experience where users do not only see what is around their area, but what they can quickly reserve and use immediately, gaining more studio time and slashing the time searching for it. 
          Of course, we would not be anything without the studios themselves. We plan on working intimately with owners to give them not only more exposure to their target audience, but a new way to utilize their open time all while increasing traffic and their communities with low-risk.
          <br/>
          Moreover, we believe in the importance of growing and cultivating the arts community. As part of our mission, we hope to be able to sponsor a different arts-based charity, school, or non-profit on a monthly or quarterly basis*. 
          Creativity is something that we feel deserves to be consistently supported for building both an expanded personal outlook and well-rounded society. We have many details to work out, but as this is a deeply meaningful part of our work we would love any suggestions. 
        </p>
      </section>

      <section id="our-team">
        <h2>Our Team</h2>
          <p>Both of our founders are proud, Class of 2015 UNC Chapel Hill alumni devoted to the cause of making artistic expression accessible for all.</p>

          {/*TO DO: Add back aposthrope to "We'll take it"*/}
          <div class="team-member-card">
            <div class="team-img"></div>
            <div class="team-bio">
              <p class="member-name">Faith Walker, <span>Co-Founder</span></p>
              <p class="member-summary">QA Engineer by day, Web Dev and Chief Editor by night. Having earned her B.A. in Computer Science, she is dedicated to the task of creating not only an aesthetically pleasing and user-friendly experience, but also writing stuff you want to read. 
              Engaging material and intriguing design? Well take it.</p>
            </div>
          </div>

          {/*TO DO: Add back aposthrope to "She's got your back"*/}
          <div class="team-member-card">
            <div class="team-img"></div>
              <div class="team-bio">
                <p class="member-name">Pearl Sortman, <span>Co-Founder</span></p>
                <p class="member-summary">A Full-stack Developer by trade, Pearl uses her B.A. in Computer Science to turn a small class project into a personal passion. 
                She strives to help create a diverse, global community of creators and bring all telephone pole "Wanted" adds to the digital realm. Shes got your back, and our backend.</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;
