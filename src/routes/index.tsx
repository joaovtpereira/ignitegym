import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./routes.auth";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
