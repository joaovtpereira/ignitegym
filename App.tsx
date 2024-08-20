import { Loading } from "@components/loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import { config } from "./config/gluestack-ui.config"; //using config eject by gluestack
import { Routes } from "@routes/index";
import { AuthContext } from "@contexts/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <AuthContext.Provider
        value={{
          user: {
            name: "Joao",
            id: "1",
            email: "joao@gmail.com",
            avatar: "https://github.com/joaovtpereira.png",
          },
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </GluestackUIProvider>
  );
}
