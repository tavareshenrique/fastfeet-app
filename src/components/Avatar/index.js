import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Name } from './styles';

export default function Avatar({ name }) {
  const [color, setColor] = useState(null);

  const shortName = useCallback(() => {
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials;
  }, [name]);

  function randomNumber() {
    setColor(Math.floor(Math.random() * 5) + 1);
  }

  useEffect(() => {
    randomNumber();
  }, [name]);

  return (
    <Container color={color}>
      <Name color={color}>{shortName()}</Name>
    </Container>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};
