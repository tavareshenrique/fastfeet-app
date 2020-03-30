import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useRoute } from '@react-navigation/native';

import { setProblemRequest } from '~/store/modules/delivery/actions';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Input from './Input';

import { styles } from '~/utils/shadow';

import { Container, Card } from './styles';

export default function ProblemReport({ navigation }) {
  const dispatch = useDispatch();
  const route = useRoute();

  const { id } = route.params;

  const setProblem = useSelector((state) => state.delivery.setProblem);

  const [description, setDescription] = useState('');

  useEffect(() => {
    if (setProblem) {
      navigation.navigate('DeliveryDetail');
    }
  }, [setProblem, navigation]);

  function handleSubmit() {
    dispatch(setProblemRequest(id, description));
  }

  return (
    <Container>
      <Header
        title="Informar Problema"
        handleBack={() => navigation.navigate('DeliveryDetail')}
      />

      <Card style={styles}>
        <Input
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          name="description"
          value={description}
          setValue={setDescription}
          type="text"
        />

        <Button color="#816fe7" loading={false} onPress={handleSubmit}>
          Enviar
        </Button>
      </Card>
    </Container>
  );
}

ProblemReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
