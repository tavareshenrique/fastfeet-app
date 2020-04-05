import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRoute, useNavigation } from '@react-navigation/native';

import {
  setProblemRequest,
  resetSetProblem,
} from '~/store/modules/delivery/actions';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Input from './Input';

import { styles } from '~/utils/shadow';

import { Container, Card } from './styles';

export default function ProblemReport() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  const setProblem = useSelector((state) => state.delivery.setProblem);

  const [description, setDescription] = useState('');

  useEffect(() => {
    if (setProblem) {
      navigation.navigate('DeliveryDetail');
      dispatch(resetSetProblem());
    }
  }, [setProblem, navigation]);

  function handleSubmit() {
    dispatch(setProblemRequest(id, description));
  }

  return (
    <Container>
      <Header title="Informar Problema" />

      <Card style={styles}>
        <Input
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          name="description"
          value={description}
          setValue={setDescription}
          type="text"
        />

        <Button color="#7159c1" loading={false} onPress={handleSubmit}>
          Enviar
        </Button>
      </Card>
    </Container>
  );
}
