import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./routes.auth";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/authContext";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { user } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  return (
    <Box flex={1} backgroundColor="$gray700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
