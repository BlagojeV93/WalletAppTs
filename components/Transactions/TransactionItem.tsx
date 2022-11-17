import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {RegularButton} from '../Buttons/RegularButton';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {TransactionAvi} from './TransactionAvi';
import {TransactionProps} from './types';

interface TransactionItemProps {}

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: React.FC<TransactionProps> = props => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi {...props.art} />
        <View style={styles.innerLeftContainer}>
          <RegularText textStyles={styles.leftTitle}>{props.title}</RegularText>
          <SmallText textStyles={styles.leftSubtitle}>
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText textStyles={styles.amount}>{props.amount}</RegularText>
        <SmallText textStyles={styles.date}>{props.date}</SmallText>
      </RightView>
    </TransactionRow>
  );
};

const styles = StyleSheet.create({
  innerLeftContainer: {
    marginLeft: 10,
  },
  leftTitle: {
    color: colors.secondary,
    textAlign: 'left',
    marginBottom: 5,
  },
  leftSubtitle: {
    color: colors.grayDark,
    textAlign: 'left',
  },
  amount: {
    color: colors.secondary,
    textAlign: 'right',
    marginBottom: 5,
  },
  date: {
    color: colors.grayDark,
    textAlign: 'right',
  },
});

export {TransactionItem};
