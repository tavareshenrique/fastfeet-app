import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import { formatDate } from '~/utils/dateFormat';

import Avatar from '~/components/Avatar';
import Button from '~/components/Button';

import {
  Container,
  ContentAvatar,
  DataProfile,
  ContentProfile,
  LabelInformation,
  LabelData,
  AvatarImage,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.auth.data);

  const [avatarURL, setAvatarURL] = useState(null);
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    dataUser.forEach((user) => {
      if (user.avatar) {
        setAvatarURL(user.avatar.url);
      }

      setNameUser(user.name);
      setEmailUser(user.email);
      setCreatedAt(formatDate(user.created_at));
    });
  }, [dataUser]);

  return (
    <Container>
      <ScrollView>
        <ContentAvatar>
          {avatarURL ? (
            <AvatarImage
              source={{
                uri: avatarURL,
              }}
            />
          ) : (
            <Avatar size={150} name={nameUser} />
          )}
        </ContentAvatar>

        <DataProfile>
          <ContentProfile>
            <LabelInformation>Nome Completo</LabelInformation>
            <LabelData>{nameUser}</LabelData>
          </ContentProfile>

          <ContentProfile>
            <LabelInformation>Email</LabelInformation>
            <LabelData>{emailUser}</LabelData>
          </ContentProfile>

          <ContentProfile>
            <LabelInformation>Data de Cadastro</LabelInformation>
            <LabelData>{createdAt}</LabelData>
          </ContentProfile>
        </DataProfile>

        <Button
          onPress={() => dispatch(signOut())}
          color="#e74040"
          loading={false}
        >
          Sair
        </Button>
      </ScrollView>
    </Container>
  );
}
