import React from "react";
import { Platform } from "react-native";

import * as S from "./styles";

export function Product() {
  return (
    <S.Container
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    ></S.Container>
  );
}
