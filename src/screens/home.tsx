import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group text="Costas" isActive={false} />
    </VStack>
  );
}
