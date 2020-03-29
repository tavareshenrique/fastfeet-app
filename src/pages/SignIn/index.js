import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import Background from '~/components/Background';
import Input from '~/components/Input';

import { Container, Form, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image
          source={logo}
          style={{
            tintColor: '#fff',
          }}
        />

        <Form>
          <Input
            keyboardType="visible-password"
            autoCorrect
            autoCapitalize="none"
            placeholder="Insira seu ID de cadastro"
            returnKeyType="next"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
