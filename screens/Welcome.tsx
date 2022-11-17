import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import background from '../assets/bgs/background_v1.png';
import {BigText} from '../components/Texts/BigText';
import {SmallText} from '../components/Texts/SmallText';
import {RegularButton} from '../components/Buttons/RegularButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/RootStack';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <>
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={styles.textStyle}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={styles.textStyle}>
            Best payment method, connects your money to your friends, family.
          </SmallText>
          <RegularButton onPress={() => navigation.navigate('Home')}>Get started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    width: '70%',
    marginBottom: 25,
  },
});

export {Welcome};
