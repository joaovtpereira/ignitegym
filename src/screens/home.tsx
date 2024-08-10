import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa");
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          text="costa"
          isActive={groupSelected === "costa"}
          onPress={() => setGroupSelected("costa")}
        />
        <Group
          text="triceps"
          isActive={groupSelected === "triceps"}
          onPress={() => setGroupSelected("triceps")}
        />
        <Group
          text="peito"
          isActive={groupSelected === "peito"}
          onPress={() => setGroupSelected("peito")}
        />
      </HStack>
    </VStack>
  );
}
