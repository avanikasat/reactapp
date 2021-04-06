import * as React from 'react';
import { View,Text, Button } from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


function getHeaderTitle(route) {
  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

  switch (routeName) {
    case 'HomeScreen':
     return 'home screen';
    case 'Feed1':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
     }}>
      <Text>Home Screen</Text>

      <Button 
        title ="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen() {
 return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Welcome To Settings!!!!</Text>
   </View>
   );
}

const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Settings" component={FeedScreen1} />
      {/* other screens */}
    </FeedStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen1} />
      {/* other screens */}
    </ProfileStack.Navigator>
  );
}
function FeedScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function ProfileScreen1() {
 return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>My Details!{'\n'}{'\n'}Name: AVANI KASAT{'\n'}Regno:19bce1058</Text>
   </View>
   );
}

function AccountScreen1() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Welcome To Accounts Page!!!!</Text>
   </View>
   );
}

function SettingsScreen1() {
  return <View />;
}
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed1') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Profile1') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if(route.name=='Account1'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'red',
        }}
    >

     
       <Tab.Screen name="Feed1" component={FeedScreen1} />
      <Tab.Screen name="Profile1" component={ProfileScreen1} />
      <Tab.Screen name="Account1" component={AccountScreen1} />
    </Tab.Navigator>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} 
        options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
          />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}