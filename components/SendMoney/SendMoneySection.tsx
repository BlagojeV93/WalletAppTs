import React, {useRef} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {RegularText} from '../Texts/RegularText';
import {SmallText} from '../Texts/SmallText';
import {SendMoneyItem} from './SendMoneyItem';
import {SendMoneySectionProps} from './types';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: React.FC<SendMoneySectionProps> = props => {
  const sheetRef = useRef<BottomSheetBehavior>(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={styles.row}>
          <RegularText textStyles={styles.title}>Send money to</RegularText>
          <TextButton>
            <SmallText textStyles={styles.addText}>+Add</SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={styles.list}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };
  return (
    <BottomSheetBehavior
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 25,
  },
  title: {
    fontSize: 19,
    color: colors.secondary,
  },
  addText: {
    fontWeight: 'bold',
    color: colors.teritarry,
  },
  list: {
    alignItems: 'flex-start',
  },
});

export {SendMoneySection};
