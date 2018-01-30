import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Toolbar from '../components/Toolbar'

import '../styles/base.scss';
import 'prismjs/themes/prism-solarizedlight.css';

const TemplateWrapper = ({ children }) => (
  <div className="layout">
    <Helmet>
      <title>CSS Layouts</title>
      <link rel="stylesheet" href="//use.typekit.net/bxp4zom.css" />
    </Helmet>
    <header className="layout__header">
      <h1>CSS Layouts</h1>
    </header>
    <main className="layout__main">
      <Toolbar />
      {children()}
    </main>
    <footer className="layout__footer"></footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
