import { Button } from "@components/button";
import { Input } from "@components/input";
import { ScreenHeader } from "@components/screenHeader";
import { UserPhoto } from "@components/userPhoto";
import { Center, Heading, Text, VStack, useToast } from "@gluestack-ui/themed";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { useState } from "react";
import { ToastMessage } from "@components/toastMensage";

export function Profile() {
  const toast = useToast();

  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/joaovtpereira.png"
  );
  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoUri = photoSelected.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                id={id}
                action="error"
                title="Essa imagem é muito grande"
                description="Escolha uma de até 5mb."
                onClose={() => toast.close(id)}
              />
            ),
          });
        }
        setUserPhoto(photoUri);
      }
    } catch (error) {
      Alert.alert("Erro ao selecionar imagem");
      console.log({ error });
    }
  }
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center marginTop={"$6"} paddingHorizontal={"$10"}>
          <UserPhoto
            source={{
              uri: userPhoto,
            }}
            alt="Imagem do usuário"
            size="xl"
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize={"$md"}
            marginTop={"$12"}
            marginBottom={"$2"}
          >
            Alterar senha
          </Heading>

          <Center width={"$full"} gap={"$4"}>
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirmar a nova senha"
              bg="$gray600"
              secureTextEntry
            />

            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
