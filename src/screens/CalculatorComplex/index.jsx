import { Box, Container, HStack, VStack } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonReuse from '../../components/ButtonReuse';
import DisplayCalculator from '../../components/DisplayCalculator';

const CalculatorComplex = () => {
  const [currentNumber, setCurrentNumber] = React.useState('');
  const [lastNumber, setLastNumber] = React.useState('');

  const titleBtn = [
    {
      title: ['~', 'C', 'DEL'],
    },
    {
      title: [1, 2, '-', '+'],
    },
    {
      title: [3, 4, '/', '*'],
    },
    {
      title: [5, 6, '%', '='],
    },
    {
      title: [7, 8, 9, 0],
    },
  ];

  const handleInput = (btnPressed) => {
    if (
      btnPressed === '+' ||
      btnPressed === '-' ||
      btnPressed === '*' ||
      btnPressed === '/'
    ) {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + '=');
        calculate();
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  };

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1];
    if (
      lastArr === '/' ||
      lastArr === '*' ||
      lastArr === '-' ||
      lastArr === '+' ||
      lastArr === '.'
    ) {
      setCurrentNumber(currentNumber);
    } else {
      if (!currentNumber) return;
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <VStack space={4} w="100%" pt={5} px={10}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
          Calculator
        </Text>
        <DisplayCalculator
          lastNumber={lastNumber}
          currentNumber={currentNumber}
        />
        {titleBtn.map((item, idx) =>
          item.title.length < 4 ? (
            <HStack space={4} key={idx} justifyContent="space-between">
              {item.title.map((value, idx2) => (
                <ButtonReuse
                  key={idx2}
                  onPress={() => handleInput(value)}
                  colorScheme={
                    isNaN(parseInt(value)) ? 'newIdentityDark' : 'newIdentity'
                  }
                  size={16}
                  style={{ width: 100 }}
                  title={value}
                />
              ))}
            </HStack>
          ) : (
            <HStack space={4} key={idx} justifyContent="space-between">
              {item.title.map((value, idx2) => (
                <ButtonReuse
                  key={idx2}
                  onPress={() => handleInput(value)}
                  colorScheme={
                    isNaN(parseInt(value)) ? 'newIdentityDark' : 'newIdentity'
                  }
                  size={16}
                  title={value}
                />
              ))}
            </HStack>
          ),
        )}
      </VStack>
    </View>
  );
};

export default CalculatorComplex;
