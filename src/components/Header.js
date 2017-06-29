import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import { cx } from '../utils';
import { animateScroll } from 'react-scroll';

class Navigation extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    }))
  };

  state = {
    isSticking: false,
    navOpen: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      isSticking: window.scrollY > 550 ? true : false
    })
  }

  logoClick = e => {
    e.preventDefault();
    animateScroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuint' });
  }

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }))
  }

  handleNavClick = e => {
    this.setState({
      navOpen: false
    }, this.props.onClick(e))
  };

  render() {
    return (
      <header className={cx({'Header': true, 'is-sticking': this.state.isSticking})}>
        <div className="Container">
          {this.state.isSticking &&
            <a className="Header-logo" onClick={this.logoClick}>
              <Logo />
              <h2 className="Header-title">React <br />Boston</h2>
            </a>
          }
          <div
            onClick={this.toggleNav}
            className={cx({
              'Navigation-toggle': true,
              'is-active': this.state.navOpen,
              'is-sticking': this.state.isSticking
            })}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
          <nav className={cx({'Navigation': true, 'is-open': this.state.navOpen, 'is-sticking': this.state.isSticking})}>
            {this.props.items.map(item => (
              <a
                key={item.href}
                className="Navigation-item"
                href={item.href}
                onClick={this.handleNavClick}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;
