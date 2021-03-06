import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const modifiers = [];

class Component extends React.Component {
  constructor(props) {
    super(props);
    let classModifiers = Object.keys(props).reduce((accum, prop) => {
      if (modifiers.includes(prop)) {
        accum = `${accum} ds-${prop}`;
      }
      return accum
    }, '');
    this.state = {
      classModifiers,
      items: props.items
    }
  }

  render() {
    const navItems = this.state.items.map((navItem) => {
      return (
        <li className="ds-c-breadcrumb__item" key={navItem.href}>
          <a className="ds-c-breadcrumb__link" href={navItem.href}>{navItem.text}</a>
        </li>
      )
    })
    return (
      <div className={`ds-c-breadcrumb ${this.state.classModifiers}`}>
        <ul className="ds-c-breadcrumb__items">
          {navItems}
        </ul>
      </div>
    )
  }
}

Component.propTypes = modifiers.reduce((accum, modifier) => {
  accum[modifier] =  PropTypes.bool;

  return accum;
}, {
  items: PropTypes.array
});

export default Component
