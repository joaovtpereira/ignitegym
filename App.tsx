import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { StatusBar, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider>
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
