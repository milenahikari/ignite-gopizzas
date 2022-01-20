import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import brandImg from "@assets/brand.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <S.Content>
          <S.Brand source={brandImg} />

          <S.Title>Login</S.Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Senha" type="secondary" secureTextEntry />

          <S.ForgotPasswordButton>
            <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>
          <Button title="Entrar" type="secondary" />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
