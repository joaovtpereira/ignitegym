import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./userPhoto";

export function HomeHeader() {
  return (
    <HStack
      backgroundColor="$gray600"
      paddingTop={"$16"}
      paddingBottom={"$5"}
      paddingHorizontal={"$8"}
      alignItems="center"
      gap={"$4"}
    >
      <UserPhoto
        source={{
          uri: "https://avatars.githubusercontent.com/u/54077296?v=4&size=64",
        }}
        alt="Imagem do usuário"
        w={"$16"}
        h={"$16"}
      />
      <VStack>
        <Text color="$gray100" fontSize={"$sm"}>
          Olá,
        </Text>
        <Heading color="$gray100" fontSize={"$md"}>
          João Vitor
        </Heading>
      </VStack>
    </HStack>
  );
}
