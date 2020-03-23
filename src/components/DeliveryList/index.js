import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import Lottie from 'lottie-react-native';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

import deliveryLoading from '~/assets/lottie/delivery.json';

import { Loading, LoadingDelivery } from './styles';

export default function DeliveryList({ typeFilter, navigation }) {
  const dataUser = useSelector((state) => state.auth.data);

  const [dataDelivery, setDataDelivery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDelivery, setLoadingDelivery] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    async function fetchDelivery() {
      const id = dataUser.map((user) => user.id);

      let params = '';
      if (typeFilter === 'pending') {
        params = {
          page: 1,
        };
      } else {
        params = {
          page: 1,
          delivered: true,
        };
      }
      setLoadingDelivery(true);
      const response = await api.get(`deliverymen/${id}/deliveries`, {
        params,
      });

      setDataDelivery(response.data);
      setLoadingDelivery(false);
    }

    fetchDelivery();
  }, [typeFilter, dataUser]);

  useEffect(() => {
    async function fetchDelivery() {
      const id = dataUser.map((user) => user.id);

      setLoadingDelivery(true);
      const response = await api.get(`deliverymen/${id}/deliveries`, {
        params: {
          page: 1,
        },
      });

      setDataDelivery(response.data);
      setLoadingDelivery(false);
    }

    fetchDelivery();
  }, [dataUser]);

  async function loadDelivery() {
    const id = dataUser.map((user) => user.id);

    let params = '';
    if (typeFilter === 'pending') {
      params = {
        page,
      };
    } else {
      params = {
        page,
        delivered: true,
      };
    }

    setLoading(true);
    const response = await api.get(`deliverymen/${id}/deliveries`, {
      params,
    });

    response.data.forEach((delivery) => {
      setDataDelivery((oldDataDelivery) => [...oldDataDelivery, delivery]);
    });

    setPage(page + 1);
    setLoading(false);
  }

  function renderLoading() {
    if (!loading) return null;

    return (
      <Loading>
        <ActivityIndicator />
      </Loading>
    );
  }

  return (
    <>
      {!loadingDelivery ? (
        <FlatList
          data={dataDelivery}
          renderItem={({ item }) => (
            <DeliveryItem data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={({ distanceFromEnd }) => {
            if (distanceFromEnd < 0) return;
            loadDelivery();
          }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderLoading}
        />
      ) : (
        <LoadingDelivery>
          <Lottie resizeMode="contain" source={deliveryLoading} autoPlay loop />
        </LoadingDelivery>
      )}
    </>
  );
}

DeliveryList.propTypes = {
  typeFilter: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
