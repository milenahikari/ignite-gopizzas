import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
  type: TypeProps;
};

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, type }) => css`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${type === "primary"
      ? theme.COLORS.SUCCESS_900
      : theme.COLORS.PRIMARY_900};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``;
