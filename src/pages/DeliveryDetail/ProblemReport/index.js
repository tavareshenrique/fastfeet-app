import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Form } from '@unform/mobile';

import Header from '~/components/Header';
import Button from '~/components/Button';
import InputProblemReport from './InputProblemReport';

import { styles } from '~/utils/shadow';

import { Container, Card } from './styles';

export default function ProblemReport({ navigation }) {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.tron.log('data', data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Container>
      <Header
        title="Informar Problema"
        handleBack={() => navigation.navigate('DeliveryDetail')}
      />

      <Card style={styles}>
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
    </Container>
  );
}

ProblemReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
