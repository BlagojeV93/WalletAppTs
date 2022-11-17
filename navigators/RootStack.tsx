import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../screens/Welcome';
import {Home} from '../screens/Home';
import {Balance} from '../screens/Balance';
import {StyleSheet, View} from 'react-native';
import {colors} from '../components/colors';
import {Profile} from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.png';
import {Greeting} from '../components/Header/Greeting';
import {CardProps} from '../components/Cards/types';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: colors.secondary,
          headerShadowVisible: false,
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{backgroundColor: colors.teritarry}}
            />
          ),
        }}
        initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Greeting
                mainText="Hey Coby!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen name="Balance" component={Balance} options={({ route }) => ({
          headerTitle: route.params?.alias,
          headerTitleAlign: 'center',
          headerBackImage: () => (
            <View style={styles.backImage} />
          ),
          headerLeftContainer: styles.headerLeftStyle
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.grayLight,
  },
  backImage: {
    width: 25 ,
    height: 25,
    borderRadius: 10,
    backgroundColor: colors.secondary
  },
  headerLeftStyle: {
    paddingLeft: 0
  }
});

export {RootStack};
