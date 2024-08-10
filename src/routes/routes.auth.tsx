import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/signIn";
import { SignUp } from "@screens/signUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
