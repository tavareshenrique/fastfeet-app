import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from '~/utils/shadow';

import {
  Header,
  Title,
  HeaderTitle,
  Card,
  Information,
  ContentDescription,
  Description,
  Data,
} from './styles';

export default function ViewProblems({ navigation }) {
  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetail')}>
          <Ionicons name="ios-arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <HeaderTitle>
          <Title>Informar Problema</Title>
        </HeaderTitle>

        <Card style={styles.shadow}>
          <Information>
            <ContentDescription>
              <Description>Teste</Description>
            </ContentDescription>

            <Data>14/01/2020</Data>
          </Information>
        </Card>
      </Header>
    </>
  );
}

ViewProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
