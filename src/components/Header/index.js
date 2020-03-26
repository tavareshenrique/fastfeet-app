import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Content, Title } from './styles';

export default function Header({ title, handleBack }) {
  return (
    <Container>
      <TouchableOpacity onPress={handleBack}>
        <Icon name="ios-arrow-back" size={30} color="#FFF" />
      </TouchableOpacity>

      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
};
