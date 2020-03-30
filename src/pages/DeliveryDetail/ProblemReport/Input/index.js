import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
    height: 300,
  },
});

export default function Input({ value, setValue, ...rest }) {
  return (
    <TextInput
      multiline
      style={styles.input}
      cols
      onChangeText={(text) => setValue(text)}
      value={value}
      {...rest}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
