import React from 'react';

const Footer = () => (
  <div className="app-footer">
    <div className="footer-content">
        &copy;
      <code> LHT </code>
      {' '}
      {new Date().getFullYear()}
    </div>
  </div>
);

export default Footer;
