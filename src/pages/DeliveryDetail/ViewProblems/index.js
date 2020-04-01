import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Lottie from 'lottie-react-native';

import api from '~/services/api';
import { formatDate } from '~/utils/dateFormat';

import Header from '~/components/Header';
import LottieComponent from '~/components/LottieComponent';

import { styles } from '~/utils/shadow';

import empty from '~/assets/lottie/empty.json';

import {
  Container,
  Card,
  SecondaryCard,
  CardContent,
  Information,
  Description,
  Date,
} from './styles';

export default function ViewProblems() {
  const navigation = useNavigation();
  const route = useRoute();

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
      {data.length === 0 ? (
        <>
          <Header title="Visualizar Problema" />

          <LottieComponent>
            <Lottie resizeMode="contain" source={empty} autoPlay loop />
          </LottieComponent>
        </>
      ) : (
        <ScrollView>
          <Header title="Visualizar Problema" />

          {data.map((delivery, index) => {
            if (index === 0) {
              return (
                <Card
                  space={index}
                  sizeIsOne={data.length === 1}
                  key={delivery.id}
                  style={styles}
                >
                  <Information>
                    <Description>
                      {formatDescription(delivery.description)}
                    </Description>
                    <Date>{date(delivery.created_at)}</Date>
                  </Information>
                </Card>
              );
            }

            return (
              <CardContent key={delivery.id}>
                <SecondaryCard space={index} style={styles}>
                  <Information>
                    <Description>
                      {formatDescription(delivery.description)}
                    </Description>
                    <Date>{date(delivery.created_at)}</Date>
                  </Information>
                </SecondaryCard>
              </CardContent>
            );
          })}
        </ScrollView>
      )}
    </Container>
  );
}
