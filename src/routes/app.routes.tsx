import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Exercise } from "@screens/exercise";
import { History } from "@screens/history";
import { Home } from "@screens/home";
import { Profile } from "@screens/profile";

type AuthRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};

export type AuppNavigateRoutesProps = BottomTabNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
