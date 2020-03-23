import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icons from 'react-native-vector-icons/MaterialIcons';
import Timeline from '~/components/Timeline';

import { styles } from '~/utils/shadow';

import {
  ContentDelivery,
  HeaderDelivery,
  TitleContent,
  TitleProduct,
  FooterDelivery,
  FooterContent,
  DataDelivery,
  CityDelivery,
  ViewDetail,
  Label,
  DataContent,
  CityContent,
} from './styles';

export default function DeliveryItem({ data, navigation }) {
  function statusDelivery(dataStatus) {
    if (dataStatus.end_date) {
      return 'done';
    }
    if (dataStatus.start_date) {
      return 'progress';
    }

    return 'pedding';
  }

  return (
    <ContentDelivery style={styles.shadow}>
      <HeaderDelivery>
        <TitleContent>
          <Icons name="local-shipping" size={30} color="#8f71ea" />
          <TitleProduct>{data.product}</TitleProduct>
        </TitleContent>

        <Timeline status={statusDelivery(data)} />
      </HeaderDelivery>

      <FooterDelivery>
        <FooterContent>
          <DataContent>
            <Label>Data</Label>
            <DataDelivery>
              {format(new Date(data.recipient.createdAt), 'dd/MM/yyyy', {
                locale: pt,
              })}
            </DataDelivery>
          </DataContent>
          <CityContent>
            <Label>Cidade</Label>
            <CityDelivery>{data.recipient.city}</CityDelivery>
          </CityContent>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryDetail')}
          >
            <ViewDetail>Ver detalhes</ViewDetail>
          </TouchableOpacity>
        </FooterContent>
      </FooterDelivery>
    </ContentDelivery>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.string,
    recipient: PropTypes.shape({
      createdAt: PropTypes.string,
      city: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
