import React from 'react';
import {StyleSheet, StyleProp, TextStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: React.FC<GreetingProps> = props => {
  return (
    <StyledView>
      <RegularText textStyles={[styles.mainText, props.mainTextStyles]}>
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[styles.subText, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: colors.secondary,
    fontSize: 22,
  },
  subText: {
    color: colors.grayDark,
  },
});

export {Greeting};
