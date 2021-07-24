import { VStack } from 'native-base';
import React from 'react';
import { Text, FlatList } from 'react-native';

const HistoryScreen = ({ route }) => {
  const { historyNumbers } = route.params;

  const _renderItem = ({ item }) => {
    return <>
      <Text
        style={{
          color: '#FFF',
          fontSize: 30,
          textAlign: 'right',
          fontWeight: '200',
        }}
      >
        {item.calc}
      </Text>
      <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 34 }}>
        {item.resultCalc}
      </Text>
    </>;
  };

  return (
    <VStack p="10" flex={1} alignItems="flex-end" justifyContent="flex-start">
      <FlatList
        data={historyNumbers}
        renderItem={_renderItem}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </VStack>
  );
};

export default HistoryScreen;
