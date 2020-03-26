import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import { styles } from '~/utils/shadow';

import {
  Container,
  PrimaryCard,
  SecondaryCard,
  MenuCard,
  CardInformation,
  CardTitle,
  DataInformation,
  Label,
  Data,
  MenuButton,
  MenuText,
  Line,
} from './styles';

export default function DeliveryDetail({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <Header
          title="Detalhes da Encomenda"
          handleBack={() => navigation.navigate('Delivery')}
        />

        <PrimaryCard style={styles}>
          <CardInformation>
            <MaterialIcons name="local-shipping" size={30} color="#9071ea" />
            <CardTitle>Informações da Entrega</CardTitle>
          </CardInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>
        </PrimaryCard>

        <SecondaryCard style={styles}>
          <CardInformation>
            <Icon name="md-calendar" size={30} color="#9071ea" />
            <CardTitle>Situação da Entrega</CardTitle>
          </CardInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>

          <DataInformation>
            <Label>DESTINTÁRIO</Label>
            <Data>Lorem ipsum dolor sit amet.</Data>
          </DataInformation>
        </SecondaryCard>

        <MenuCard style={styles}>
          <MenuButton onPress={() => navigation.navigate('ProblemReport')}>
            <Icon name="md-close-circle-outline" size={30} color="red" />
            <MenuText>Informar Problema</MenuText>
          </MenuButton>

          <Line />

          <MenuButton onPress={() => navigation.navigate('ViewProblems')}>
            <Icon
              name="md-information-circle-outline"
              size={30}
              color="#e7ba40"
            />
            <MenuText>Visualizar Problema</MenuText>
          </MenuButton>

          <Line />

          <MenuButton onPress={() => navigation.navigate('ConfirmDelivery')}>
            <Icon
              name="md-checkmark-circle-outline"
              size={30}
              color="#9071ea"
            />
            <MenuText>Confirmar Entrega</MenuText>
          </MenuButton>
        </MenuCard>
      </ScrollView>
    </Container>
  );
}

DeliveryDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
