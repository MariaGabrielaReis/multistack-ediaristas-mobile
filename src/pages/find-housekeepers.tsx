import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useTheme } from "@emotion/react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/Inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/Inputs/Button/Button";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import {
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer,
} from "@styles/pages/find-housekeepers.style";
import useIndex from "data/hooks/pages/useIndex.page";
import useFindHousekeepers from "data/hooks/pages/useFindHousekeeperspage.mobile";

const FindHousekeepers: React.FC = () => {
  const { colors } = useTheme();
  const {
      cep,
      setCep,
      cepValid,
      searchPro,
      error,
      housekeeper,
      searchDone,
      loading,
      housekeeperRemaining,
    } = useIndex(),
    { cepAutomatico } = useFindHousekeepers();

  useEffect(() => {
    if (cepAutomatico && !cep) {
      setCep(cepAutomatico);
      searchPro(cepAutomatico);
    }
  }, [cepAutomatico]);

  return (
    <ScrollView>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <FormContainer>
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

        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          mode={"contained"}
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepValid || loading}
          onPress={() => searchPro(cep)}
          loading={loading}
        >
          Buscar
        </Button>
      </FormContainer>

      {searchDone &&
        (housekeeper.length > 0 ? (
          <ResponseContainer>
            {housekeeper.map((item, index) => (
              <UserInformation
                name={item.nome_completo}
                rating={item.reputacao || 0}
                picture={item.foto || ""}
                description={item.cidade}
                darker={index % 2 === 1}
              />
            ))}

            {housekeeperRemaining > 0 && (
              <TextContainer>
                ...e mais {housekeeperRemaining}{" "}
                {housekeeperRemaining > 1
                  ? "profissionais atendem"
                  : "profissional atende"}{" "}
                ao seu endereço
              </TextContainer>
            )}

            <Button mode={"contained"} color={colors.accent}>
              Contratar um profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhum profissional disponível na sua região
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default FindHousekeepers;
