import { ExerciseCard } from "@components/exerciseCard";
import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AuppNavigateRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const { user } = useAuth();
  const navigation = useNavigation<AuppNavigateRoutesProps>();

  const [groups, setGroups] = useState(["costa", "triceps", "peito"]);
  const [exercises, setExercises] = useState([
    "Puxada Frontal",
    "Remada",
    "Levantamento frontal",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  function handleExercise() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader userName={user.name} userAvatar={user.avatar} />

      <FlatList
        data={groups}
        keyExtractor={(group) => group}
        renderItem={({ item }) => (
          <Group
            text={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
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

      <VStack flex={1} paddingHorizontal="$8">
        <HStack
          justifyContent="space-between"
          marginBottom={"$5"}
          alignItems="center"
        >
          <Heading color="$gray200" fontSize={"$md"} fontFamily="$heading">
            Exercícios
          </Heading>

          <Text color="$gray200" fontSize={"$sm"} fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(exercises) => exercises}
          renderItem={({ item }) => <ExerciseCard onPress={handleExercise} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
