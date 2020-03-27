import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { formatDate } from '~/utils/dateFormat';

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
  DateContent,
  MenuButton,
  MenuText,
  Line,
} from './styles';

export default function DeliveryDetail({ navigation, route }) {
  const { id, product, start_date, end_date, recipient } = route.params.data;
  const { name, street, number, city, state, zipcode } = recipient;

  const [heightCard, setHeightCard] = useState(0);

  function orderStatus(order) {
    if (order.canceled_at) {
      return 'CANCELADO';
    }

    if (order.end_date) {
      return 'ENTREGUE';
    }

    if (order.start_date) {
      return 'RETIRADO';
    }

    return 'PENDENTE';
  }
  const status = useMemo(() => orderStatus(route.params.data), [
    route.params.data,
  ]);

  const pickupDate = useMemo(
    () => (start_date ? formatDate(start_date) : '--/--/----'),
    [start_date],
  );

  const deliveryDate = useMemo(
    () => (end_date ? formatDate(end_date) : '--/--/----'),
    [end_date],
  );

  return (
    <Container>
      <ScrollView>
        <Header
          title="Detalhes da Encomenda"
          handleBack={() => navigation.navigate('Delivery')}
        />

        <PrimaryCard
          style={styles}
          onLayout={(event) => setHeightCard(event.nativeEvent.layout.height)}
        >
          <CardInformation>
            <MaterialIcons name="local-shipping" size={30} color="#7159c1" />
            <CardTitle>Informações da Entrega</CardTitle>
          </CardInformation>

          <DataInformation>
            <Label>DESTINATÁRIO</Label>
            <Data>{name}</Data>
          </DataInformation>

          <DataInformation>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Data>
              {`${street}, ${number}, ${city} - ${state}, ${zipcode}`}
            </Data>
          </DataInformation>

          <DataInformation>
            <Label>PRODUTO</Label>
            <Data>{product}</Data>
          </DataInformation>
        </PrimaryCard>

        <SecondaryCard style={styles} heightCard={heightCard}>
          <CardInformation>
            <Icon name="md-calendar" size={30} color="#7159c1" />
            <CardTitle>Situação da Entrega</CardTitle>
          </CardInformation>

          <DataInformation>
            <Label>STATUS</Label>
            <Data>{status}</Data>
          </DataInformation>

          <DateContent>
            <DataInformation>
              <Label>DATA DE RETIRADA</Label>
              <Data>{pickupDate}</Data>
            </DataInformation>

            <DataInformation>
              <Label>DATA DE ENTREGA</Label>
              <Data>{deliveryDate}</Data>
            </DataInformation>
          </DateContent>
        </SecondaryCard>

        <MenuCard style={styles}>
          <MenuButton onPress={() => navigation.navigate('ProblemReport')}>
            <Icon name="md-close-circle-outline" size={30} color="red" />
            <MenuText>Informar Problema</MenuText>
          </MenuButton>

          <Line />

          <MenuButton
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'ViewProblems',
                  params: {
                    id,
                  },
                }),
              );
            }}
          >
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
              color="#7159c1"
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
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        product: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        recipient: PropTypes.shape({
          name: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.string,
          city: PropTypes.string,
          state: PropTypes.string,
          zipcode: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
