import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {Profile} from '../Header/Profile';
import {ScreenWidth} from '../shared';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {SendMoneyProps} from './types';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: React.FC<SendMoneyProps> = props => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{backgroundColor: props.background}}>
      <>
        <Profile img={props.img} imgContainerStyle={styles.profileImg} />
        <SmallText textStyles={styles.nameText}>{props.name}</SmallText>
        <RegularText textStyles={styles.amountText}>{props.amount}</RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    marginBottom: 10,
  },
  nameText: {
    textAlign: 'left',
    color: colors.white,
    fontSize: 12,
  },
  amountText: {
    color: colors.white,
    textAlign: 'left',
    fontSize: 13,
  },
});

export {SendMoneyItem};
