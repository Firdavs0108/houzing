import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 760px) {
    padding: 0 16px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};

  .active {
    color: #b8ff06;
  }
`;

const Logo = styled.img`
  width: 30px;
  margin-right: 12px;

  @media (max-width: 760px) {
    width: 24px;
    margin-right: 4px;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
  font-size: 14px;

  @media (max-width: 760px) {
    padding: 0 4px;
    font-size: 12px;
  }
`;

export { Container, Wrapper, Section, Logo, Link, Main };
