import { useEffect, useState } from "react";

import { getIndicadores, getSimulacao } from "../../services/Api";
import { format } from '../../utils/format';

import * as S from "./styles";

import SelectButton from "../../components/SelectButton";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CardGrid from "../../components/CardGrid";

const indexadores = ["PRE", "POS", "FIXADA"];
const rendimentos = ["Bruto", "Liquido"];

const Home = (): JSX.Element => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [form, setForm] = useState({
    rendimento: "Bruto",
    indexacao: "PRE",
    aportInicial: "",
    prazo: "",
    ipca: "",
    aporteMensal: "",
    rentabilidade: "",
    cdi: "",
  });
  const [list, setList] = useState([
    { title: "Valor Final Bruto", value: "R$ 0,00", success: false },
    { title: "Alíquota do IR", value: "0%", success: false },
    { title: "Valor Pago em IR", value: "R$ 0,00", success: false },
    { title: "Valor Final Líquido", value: "R$ 0,00", success: true },
    { title: "Valor Total Investido", value: "R$ 0,00", success: false },
    { title: "Ganho Líquido", value: "R$ 0,00", success: true },
  ]);

  useEffect(() => {
    try {
      getIndicadores().then((res) =>
        setForm({
          ...form,
          [res[0].nome]: res[0].valor,
          [res[1].nome]: res[1].valor,
        })
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleChange = (event: any): void => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (filledFields()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleSelect = (event: any) => {
    setForm({ ...form, [event.target.id]: event.target.innerText });
  };

  const handleClearButton = (): void => {
    setForm({
      ...form,
      aportInicial: "",
      prazo: "",
      aporteMensal: "",
      rentabilidade: "",
    });
    setShowResults(false);
    setDisableButton(true);
  };

  const handleSimulateButton = (e: any): void => {
    e.preventDefault();
    const index = form.indexacao.toLowerCase();
    const rend = form.rendimento.toLowerCase();
    try{
      getSimulacao({tipoIndexacao: index, tipoRendimento: rend})
        .then((res) => {
          setList([
            {...list[0],value: format(res.valorFinalBruto)},
            {...list[1],value: format(res.aliquotaIR)},
            {...list[2],value: format(res.valorPagoIR)},
            {...list[3],value: format(res.valorFinalLiquido)},
            {...list[4],value: format(res.valorTotalInvestido)},
            {...list[5],value: format(res.ganhoLiquido)},

          ])
          console.log(list);
          setShowResults(true)});
    } catch (err) {console.error(err)}
  };

  const filledFields = (): boolean => {
    return (
      form.aportInicial !== "" &&
      form.prazo !== "" &&
      form.ipca !== "" &&
      form.aporteMensal !== "" &&
      form.rentabilidade !== "" &&
      form.cdi !== ""
    );
  };
  return (
    <S.Root>
      <h1>Simulador de Investimentos</h1>
      <S.Container>
        <S.Form onSubmit={handleSimulateButton}>
          <h2>Simulador</h2>

          {/* Selects */}
          <SelectButton
            title="Rendimento"
            options={rendimentos}
            handleSelect={handleSelect}
            id="rendimento"
            selected={form.rendimento}
          />
          <SelectButton
            title="Tipo de indexação"
            options={indexadores}
            handleSelect={handleSelect}
            id="indexacao"
            selected={form.indexacao}
          />

          {/* Inputs */}
          <Input
            name="aportInicial"
            handleChange={handleChange}
            title="Aporte Inicial"
            alt="Aporte Inicial"
            value={form.aportInicial}
            maskType="coin"
          />
          <Input
            name="aporteMensal"
            handleChange={handleChange}
            title="Aporte Mensal"
            alt="Aporte Mensal"
            value={form.aporteMensal}
            maskType="coin"
          />
          <Input
            name="prazo"
            handleChange={handleChange}
            title="Prazo (em meses)"
            alt="Prazo (em meses)"
            value={form.prazo}
            maskType="integer"
          />
          <Input
            name="rentabilidade"
            handleChange={handleChange}
            title="Rentabilidade"
            alt="Rentabilidade"
            value={form.rentabilidade}
            maskType="percent"
          />
          <Input
            name="ipca"
            handleChange={handleChange}
            title="IPCA (ao ano)"
            alt="IPCA (ao ano)"
            value={form.ipca}
            maskType="percent"
          />
          <Input
            name="cdi"
            handleChange={handleChange}
            title="CDI (ao ano)"
            alt="CDI (ao ano)"
            value={form.cdi}
            maskType="percent"
          />

          {/* Buttons */}
          <Button type="button" variant="outlined" handleClick={handleClearButton}>
            <p>Limpar Campos</p>
          </Button>
          <Button
            type="submit"
            variant="default"
            disabled={disableButton}
          >
            <p>Simular</p>
          </Button>
        </S.Form>
        {showResults && (
          <S.Results>
            <h2>Resultado da Simulação</h2>
            <CardGrid cardList={list} />
          </S.Results>
        )}
      </S.Container>
    </S.Root>
  );
};

export default Home;
