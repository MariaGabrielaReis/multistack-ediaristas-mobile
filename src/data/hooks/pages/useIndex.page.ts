import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/validationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValid = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [housekeeper, setHousekeeper] = useState([] as UserShortInterface[]),
    [housekeeperRemaining, setHousekeeperRemaining] = useState(0);

  async function searchPro(cep: string) {
    setSearchDone(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/city-housekeepers?cep=" + cep.replace(/\D/g, ""));

      setHousekeeper(data.diaristas);
      setHousekeeperRemaining(data.quantidade_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      setError("CEP não encontrado");
      setLoading(false);
    }
  }
  return {
    cep,
    setCep,
    cepValid,
    searchPro,
    error,
    housekeeper,
    searchDone,
    loading,
    housekeeperRemaining,
  };
}
