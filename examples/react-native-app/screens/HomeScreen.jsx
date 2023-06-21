import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CharacterScreen, PushNotificationScreen, ProfileScreen } from "./";

const Tab = createBottomTabNavigator();

const routes = {
  Profile: {
    active: "account",
    inactive: "account-outline",
  },
  PushNotification: {
    active: "message-badge",
    inactive: "message-badge-outline",
  },
  Characters: {
    active: "view-list",
    inactive: "view-list-outline",
  },
};

export default function ({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const current = routes[route.name];
          const iconName = focused ? current.active : current.inactive;

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "pink",
        tabBarlabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="PushNotification"
        component={PushNotificationScreen}
        options={{
          tabBarLabel: "Push Notifications",
        }}
      />
      <Tab.Screen name="Characters" component={CharacterScreen} />
    </Tab.Navigator>
  );
}
