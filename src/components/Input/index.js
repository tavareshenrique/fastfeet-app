import React, { forwardRef } from 'react';

import { Container, TInput } from './styles';

function Input({ ...rest }, ref) {
  return (
    <Container>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
