import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar></MenuBar>

        <Main />

        <SideBar></SideBar>
      </Wrapper>
    </Container>
  )
}

export default Layout;
