import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./userPhoto";
import { LogOut } from "lucide-react-native";
import defaultUserPhoto from "@assets/userPhotoDefault.png";
import { useAuth } from "@hooks/useAuth";
import { TouchableOpacity } from "react-native";

type HomeHeaderProps = {
  userName: string;
  userAvatar: string;
};

export function HomeHeader({ userName, userAvatar }: HomeHeaderProps) {
  const { signOut } = useAuth();

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
        source={
          userAvatar
            ? {
                uri: userAvatar,
              }
            : defaultUserPhoto
        }
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

      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color={"$gray200"} size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
