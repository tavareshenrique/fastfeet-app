import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import DeliveryList from '~/components/DeliveryList';
import Avatar from '~/components/Avatar';

import {
  Container,
  Header,
  AvatarImage,
  Bio,
  Welcome,
  Name,
  Exit,
  Content,
  HeaderContent,
  Title,
  FilterContaier,
  Filter,
} from './styles';

export default function Delivery({ navigation }) {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.auth.data);

  const [typeFilter, setTypeFilter] = useState('pending');

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);

  const formatName = useCallback((nameUser) => {
    if (nameUser.length > 6) {
      const splitName = nameUser.split(' ');

      return `${splitName[0]} ${splitName[1][0]}.`;
    }

    return '';
  }, []);

  useEffect(() => {
    dataUser.forEach((user) => {
      setName(user.name);

      if (user.avatar) {
        setAvatar(user.avatar.url);
      }
    });
  }, [dataUser]);

  return (
    <Container>
      <Header>
        {avatar ? (
          <AvatarImage
            source={{
              uri: avatar,
            }}
          />
        ) : (
          <Avatar name={name} />
        )}

        <Bio>
          <Welcome>Bem-vindo de volta,</Welcome>
          <Name>{formatName(name)}</Name>
        </Bio>
        <TouchableOpacity onPress={() => dispatch(signOut())}>
          <Exit name="exit-to-app" size={30} color="red" />
        </TouchableOpacity>
      </Header>

      <Content>
        <HeaderContent>
          <Title>Entregas</Title>
          <FilterContaier>
            <TouchableOpacity onPress={() => setTypeFilter('pending')}>
              <Filter active={typeFilter === 'pending'}>Pendentes</Filter>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTypeFilter('delivered')}>
              <Filter active={typeFilter === 'delivered'}>Entregues</Filter>
            </TouchableOpacity>
          </FilterContaier>
        </HeaderContent>
      </Content>

      <DeliveryList
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        navigation={navigation}
      />
    </Container>
  );
}

Delivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
