import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {TransactionAviProps} from './types';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: React.FC<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <View style={styles.icon} />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    heigh: 25,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
});

export {TransactionAvi};
