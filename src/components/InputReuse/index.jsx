import React from 'react';

import { TextInput } from 'react-native';

const InputReuse = ({ setValue, value }) => {
  return (
    <TextInput
      value={value}
      defaultValue={''}
      onChangeText={(v) => {
        if (!v.match(/[^\d+(,\d\d\d)*.\d+$]/) || !v.length) setValue(v);
      }}
      placeholder="Input. . ."
      keyboardType="numeric"
      style={{
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
      }}
    />
  );
};

export default InputReuse;
