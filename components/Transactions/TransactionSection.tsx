import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {TransactionItem} from './TransactionItem';
import {TransactionProps, TransactionSectionProps} from './types';

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: React.FC<TransactionSectionProps> = props => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={styles.rowStyle}>
        <RegularText textStyles={styles.transactionText}>
          Transaction
        </RegularText>
        <SmallText textStyles={styles.recentText}>Recent</SmallText>
      </TransactionRow>
      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}: any) => id.toString()}
        contentContainerStyle={styles.listStyle}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    marginBottom: 25,
  },
  transactionText: {
    fontSize: 19,
    color: colors.secondary,
  },
  recentText: {
    color: colors.secondary,
  },
  listStyle: {
    paddingBottom: 25,
  },
});

export {TransactionSection};
