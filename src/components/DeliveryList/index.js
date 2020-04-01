import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import LottieComponent from '~/components/LottieComponent';

import DeliveryItem from './DeliveryItem';

import deliveryLoading from '~/assets/lottie/delivery.json';
import empty from '~/assets/lottie/empty.json';

import { Loading } from './styles';

export default function DeliveryList({
  typeFilter,
  setTypeFilter,
  navigation,
}) {
  const dataUser = useSelector((state) => state.auth.data);
  const setTakeOrder = useSelector((state) => state.delivery.setTakeOrder);
  const confirmDelivery = useSelector(
    (state) => state.delivery.confirmDelivery,
  );

  const [dataDelivery, setDataDelivery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDelivery, setLoadingDelivery] = useState(false);
  const [page, setPage] = useState(2);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setPage(2);
    setDataDelivery([]);
  }, [typeFilter]);

  useEffect(() => {
    async function fetchDelivery() {
      const id = dataUser.map((user) => user.id);

      const params = {
        page: 1,
      };

      if (confirmDelivery) {
        params.delivered = true;
        setTypeFilter('delivered');
      }

      setLoadingDelivery(true);
      const response = await api.get(`deliverymen/${id}/deliveries`, {
        params,
      });

      setDataDelivery(response.data);
      setLoadingDelivery(false);
    }

    fetchDelivery();
  }, [confirmDelivery]);

  useEffect(() => {
    async function fetchDelivery() {
      const id = dataUser.map((user) => user.id);

      let params = '';
      let delivered = false;

      if (setTakeOrder) {
        delivered = false;
      }
      if (typeFilter === 'pending') {
        params = {
          page: 1,
        };
      } else {
        params = {
          page: 1,
          delivered,
        };
      }

      setLoadingDelivery(true);
      const response = await api.get(`deliverymen/${id}/deliveries`, {
        params,
      });

      setDataDelivery(response.data);
      setTotalPage(response.headers['x-total-page-count']);
      setLoadingDelivery(false);
    }

    fetchDelivery();
  }, [dataUser, typeFilter, setTakeOrder]);

  async function loadDelivery() {
    const totalPageInt = parseInt(totalPage, 0);
    const pageTotal = totalPageInt === 0 ? 1 : totalPageInt;

    if (loading) return;
    if (page > pageTotal) return;

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

    setDataDelivery([...dataDelivery, ...response.data]);

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
        <>
          {dataDelivery.length !== 0 ? (
            <>
              <FlatList
                data={dataDelivery}
                renderItem={({ item }) => (
                  <DeliveryItem data={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={loadDelivery}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderLoading}
              />
            </>
          ) : (
            <LottieComponent>
              <Lottie resizeMode="contain" source={empty} autoPlay loop />
            </LottieComponent>
          )}
        </>
      ) : (
        <LottieComponent>
          <Lottie resizeMode="contain" source={deliveryLoading} autoPlay loop />
        </LottieComponent>
      )}
    </>
  );
}

DeliveryList.propTypes = {
  typeFilter: PropTypes.string.isRequired,
  setTypeFilter: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
