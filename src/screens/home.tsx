import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [groups, setGroups] = useState(["costa", "triceps", "peito"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(group) => group}
        renderItem={({ item }) => (
          <Group
            text={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{
          marginVertical: 40,
          maxHeight: 44,
          minHeight: 44,
        }}
      />

      <VStack paddingHorizontal="$8">
        <HStack
          justifyContent="space-between"
          marginBottom={"$5"}
          alignItems="center"
        >
          <Heading color="$gray200" fontSize={"$md"} fontFamily="$heading">
            Exercícios
          </Heading>

          <Text color="$gray200" fontSize={"$sm"} fontFamily="$body">
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
