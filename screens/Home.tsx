import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import logo1 from '../assets/cards/visa_white.png';
import logo2 from '../assets/cards/mc.png';
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';
import {CardSection} from '../components/Cards/CardSection';
import {TransactionSection} from '../components/Transactions/TransactionSection';
import {SendMoneySection} from '../components/SendMoney/SendMoneySection';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/RootStack';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;

const Home: React.FC<HomeProps> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '1234123512',
      balance: 20000.15,
      alias: 'Work Debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '463467346734',
      balance: 12000.01,
      alias: 'Personal Prepaid',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '3467357838',
      balance: 5600.83,
      alias: 'School Prepaid',
      logo: logo2,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-$86.66',
      date: '14 Sep 2021',
      title: 'Taxi',
      subtitle: 'Uber car',
      art: {background: colors.primary, icon: 'car'},
    },
    {
      id: 2,
      amount: '-$26.65',
      date: '15 Sep 2021',
      title: 'Kinezi',
      subtitle: 'Sirtaki',
      art: {background: colors.accent, icon: 'car'},
    },
    {
      id: 3,
      amount: '-$6.66',
      date: '18 Sep 2021',
      title: 'Leskovac',
      subtitle: 'Rostilj',
      art: {background: colors.teritarry, icon: 'car'},
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '47584.44',
      name: 'Rafa Nadal',
      background: colors.teritarry,
      img: portrait1,
    },
    {
      id: 2,
      amount: '14758.46',
      name: 'Rafa Federer',
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: '42454.89',
      name: 'Nole Nadal',
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle={'dark-content'} />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

const styles = StyleSheet.create({});

export {Home};
