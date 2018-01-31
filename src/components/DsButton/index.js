import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const modifiers = [
  'is-large',
  'is-small',
  'is-primary',
  'is-secondary',
  'is-success',
  'is-info',
  'is-warning',
  'is-danger',
  'is-light',
  'is-dark',
  'is-focus',
  'is-disabled',
]

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
      <button className={`ds-c-button ${this.state.classModifiers}`}>{ this.props.children }</button>
    )
  }
}

Component.propTypes = modifiers.reduce((accum, modifier) => {
  accum[modifier] =  PropTypes.bool;

  return accum;
}, {});

export default Component
