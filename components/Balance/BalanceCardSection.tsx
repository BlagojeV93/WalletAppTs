import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {BalanceCard} from './BalanceCard';
import {BalanceCardProps} from './types';

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const BalanceCardSection: React.FC<BalanceCardProps> = props => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
});

export {BalanceCardSection};
