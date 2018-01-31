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
    const firstPage = this.state.items[0];
    const lastPage = this.state.items[this.state.items.length - 1];
    const items = this.state.items.map((item, index) => {
      let currentPage = index + 1;
      return (
        <li className="ds-c-pagination__item" key={item.href}>
          <a className="ds-c-pagination__link" href={item.href}>{currentPage}</a>
        </li>
      )
    })
    return (
      <div className={`ds-c-pagination ${this.state.classModifiers}`}>
        <ul className="ds-c-pagination__items">
          <li className="ds-c-pagination__item" key={firstPage.href}>
            <a className="ds-c-pagination__link" href={firstPage.href}>first</a>
          </li>
          {items}
          <li className="ds-c-pagination__item" key={lastPage.href}>
            <a className="ds-c-pagination__link" href={lastPage.href}>last</a>
          </li>
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
