import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

type InputProps = TextInputProps & {
  type?: S.TypeProps;
};

export function Input({ type = "primary", ...rest }: InputProps) {
  return <S.Container type={type} {...rest} />;
}
