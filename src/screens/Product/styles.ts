import styled, { css } from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;
