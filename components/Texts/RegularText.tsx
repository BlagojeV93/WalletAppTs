import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {TextProps} from './types';

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Bold;
`;

const RegularText: React.FC<TextProps> = props => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export {RegularText};
