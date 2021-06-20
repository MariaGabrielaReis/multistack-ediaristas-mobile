import React from "react";
import { Text, View } from "react-native";
import Button from "ui/components/Inputs/Button/Button";
import { RootStackParamList } from "ui/router/Router";
import { StackNavigationProp } from "@react-navigation/stack";

type NativationProp = StackNavigationProp<RootStackParamList, "Index">;

interface IndexProps {
  navigation: NativationProp;
}

const Index: React.FC<IndexProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        mode={"contained"}
        onPress={() => navigation.navigate("FindHousekeepers")}
      >
        Encontrar Diarista
      </Button>
    </View>
  );
};

export default Index;
