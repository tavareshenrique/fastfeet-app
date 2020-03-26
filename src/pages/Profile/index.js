import React from 'react';
import { ScrollView } from 'react-native';

import Avatar from '~/components/Avatar';
import Button from '~/components/Button';

import {
  Container,
  ContentAvatar,
  DataProfile,
  ContentProfile,
  LabelInformation,
  LabelData,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <ScrollView>
        <ContentAvatar>
          <Avatar size={150} name="Henrique Tavares" />
        </ContentAvatar>

        <DataProfile>
          <ContentProfile>
            <LabelInformation>Nome Completo</LabelInformation>
            <LabelData>Henrique Tavares</LabelData>
          </ContentProfile>

          <ContentProfile>
            <LabelInformation>Email</LabelInformation>
            <LabelData>ihenrits@gmail.com</LabelData>
          </ContentProfile>

          <ContentProfile>
            <LabelInformation>Data de Cadastro</LabelInformation>
            <LabelData>10/01/2020</LabelData>
          </ContentProfile>
        </DataProfile>

        <Button color="#e74040" loading={false}>
          Sair
        </Button>
      </ScrollView>
    </Container>
  );
}
