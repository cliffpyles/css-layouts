import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const modifiers = [
  'is-primary',
  'is-secondary',
  'is-success',
  'is-danger',
  'is-warning',
  'is-info',
  'is-light',
  'is-dark',
]

import './styles.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    let classModifiers = Object.keys(props).reduce((accum, prop) => {
      if (modifiers.includes(prop)) {
        accum = `${accum} ds-${prop}`
      }
      return accum
    }, '');
    this.state = {
      classModifiers
    }
  }

  render() {
    return (
      <div className={`ds-c-alert ${this.state.classModifiers}`}>{ this.props.children }</div>
    )
  }
}

Component.propTypes = modifiers.reduce((accum, modifier) => {
  accum[modifier] =  PropTypes.bool;

  return accum;
}, {});

export default Component
