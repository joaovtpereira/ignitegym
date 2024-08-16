import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

type Props = {};

export function HistoryCard({}: Props) {
  return (
    <HStack
      w={"$full"}
      bg={"$gray600"}
      paddingHorizontal={"$5"}
      paddingVertical={"$4"}
      marginBottom={"$3"}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack flex={1} marginRight={"$5"}>
        <Heading
          color="$white"
          fontFamily="$heading"
          fontSize={"$md"}
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="$gray100" fontSize={"$lg"} numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="$gray300" fontSize={"$md"}>
        08:56
      </Text>
    </HStack>
  );
}
