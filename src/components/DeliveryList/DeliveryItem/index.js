import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { CommonActions } from '@react-navigation/native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import { formatDate } from '~/utils/dateFormat';
import Timeline from '~/components/Timeline';

import { styles } from '~/utils/shadow';

import {
  ContentDelivery,
  HeaderDelivery,
  TitleContent,
  TitleProduct,
  FooterDelivery,
  FooterContent,
  LabelData,
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
            <LabelData>{formatDate(data.recipient.createdAt)}</LabelData>
          </DataContent>
          <CityContent>
            <Label>Cidade</Label>
            <LabelData>{data.recipient.city}</LabelData>
          </CityContent>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'DeliveryDetail',
                  params: {
                    data,
                  },
                }),
              );
            }}
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
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};
