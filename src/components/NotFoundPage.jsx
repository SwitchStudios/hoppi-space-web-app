import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>
        404 Page Not Found
      </h1>
      <h2>Oops! Looks like something went wacky on our end</h2>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
