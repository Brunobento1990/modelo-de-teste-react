import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { ITeclaDeAtalho } from "./types";
import { teclasDeAtalhosMock } from "./mock";

export function ConfiguracaoAtalho() {
  const [cliente, setCliente] = useState<ITeclaDeAtalho>();
  const [veiculo, setVeiculo] = useState<ITeclaDeAtalho>();

  function salvar() {
    if (!veiculo && !cliente) {
      return;
    }

    let newTeclaDeAtalho: ITeclaDeAtalho[] = [];

    if (cliente) {
      newTeclaDeAtalho.push({
        keydown: cliente.keydown,
        actionString: "Cliente",
      });
    }

    if (veiculo) {
      newTeclaDeAtalho.push({
        keydown: veiculo.keydown,
        actionString: "Veículo",
      });
    }

    localStorage.setItem(
      "teclas",
      JSON.stringify([...newTeclaDeAtalho, ...teclasDeAtalhosMock])
    );
  }

  return (
    <Box display="flex" gap={5}>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Cadastro de cliente
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cliente}
            label="Cadastro de cliente"
            onChange={(value) =>
              setCliente(
                teclasDeAtalhosMock.find(
                  (x) => x.keydown === value.target.value
                )
              )
            }
          >
            {teclasDeAtalhosMock.map((tecla) => (
              <MenuItem key={tecla.keydown} value={tecla.keydown}>
                {tecla.keydown}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Cadastro de veiculo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={veiculo}
            label="Cadastro de veiculo"
            onChange={(value) =>
              setVeiculo(
                teclasDeAtalhosMock.find(
                  (x) => x.keydown === value.target.value
                )
              )
            }
          >
            {teclasDeAtalhosMock.map((tecla) => (
              <MenuItem key={tecla.keydown} value={tecla.keydown}>
                {tecla.keydown}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={salvar}>
        salvar
      </Button>
    </Box>
  );
}
