import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import styles from './styles.scss';

const ComponentStyles = css `styles`;

const modifiers = [];

const Component = (props) => {
  let classModifiers = Object.keys(props).reduce((accum, prop) => {
    if (modifiers.includes(prop)) {
      accum = `${accum} ${prop}`
    }
    return accum
  }, '');

  return (
    <div className={`{{_meta.bemName}} ${classModifiers}`}>
      {this.props.children}
      <style jsx>
        {
          ComponentStyles
        }</style>
    </div>
  )
}

Component.propTypes = modifiers.reduce((accum, modifier) => {
  accum[modifier] = PropTypes.bool;

  return accum;
}, {});

export default Component
