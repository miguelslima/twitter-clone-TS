import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Miguel Lima</h1>
        <h2>@miguelslima</h2>

        <p>
          Developer at <a href="www.linkedin.com/in/miguelslima1986">Solitário</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Mossoro, RN
          </li>
          <li>
            <CakeIcon />
            Nascido em 28 de novembro de 1986
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            680 <strong>seguidores</strong>
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage;
