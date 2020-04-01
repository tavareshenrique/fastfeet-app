import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Content, Title } from './styles';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 50,
          width: 30,
        }}
      >
        <Icon name="ios-arrow-back" size={30} color="#FFF" />
      </TouchableOpacity>

      <Content>
        <Title
          style={{
            marginRight: 30,
          }}
        >
          {title}
        </Title>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
