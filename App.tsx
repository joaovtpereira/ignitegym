import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { config } from "./config/gluestack-ui.config"; //using config eject by gluestack
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { StatusBar, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={"transparent"}
        />
        {fontsLoaded ? <Text>Home</Text> : <View />}
      </View>
    </GluestackUIProvider>
  );
}
