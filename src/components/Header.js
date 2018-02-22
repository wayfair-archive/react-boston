import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Hamburger from './Hamburger';
import styled, { keyframes } from 'styled-components';
import { animateScroll } from 'react-scroll';
import { Flex, Box } from 'grid-styled';

const NavItem = styled.a`
  display: block;
  padding: 0.6em;
  color: ${({ theme }) => theme.color.white};
  transition: color 0.15s ease-out;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
  }
  ${({ isSticking, theme: { color } }) =>
    isSticking &&
    `
    color: ${color.black};
    &:active,
    &:hover {
      color: ${color.primary};
    }
  `};
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 10px;
  ${({ isSticking, theme: { color } }) =>
    isSticking &&
    `
      transform: translateY(-100%);
      position: fixed;
      background: ${color.white};
      font-size: 1rem;
      border-bottom: 1px solid ${color.dark};
      animation: ${stickIt} 0.3s cubic-bezier(0.86, 0, 0.07, 1);
      animation-fill-mode: both;
      box-shadow: 0 1px 3px rgba(0,0,0, 0.2);
  `};
`;

const stickIt = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeaderTitle = styled.h2`
  line-height: 1.1;
  margin-left: 5px;
  color: black;
`;

const NavWrap = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    ${({ isOpen }) =>
      isOpen &&
      `
      display: block;
      position: absolute;
      top: 0;
      padding-top: 70px;
      background-color: rgba(0,0,0, 0.9);
      left: 0;
      right: 0;
      text-align: center;
    `};
    ${({ isOpen, isSticking, theme }) =>
      isOpen &&
      isSticking &&
      `
      box-shadow: 0 1px 3px rgba(0,0,0, 0.2);
      background: ${theme.color.white};
      top: 100%;
      padding-top: 0;

    `};
  }
`;

class Navigation extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
      })
    )
  };

  state = {
    isSticking: false,
    navOpen: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      isSticking: window.scrollY > 550 ? true : false
    });
  };

  handleLogoClick = e => {
    e.preventDefault();
    animateScroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuint' });
  };

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  };

  handleNavClick = e => {
    this.setState(
      {
        navOpen: false
      },
      this.props.onClick(e)
    );
  };

  render() {
    return (
      <Header isSticking={this.state.isSticking}>
        <Flex align="center" justify="space-between">
          {this.state.isSticking && (
            <HeaderLogo onClick={this.handleLogoClick}>
              <Logo {...this.props} isSticking={this.state.isSticking} />
              <HeaderTitle>
                React <br />Boston
              </HeaderTitle>
            </HeaderLogo>
          )}
          <Hamburger
            onClick={this.toggleNav}
            isActive={this.state.navOpen}
            isSticking={this.state.isSticking}
          />
          <Box ml="auto">
            <NavWrap
              isOpen={this.state.navOpen}
              isSticking={this.state.isSticking}
            >
              {this.props.items.map(item => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  to={item.href}
                  onClick={this.handleNavClick}
                  isSticking={this.state.isSticking}
                >
                  {item.name}
                </NavItem>
              ))}
            </NavWrap>
          </Box>
        </Flex>
      </Header>
    );
  }
}

export default Navigation;
