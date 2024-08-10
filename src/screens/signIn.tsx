import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigateRoutesProps } from "@routes/routes.auth";

export function SignIn() {
  const navigation = useNavigation<AuthNavigateRoutesProps>();

  function handleCreateAcount() {
    navigation.navigate("signUp");
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={backgroundImg}
          alt="Pessoas treinando"
          w={"$full"}
          h={624}
          defaultSource={backgroundImg} //defini uma imagem padrão, para agilizar o carregamento da imagem
          position="absolute"
        />

        <VStack flex={1} px={"$10"} pb={"$16"}>
          <Center my={"$24"}>
            <Logo />

            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center gap={"$2"}>
            <Heading color="$gray100">Acesse a conta</Heading>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt={"$4"}>
            <Text
              color="$gray100"
              fontSize={"$sm"}
              marginBottom={"$3"}
              fontFamily="$body"
            >
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant={"outline"}
              onPress={handleCreateAcount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
