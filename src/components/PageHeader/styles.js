import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 8px;
    text-decoration: none;

    img {
      transform: rotate(270deg);
    }

    span {
      font-size: 16px;
      font-weight: bold;
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    h1 {
      color: ${({ theme }) => theme.colors.gray[900]};
      font-size: 24px;
    }
  }
`;
