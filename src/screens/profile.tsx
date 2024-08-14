import { ScreenHeader } from "@components/screenHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
    </VStack>
  );
}
