import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { styles } from '~/utils/shadow';

import {
  Container,
  Header,
  Title,
  Card,
  HeaderCard,
  HeaderTitle,
  CardTitle,
  CardContent,
  DataContent,
  Label,
  TextValue,
  Menu,
  MenuContent,
  Line,
  LabelMenu,
} from './styles';

export default function DeliveryDetail({ navigation }) {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
          <Ionicons name="ios-arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <HeaderTitle>
          <Title>Detalhes da encomenda</Title>
        </HeaderTitle>

        <Card style={styles.shadow}>
          <HeaderCard>
            <MaterialIcons name="local-shipping" size={30} color="#8f71ea" />
            <CardTitle>Informações da entrega</CardTitle>
          </HeaderCard>

          <CardContent>
            <Label>DESTINATÁRIO</Label>
            <TextValue>Ludwig van Beethoven</TextValue>
          </CardContent>

          <CardContent>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <TextValue>
              Rua João Felicidade, Três Rios - RJ, 25815-560
            </TextValue>
          </CardContent>

          <CardContent>
            <Label>PRODUTO</Label>
            <TextValue>YAMAHA FAZER 150 2018</TextValue>
          </CardContent>
        </Card>

        <Card isBottom style={styles.shadow}>
          <HeaderCard>
            <Ionicons name="md-calendar" size={30} color="#8f71ea" />
            <CardTitle>Situação da entrega</CardTitle>
          </HeaderCard>

          <CardContent>
            <Label>STATUS</Label>
            <TextValue>Pendente</TextValue>
          </CardContent>

          <DataContent>
            <CardContent>
              <Label>DATA DA RETIRADA</Label>
              <TextValue>14/01/2020</TextValue>
            </CardContent>

            <CardContent>
              <Label>DATA DE ENTREGA</Label>
              <TextValue>--/--/----</TextValue>
            </CardContent>
          </DataContent>
        </Card>
      </Header>

      <Menu style={styles.shadow}>
        <MenuContent onPress={() => navigation.navigate('ProblemReport')}>
          <Ionicons name="md-close-circle-outline" size={45} color="red" />
          <LabelMenu>Informar Problema</LabelMenu>
        </MenuContent>

        <Line />

        <MenuContent>
          <Ionicons
            name="md-information-circle-outline"
            size={45}
            color="#e7ba40"
          />
          <LabelMenu>Visualizar Problemas</LabelMenu>
        </MenuContent>

        <Line />

        <MenuContent>
          <Ionicons
            name="md-checkmark-circle-outline"
            size={45}
            color="#816fe7"
          />
          <LabelMenu>Confirmar Entrega</LabelMenu>
        </MenuContent>
      </Menu>
    </Container>
  );
}

DeliveryDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
