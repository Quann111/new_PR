import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import Notification from './Screens/Notification';
import Favourite from './Screens/Favourite'
import Cart from './Screens/Cart';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { render } from 'react-dom';
import { CartProvider } from './Screens/CartContext';
import Detail from './Screens/Detail';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        alignSelf: "center",
        height: 50,
        backgroundColor: '#fff'
      },
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () =>
          <AntDesign style={styles.iconTab} name="home" size={23} color="black" />
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: () =>
          <Ionicons style={styles.iconTab} name="ios-cart-outline" size={26} color="black" />

      }} />
      <Tab.Screen style={styles.iconHeart} name="Location" component={Favourite} options={{
        tabBarIcon: () =>
          <Feather name="map-pin" size={24} color="black" />
      }} />
      <Tab.Screen name="Notification" component={Notification} options={{
        tabBarIcon: () =>
          <EvilIcons style={styles.iconTab} name="bell" size={30} color="black" />
      }} />
    </Tab.Navigator>
  );
}





export default function App() {
  return (

    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTabs" component={MyTabs} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </CartProvider>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconTab: {
    opacity: 0.6
  }
});
