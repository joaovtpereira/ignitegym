import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { config } from "./config/gluestack-ui.config"; //using config eject by gluestack
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { StatusBar, View } from "react-native";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/signIn";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
