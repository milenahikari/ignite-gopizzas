import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useAuth } from "@hooks/auth";

import brandImg from "@assets/brand.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as S from "./styles";

export function SignIn() {
  const { signIn, isLogging } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn(email, password);
  }
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
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <S.ForgotPasswordButton>
            <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
