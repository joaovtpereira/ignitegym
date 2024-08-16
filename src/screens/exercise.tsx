import {
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Box,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuppNavigateRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import { Button } from "@components/button";

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 62 }}
      >
        <VStack padding={"$8"}>
          <Image
            source={{
              uri: "https://s2-oglobo.glbimg.com/WyvC_yuCqntB5JjnFP1cTdrVvpk=/0x0:1339x1181/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/0/j/2NMxiNQ7aFEpXwjk5aCA/exercicio004-copia.jpg",
            }}
            alt="Exercicio detalhado"
            marginBottom={"$3"}
            resizeMode="cover"
            rounded={"$lg"}
            w={"$full"}
            h={"$80"}
          />

          <Box
            bg="$gray600"
            rounded={"$md"}
            paddingBottom={"$4"}
            paddingHorizontal={"$4"}
          >
            <HStack
              alignItems="center"
              justifyContent="space-around"
              marginBottom={"$6"}
              marginTop={"$5"}
            >
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="$gray200" marginLeft={"$2"}>
                  3 séries
                </Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionSvg />
                <Text color="$gray200" marginLeft={"$2"}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
