import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {CardItem} from './CardItem';
import {CardSectionProps} from './types';

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const CardSection: React.FC<CardSectionProps> = props => {
  return (
    <CardList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardListStyle}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <CardItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  cardListStyle: {
    paddingRight: 25,
    alignItems: 'center',
  },
});

export {CardSection};
