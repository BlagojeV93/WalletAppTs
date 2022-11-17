import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {AmountSection} from '../components/Balance/AmountSection';
import {BalanceCardSection} from '../components/Balance/BalanceCardSection';
import {ButtonSection} from '../components/Balance/ButtonSection';
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import {RootStackParamList} from '../navigators/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Balance'>;

const BalanceContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding 25px;
  flex: 1
`;

const Balance: React.FC<Props> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar barStyle={'dark-content'} />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
});

export {Balance};
