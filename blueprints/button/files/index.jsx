import React from 'react';
import PropTypes from 'prop-types';

const Component = ({clickHandler}) => {
  return (
    <button className="{{_meta.bemName}}">{this.props.children}</button>
  )
};

Component.propTypes = {
  clickHandler: PropTypes.func
}

export default Component;
