import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

type FormDataProps = {
  name: string;
  password: string;
  email: string;
  confirm_password: string;
};

export function SignUp() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormDataProps>();

  function handleGoBackSignInScreen() {
    navigation.goBack();
  }

  function handleSignUp(data: FormDataProps) {
    console.log({ data });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={backgroundImg}
          alt="Pessoas treinando"
          w={"$full"}
          h={624}
          defaultSource={backgroundImg} //defini uma imagem padrão, para agilizar o carregamento da imagem
          position="absolute"
        />

        <VStack flex={1} px={"$10"} pb={"$16"}>
          <Center my={"$24"}>
            <Logo />

            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center gap={"$2"} flex={1}>
            <Heading color="$gray100">Cria sua conta</Heading>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Criar e acessar"
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Button
            title="Voltar para o login"
            variant={"outline"}
            mt={"$12"}
            onPress={handleGoBackSignInScreen}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
