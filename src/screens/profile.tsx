import { Input } from "@components/input";
import { ScreenHeader } from "@components/screenHeader";
import { UserPhoto } from "@components/userPhoto";
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";

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

          <TouchableOpacity>
            <Text
              fontFamily="$heading"
              color="$green500"
              fontSize={"$md"}
              marginTop={"$4"}
              marginBottom={"$8"}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Center width={"$full"} gap={"$4"}>
            <Input placeholder="Nome" bg="$gray600" />
            <Input
              value="joaovitorpessoal2@gmail.com"
              bg="$gray600"
              isReadOnly
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
