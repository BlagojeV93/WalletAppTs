import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {AmountProps} from './types';

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

const AmountSection: React.FC<AmountProps> = props => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={styles.title}>Total Balance</SmallText>
      <RegularText textStyles={styles.balance}>$ {props.balance}</RegularText>
    </AmountSectionBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.secondary,
    marginBottom: 15,
  },
  balance: {
    color: colors.secondary,
    fontSize: 28,
  },
});

export {AmountSection};
