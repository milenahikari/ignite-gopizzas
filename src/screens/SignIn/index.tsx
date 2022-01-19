import React from "react";

import { Input } from "@components/Input";

import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Senha" type="secondary" secureTextEntry />
    </S.Container>
  );
}
