import React from 'react';
import PropTypes from 'prop-types';

import { Container, Points, Point, Labels, Label, Line } from './styles';

export default function TimeLine({ status }) {
  return (
    <Container>
      <Points>
        <Point
          activer={
            status === 'pedding' || status === 'progress' || status === 'done'
          }
        />
        <Line />
        <Point activer={status === 'progress' || status === 'done'} />
        <Line />
        <Point activer={status === 'done'} />
      </Points>
      <Labels>
        <Label>Aguardando Retirada</Label>
        <Label>Retirada</Label>
        <Label>Entregue</Label>
      </Labels>
    </Container>
  );
}

TimeLine.propTypes = {
  status: PropTypes.string.isRequired,
};
