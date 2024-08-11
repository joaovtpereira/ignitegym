import { HistoryCard } from "@components/historyCard";
import { ScreenHeader } from "@components/screenHeader";
import { VStack } from "@gluestack-ui/themed";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <HistoryCard />
    </VStack>
  );
}
