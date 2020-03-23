import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import DeliveryList from '~/components/DeliveryList';

import {
  Container,
  Header,
  Avatar,
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

export default function Delivery() {
  const dataUser = useSelector((state) => state.auth.data);

  const [typeFilter, setTypeFilter] = useState('pending');

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);

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
        <Avatar source={{ uri: avatar }} />

        <Bio>
          <Welcome>Bem-vindo de volta,</Welcome>
          <Name>{name}</Name>
        </Bio>
        <TouchableOpacity>
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

      <DeliveryList typeFilter={typeFilter} />
    </Container>
  );
}
