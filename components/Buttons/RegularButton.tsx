import React, {ReactNode} from 'react';
import {
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface RegularButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: React.FC<RegularButtonProps> = props => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export {RegularButton};
