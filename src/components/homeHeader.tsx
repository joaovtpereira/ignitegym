import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./userPhoto";
import { LogOut } from "lucide-react-native";

type HomeHeaderProps = {
  userName: string;
};

export function HomeHeader({ userName }: HomeHeaderProps) {
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
          uri: "https://github.com/joaovtpereira.png",
        }}
        alt="Imagem do usuário"
        w={"$16"}
        h={"$16"}
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize={"$sm"}>
          Olá,
        </Text>
        <Heading color="$gray100" fontSize={"$md"}>
          {userName}
        </Heading>
      </VStack>

      <Icon as={LogOut} color={"$gray200"} size="xl" />
    </HStack>
  );
}
