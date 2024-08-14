import { ScreenHeader } from "@components/screenHeader";
import { UserPhoto } from "@components/userPhoto";
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center marginTop={"$6"} paddingHorizontal={"$10"}>
          <UserPhoto
            source={{
              uri: "https://github.com/joaovtpereira.png",
            }}
            alt="Imagem do usuário"
            size="xl"
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
