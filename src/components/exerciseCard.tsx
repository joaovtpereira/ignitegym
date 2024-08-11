import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ChevronRight, ChevronRightIcon } from "lucide-react-native";
import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

type Props = ComponentProps<typeof TouchableOpacity> & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        backgroundColor="$gray500"
        alignItems="center"
        padding={"$2"}
        paddingRight={"$4"}
        rounded={"$md"}
        marginBottom={"$3"}
      >
        <Image
          source={{
            uri: "https://s2-oglobo.glbimg.com/WyvC_yuCqntB5JjnFP1cTdrVvpk=/0x0:1339x1181/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/0/j/2NMxiNQ7aFEpXwjk5aCA/exercicio004-copia.jpg",
          }}
          alt="Imagem de exercicio"
          w={"$16"}
          h={"$16"}
          rounded={"$md"}
          marginRight={"$4"}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize={"$lg"} color="$white" fontFamily="$heading">
            Puxada frontal
          </Heading>
          <Text
            fontSize={"$sm"}
            color="$gray200"
            marginTop={"$1"}
            numberOfLines={2}
          >
            Exercicio teste
          </Text>
        </VStack>

        <Icon as={ChevronRight} color={"$gray300"} />
      </HStack>
    </TouchableOpacity>
  );
}
