import React from 'react';
import { Input, NumberInput, NumberInputField } from 'native-base';

const InputReuse = ({ setValue, value }) => {
  return (
    <NumberInput
      value={value}
      onChange={(v) => {
        setValue(isNaN(v) ? 0 : v);
      }}
    >
      <NumberInputField
        value={value}
        color="#000"
        borderColor="#FFF"
        backgroundColor="#FFF"
        _focus={{ borderColor: '#FFF' }}
        padding={2}
      />
    </NumberInput>
  );
};

export default InputReuse;
