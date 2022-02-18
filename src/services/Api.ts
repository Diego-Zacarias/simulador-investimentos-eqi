import axios from "axios";
import * as T from "./ApiTypes";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const getIndicadores = async (): Promise<T.Indicadores[]> => {
  console.log(process.env.REACT_APP_BASE_URL);
  return await api.get("/indicadores").then((res) => res.data);
};

export const getSimulacao = async ({
  tipoIndexacao,
  tipoRendimento,
}: T.SimulacoesBusca): Promise<T.Simulacoes> => {
  return await api
    .get(
      `/simulacoes?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`
    )
    .then((res) => res.data[0]);
};

export default api;
