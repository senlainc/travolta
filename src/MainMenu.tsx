import React from 'react';

import Menu, {Button as MenuButton} from './components/Menu';

function MainMenu() {
  return (
    <Menu>
      <MenuButton>About Us</MenuButton>
      <MenuButton>My bookings</MenuButton>
      <MenuButton>Sign-In</MenuButton>
    </Menu>
  );
}

export default MainMenu;
