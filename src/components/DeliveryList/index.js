import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

import { Loading } from './styles';

export default function DeliveryList() {
  const dataUser = useSelector((state) => state.auth.data);

  const [dataDelivery, setDataDelivery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    async function fetchDelivery() {
      const id = dataUser.map((user) => user.id);
      const response = await api.get(`deliverymen/${id}/deliveries`, {
        params: {
          page: 1,
        },
      });
      setDataDelivery(response.data);
    }

    fetchDelivery();
  }, [dataUser]);

  async function loadDelivery() {
    const id = dataUser.map((user) => user.id);

    setLoading(true);

    const response = await api.get(`deliverymen/${id}/deliveries`, {
      params: {
        page,
      },
    });

    response.data.forEach((delivery) => {
      setDataDelivery((oldDataDelivery) => [
        ...oldDataDelivery,
        delivery,
      ]);
    });

    setPage(page + 1);
    setLoading(false);
  }

  function renderFooter() {
    if (!loading) return null;

    return (
      <Loading>
        <ActivityIndicator />
      </Loading>
    );
  }

  return (
    <FlatList
      data={dataDelivery}
      renderItem={({ item }) => <DeliveryItem data={item} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={({ distanceFromEnd }) => {
        if (distanceFromEnd < 0) return;
        loadDelivery();
      }}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
}
