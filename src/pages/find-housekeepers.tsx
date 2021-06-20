import React, { useState } from "react";
import { Text, View } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/Inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/Inputs/Button/Button";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const FindHousekeepers: React.FC = () => {
  const [cep, setCep] = useState("");

  return (
    <View>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <TextInputMask
        value={cep}
        onChangeText={setCep}
        type={"custom"}
        options={{ mask: "99.999-999" }}
        customTextInput={TextInput}
        customTextInputProps={{
          label: "Digite seu CEP",
        }}
      />

      <Button mode={"contained"} style={{ marginTop: 32 }}>
        Buscar
      </Button>

      <UserInformation
        name={"Maby Reis"}
        rating={3}
        picture={"https://github.com/MariaGabrielaReis.png"}
        description={"São José dos Campos"}
      />
    </View>
  );
};

export default FindHousekeepers;
