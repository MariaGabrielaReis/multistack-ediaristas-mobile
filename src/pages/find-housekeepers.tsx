import React from "react";
import { Text, View } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

const FindHousekeepers: React.FC = () => {
  return (
    <View>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
    </View>
  );
};

export default FindHousekeepers;
