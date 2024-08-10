import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";

export function SignIn() {
  return (
    <VStack flex={1} bg={"$gray700"}>
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
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </Center>
      </VStack>
    </VStack>
  );
}
