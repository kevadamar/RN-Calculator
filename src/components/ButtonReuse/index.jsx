import { Button } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

const ButtonReuse = (props) => {
  const { onPress, title } = props;
  return (
    <Button onPress={onPress} {...props}>
      <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>
        {title}
      </Text>
    </Button>
  );
};

export default ButtonReuse;
