import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import Header from '~/components/Header';

import { styles } from '~/utils/shadow';

import {
  Container,
  Card,
  CardSeconday,
  Information,
  Description,
  Date,
} from './styles';

export default function ViewProblems({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <Header
          title="Visualizar Problema"
          handleBack={() => navigation.navigate('DeliveryDetail')}
        />

        <Card style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </Card>

        <CardSeconday sub={1} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>

        <CardSeconday sub={4} style={styles}>
          <Information>
            <Description>Destinatário Ausente</Description>
            <Date>14/01/2020</Date>
          </Information>
        </CardSeconday>
      </ScrollView>
    </Container>
  );
}

ViewProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
