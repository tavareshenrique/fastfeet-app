import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function LottieComponent({ children }) {
  return <Container>{children}</Container>;
}

LottieComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
