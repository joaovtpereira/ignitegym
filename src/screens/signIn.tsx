import { Image, VStack } from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";

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
    </VStack>
  );
}
