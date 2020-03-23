import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { useField } from '@unform/core';

import { TextInputLarge } from './styles';

const styles = StyleSheet.create({
  textAlign: {
    textAlignVertical: 'top',
  },
});

function InputProblemReport({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <TextInputLarge
      multiline
      style={styles.textAlign}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
export default InputProblemReport;

InputProblemReport.propTypes = {
  name: PropTypes.string.isRequired,
};
