import styled from 'styled-components';

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid white',
        color: 'white',
      };
    case 'light':
      return {
        background: 'white',
        border: '1px solid #E6E9EC',
        color: '#0D263B',
      };
    case 'primary':
      return {
        background: '#0061DF',
        border: 'none',
        color: 'white',
      };
    default:
      return {
        background: '#0061DF',
        border: 'none',
        color: 'white',
      };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;

  border-radius: 2px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '130px')};
  cursor: pointer;
  ${({ type }) => getType({ type })};

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export { Container };
