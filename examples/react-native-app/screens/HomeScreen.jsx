import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Uno = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const Dos = () => {
  return (
    <View>
      <Text>dos</Text>
    </View>
  );
};

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="profile"
        component={Uno}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="other" component={Dos} />
    </Tab.Navigator>
  );
}
