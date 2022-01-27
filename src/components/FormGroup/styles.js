import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    color: #FC5050;
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }
`;
