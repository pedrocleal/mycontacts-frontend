import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  transition: all 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  ${({ error }) => error && css`
    color: #FC5050;
    border-color: #FC5050 !important;
  `}
`;
