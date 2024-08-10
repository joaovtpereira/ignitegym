import { Loading } from "@components/loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { SignIn } from "@screens/signIn";
import { StatusBar } from "react-native";
import { config } from "./config/gluestack-ui.config"; //using config eject by gluestack

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
