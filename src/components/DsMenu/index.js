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
    const getMenuItems = (items) => {
      return items.map((item) => {
        if (!item.children) {
          return (
            <li className="ds-c-menu__item" key={item.href}>
              <a className="ds-c-menu__link" href={item.href}>{item.text}</a>
            </li>
          )
        } else {
          let nestedItems = getMenuItems(item.children);
          return (
            <li className="ds-c-menu__item" key={item.href}>
              <a className="ds-c-menu__link" href={item.href}>{item.text}</a>
              <ul className="ds-c-menu__items">
                {nestedItems}
              </ul>
            </li>
          )
        }
      })
    }
    const menuItems = getMenuItems(this.state.items)
    return (
      <div className={`ds-c-menu ${this.state.classModifiers}`}>
        <ul className="ds-c-menu__items">
          {menuItems}
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
