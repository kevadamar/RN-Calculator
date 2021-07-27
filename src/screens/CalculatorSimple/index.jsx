import { Button, VStack, ScrollView, HStack } from 'native-base';
import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import ButtonReuse from '../../components/ButtonReuse';
import InputReuse from '../../components/InputReuse';
import _global from '../../styles/_global';

const CalculatorSimple = ({ navigation }) => {
  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');

  const [resultCalculate, setResultCalculate] = React.useState(0);

  const operators = ['+', '-', '*', '/', '%'];

  const handleCalculate = (operator) => {
    if (!firstValue || !secondValue) return;

    setResultCalculate(
      eval(
        `${
          firstValue.includes(',') ? firstValue.replace(',', '.') : firstValue
        }${operator}${
          secondValue.includes(',')
            ? secondValue.replace(',', '.')
            : secondValue
        }`,
      ),
    );
  };

  const _keyboardDidShow = React.useCallback(() => {
    navigation.setOptions({
      tabBarVisible: false,
      tabBar: { backgroundColor: 'red' },
    });
  }, [navigation]);

  const _keyboardDidHide = React.useCallback(() => {
    navigation.setOptions({ tabBarVisible: true });
  }, [navigation]);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
  }, []);

  return (
    <ScrollView>
      <VStack space={4} w="100%" mt={10} px={10} pt={10}>
        <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Value A</Text>
        <InputReuse
          setValue={(newValue) => setFirstValue(newValue)}
          value={firstValue}
        />
        <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Value B</Text>
        <InputReuse
          setValue={(newValue) => setSecondValue(newValue)}
          value={secondValue}
        />
        <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>Result</Text>
        <View
          style={{
            backgroundColor: '#eaeaea',
            padding: 10,
            borderRadius: 5,
            minHeight: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>{resultCalculate}</Text>
        </View>
        <HStack alignItems="center" justifyContent="space-between" pt={5}>
          {operators.map((operator, idx) => (
            <ButtonReuse
              key={idx}
              onPress={() => handleCalculate(operator)}
              colorScheme="newIdentity"
              size="lg"
              title={operator}
            />
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default CalculatorSimple;
