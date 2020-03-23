import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Form } from '@unform/mobile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '~/components/Button';
import InputProblemReport from './InputProblemReport';

import { styles } from '~/utils/shadow';

import { Header, Title, HeaderTitle, Card } from './styles';

export default function ProblemReport({ navigation }) {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.tron.log('data', data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetail')}>
          <Ionicons name="ios-arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <HeaderTitle>
          <Title>Informar Problema</Title>
        </HeaderTitle>

        <Card style={styles.shadow}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputProblemReport
              placeholder="Inclua aqui o problema que ocorreu na entrega."
              name="description"
              type="text"
            />

            <Button
              color="#816fe7"
              loading={false}
              onPress={() => formRef.current.submitForm()}
            >
              Enviar
            </Button>
          </Form>
        </Card>
      </Header>
    </>
  );
}

ProblemReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
