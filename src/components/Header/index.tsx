import React from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface HeaderParams {
  header: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={path === '/' ? 'active' : ''}>
            Dashboard
          </Link>
          <Link to="/import" className={path === '/import' ? 'active' : ''}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
