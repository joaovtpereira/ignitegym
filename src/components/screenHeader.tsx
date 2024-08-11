import { Center, Heading } from "@gluestack-ui/themed";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg={"$gray600"} paddingTop={"$16"} paddingBottom={"$6"}>
      <Heading color="$gray100" fontFamily="$heading" fontSize={"$xl"}>
        {title}
      </Heading>
    </Center>
  );
}
