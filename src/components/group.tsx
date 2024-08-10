import { Button, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Button> & {
  text: string;
  isActive: boolean;
};

export function Group({ text, isActive, ...rest }: Props) {
  return (
    <Button
      minWidth={"$24"}
      h={"$10"}
      backgroundColor="$gray600"
      rounded={"$md"}
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1,
        },
      }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize={"$xs"}
        fontFamily="$heading"
      >
        {text}
      </Text>
    </Button>
  );
}
