import React, { Component } from 'react';
import Hamburger from './Hamburger';

import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  text-transform: uppercase;
  font-style: italic;
  padding: 5px 0;
  font-size: 2.4rem;
`;

const Drawer = styled.div`
  width: 300px;
  max-width: 100%;
  position: fixed;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.08);
  left: 0;
  top: 0;
  z-index: 10;
  background: #fff;
  padding: 20px;
  transition: transform 0.25s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color.dark};
  transition: color 0.25s ease-out;
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.darkest};
  }
`;

class NavDrawer extends Component {
  state = {
    isOpen: false
  };

  handleToggleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleClick = e => {
    this.setState({ isOpen: false });
    this.props.onLinkClick(e);
  };

  render() {
    return (
      <React.Fragment>
        <Hamburger
          onClick={this.handleToggleClick}
          isActive={this.state.isOpen}
        />
        <Drawer isOpen={this.state.isOpen}>
          <NavList>
            {this.props.items.map(item => (
              <Item key={item.href}>
                <Link onClick={this.handleClick} href={item.href}>
                  {item.name}
                </Link>
              </Item>
            ))}
          </NavList>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default NavDrawer;
