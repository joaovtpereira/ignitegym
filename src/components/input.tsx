import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GlueStackInput,
  InputField,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMensage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMensage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!errorMensage || isInvalid;
  return (
    <FormControl isInvalid={invalid} w={"$full"} marginBottom={"$4"}>
      <GlueStackInput
        h={"$14"}
        borderWidth={"$0"}
        borderRadius={"$md"}
        $focus={{
          borderWidth: 1,
          borderColor: "$green500",
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          bg={"$gray700"}
          px={"$4"}
          color="$white"
          fontFamily="$body"
          placeholderTextColor={"$gray300"}
          {...rest}
        />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMensage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
