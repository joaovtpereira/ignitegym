import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [groups, setGroups] = useState(["costa", "triceps", "peito"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
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
      </HStack>
    </VStack>
  );
}
