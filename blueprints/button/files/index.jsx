import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import styles from './styles.scss';

const ComponentStyles = css`styles`;

const Component = ({children, clickHandler}) => {
  return (
    <button className="{{_meta.bemName}}">
      {children}
      <style jsx>{ComponentStyles}</style>
    </button>
  )
};

Component.propTypes = {
  clickHandler: PropTypes.func
}

export default Component;
