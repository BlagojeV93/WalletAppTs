import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {ScreenWidth} from '../shared';
import {CardProps} from './types';
import card_bg from '../../assets/bgs/background_transparent.png';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {useNavigation} from '@react-navigation/native';
import {HomeProps} from '../../screens/Home';

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const CardItem: React.FC<CardProps> = props => {
  const navigation = useNavigation<HomeProps['navigation']>();
  const handlePress = () => {
    navigation.navigate('Balance', {...props});
  };
  return (
    <CardBackground source={card_bg}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={styles.accountNoText}>
              ****** {props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={styles.bottomContainer}>
              <SmallText textStyles={styles.balanceTitle}>
                Total balance
              </SmallText>
              <RegularText textStyles={styles.balanceText}>
                {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

const styles = StyleSheet.create({
  accountNoText: {
    color: colors.white,
  },
  bottomContainer: {
    flex: 3,
  },
  balanceTitle: {
    marginBottom: 5,
    color: colors.grayLight,
  },
  balanceText: {
    fontSize: 19,
    color: colors.white,
  },
});

export {CardItem};
