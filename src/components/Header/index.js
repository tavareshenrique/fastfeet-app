import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Content, Title } from './styles';

export default function Header({ title, handleBack }) {
  return (
    <Container>
      <TouchableOpacity
        onPress={handleBack}
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
  handleBack: PropTypes.func.isRequired,
};
