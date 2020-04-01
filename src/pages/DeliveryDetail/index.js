import React, { useState, useMemo, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {
  takeOrderRequest,
  resetTakeOrder,
} from '~/store/modules/delivery/actions';

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

export default function DeliveryDetail() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const userData = useSelector((state) => state.auth.data);
  const idDeliveryman = userData.map((user) => user.id);

  const isTakeOrder = useSelector((state) => state.delivery.setTakeOrder);

  const { id, product, start_date, end_date, recipient } = route.params.data;
  const { name, street, number, city, state, zipcode } = recipient;

  const [heightCard, setHeightCard] = useState(0);

  useEffect(() => {
    if (isTakeOrder) {
      dispatch(resetTakeOrder());
      navigation.navigate('Delivery');
    }
  }, [isTakeOrder, navigation, dispatch]);

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

  function takeOrder() {
    dispatch(takeOrderRequest(idDeliveryman, id));
  }

  return (
    <Container>
      <ScrollView>
        <Header title="Detalhes da Encomenda" />

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
          {start_date ? (
            <>
              <MenuButton
                onPress={() =>
                  navigation.navigate('ProblemReport', {
                    id,
                  })
                }
              >
                <Icon name="md-close-circle-outline" size={30} color="red" />
                <MenuText>Informar Problema</MenuText>
              </MenuButton>

              <Line />

              <MenuButton
                onPress={() => {
                  navigation.navigate({
                    name: 'ViewProblems',
                    params: {
                      id,
                    },
                  });
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

              <MenuButton
                onPress={() =>
                  navigation.navigate('ConfirmDelivery', {
                    id,
                  })
                }
              >
                <Icon
                  name="md-checkmark-circle-outline"
                  size={30}
                  color="#7159c1"
                />
                <MenuText>Confirmar Entrega</MenuText>
              </MenuButton>
            </>
          ) : (
            <>
              <MenuButton fullWidth onPress={takeOrder}>
                <FontAwesome name="dolly" size={30} color="#7159c1" />
                <MenuText>Retirar Encomenda</MenuText>
              </MenuButton>
            </>
          )}
        </MenuCard>
      </ScrollView>
    </Container>
  );
}
