import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>CSS Layouts</title>
      <link rel="stylesheet" href="//use.typekit.net/bxp4zom.css" />
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
