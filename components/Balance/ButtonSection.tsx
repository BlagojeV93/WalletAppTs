import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {RegularButton} from '../Buttons/RegularButton';

interface ButtonSectionProps {}

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: React.FC<ButtonSectionProps> = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={styles.button} onPress={() => {}}>
        Cancel
      </RegularButton>
    </ButtonSectionBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
  },
});

export {ButtonSection};
