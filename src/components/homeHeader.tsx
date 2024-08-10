import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HomeHeader() {
  return (
    <HStack
      backgroundColor="$gray600"
      paddingTop={"$16"}
      paddingBottom={"$5"}
      paddingHorizontal={"$8"}
      alignItems="center"
    >
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
