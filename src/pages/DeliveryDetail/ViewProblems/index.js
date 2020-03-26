import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';

import api from '~/services/api';
import { formatDate } from '~/utils/dateFormat';

import Header from '~/components/Header';
import LottieComponent from '~/components/LottieComponent';

import { styles } from '~/utils/shadow';

import empty from '~/assets/lottie/empty.json';

import { Container, Card, Information, Description, Date } from './styles';

export default function ViewProblems({ navigation, route }) {
  const { id } = route.params;

  const [data, setData] = useState([]);

  const date = useCallback((createdDate) => formatDate(createdDate), []);

  const formatDescription = useCallback(
    (desc) => (desc.length >= 14 ? `${desc.substr(0, 15)}...` : desc),
    [],
  );
  useEffect(() => {
    async function fetchDeliveryProblems() {
      const response = await api.get(`delivery/${id}/problems`);

      setData(response.data);
    }

    fetchDeliveryProblems();
  }, [id]);

  return (
    <Container>
      {data.length !== 0 ? (
        <ScrollView>
          <Header
            title="Visualizar Problema"
            handleBack={() => navigation.navigate('DeliveryDetail')}
          />

          {data.map((delivery) => (
            <Card key={delivery.id} style={styles}>
              <Information>
                <Description>
                  {formatDescription(delivery.description)}
                </Description>
                <Date>{date(delivery.created_at)}</Date>
              </Information>
            </Card>
          ))}
        </ScrollView>
      ) : (
        <>
          <Header
            title="Visualizar Problema"
            handleBack={() => navigation.navigate('DeliveryDetail')}
          />

          <LottieComponent>
            <Lottie resizeMode="contain" source={empty} autoPlay loop />
          </LottieComponent>
        </>
      )}
    </Container>
  );
}

ViewProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
