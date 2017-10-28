import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const LoggedOut = () => {
  return (
    <div>
      <h2 className="alt-header">You are logged out!</h2>
    </div>
  );
};

export default LoggedOut;
