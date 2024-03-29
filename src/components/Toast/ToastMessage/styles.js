import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px #00000040;

  ${({ type }) => containerVariants[type] || containerVariants.default} 

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  & + & {
    margin-top: 12px;
  }
`;
