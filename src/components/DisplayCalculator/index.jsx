import { Box } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

const DisplayCalculator = ({ lastNumber, currentNumber }) => {
  return (
    <Box
      bg="white"
      h={100}
      style={{
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}
    >
      <Text style={{ color: '#c2c0ba', fontSize: 20, fontWeight: '200' }}>
        {lastNumber}
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 34 }}>{currentNumber}</Text>
    </Box>
  );
};

export default DisplayCalculator;
