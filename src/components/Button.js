import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border: none;
  border-radius: 4px;
`;
