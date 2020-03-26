import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import { formatDate } from '~/utils/dateFormat';

import Avatar from '~/components/Avatar';
import Button from '~/components/Button';

import {Container,
  ContentAvatar,
  DataProfile,
  ContentProfile,
  LabelInformation,
  LabelData,
  AvatarImage,} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const [avatarUrl] = useSelector((state) =>
    state.auth.data.map((user) => (user.avatar ? user.avatar.url : null)),
  );

  const [nameUser] = useSelector((state) =>
    state.auth.data.map((user) => user.name),
  );

  const [emailUser] = useSelector((state) =>
    state.auth.data.map((user) => user.email),
  );

  const [createdAt] = useSelector((state) =>
    state.auth.data.map((user) => user.created_at),
  );

  const registerAt = useMemo(() => formatDate(createdAt), [createdAt]);

  return (
    <Container>
      <ScrollView>
        {console.tron.log('avatarUrl', avatarUrl)}
        <ContentAvatar>
          {avatarUrl ? (
            <AvatarImage
              source={{
                uri: avatarUrl,
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
            <LabelData>{registerAt}</LabelData>
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
