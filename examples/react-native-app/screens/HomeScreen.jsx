import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CharacterScreen, PushNotificationScreen, ProfileScreen } from "./";

const Tab = createBottomTabNavigator();

export default function ({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PushNotification"
        component={PushNotificationScreen}
        options={{
          tabBarLabel: "Push Notifications",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-badge"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Characters"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
