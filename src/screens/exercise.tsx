import {
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuppNavigateRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import BodySvg from "@assets/body.svg";

export function Exercise() {
  const navigation = useNavigation<AuppNavigateRoutesProps>();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1}>
      <VStack px={"$8"} bg={"$gray600"} pt={"$12"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          marginTop={"$4"}
          marginBottom={"$8"}
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize={"$lg"}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" marginLeft={"$1"} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
