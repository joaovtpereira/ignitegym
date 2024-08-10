import { Center, Image, Text, VStack } from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

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

      <Center my={"$24"}>
        <Logo />

        <Text color="$gray100" fontSize={"$sm"}>
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  );
}
