import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Latest from "./pages/Latest";
import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import Recommended from "./pages/Recommended";

const Tab = createBottomTabNavigator();

const hidden = {
  tabBarButton: () => null,
  tabBarItemStyle: { display: "none" },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }} edges={["left", "right"]}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerTitle: "Browse Movies",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#0f172a" },
              headerTintColor: "#ffffff",
              tabBarLabelPosition: "below-icon",
              tabBarStyle: {
                backgroundColor: "#1b1371",
                borderTopWidth: 0,
                height: 70,
                paddingTop: 8,
                paddingBottom: 8,
              },
              tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
              tabBarActiveTintColor: "#ffffff",
              tabBarInactiveTintColor: "#bfdbfe",
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}
            />
            <Tab.Screen
              name="Movies"
              component={Movies}
              options={{ tabBarIcon: ({ color, size }) => <Ionicons name="film" size={size} color={color} /> }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }}
            />

            <Tab.Screen name="Latest" component={Latest} options={hidden} />
            <Tab.Screen name="TopRated" component={TopRated} options={hidden} />
            <Tab.Screen name="Popular" component={Popular} options={hidden} />
            <Tab.Screen name="Recommended" component={Recommended} options={hidden} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}