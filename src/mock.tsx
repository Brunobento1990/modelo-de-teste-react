import { Box, TextField } from "@mui/material";
import { useModalChildren } from "./modal";
import { ITeclaDeAtalho, mapActionTeclaDeAtalho } from "./types";

export const mockTable = [
  {
    id: 1,
    descricao: "pessoa 1",
  },
  {
    id: 2,
    descricao: "pessoa 2",
  },
  {
    id: 3,
    descricao: "pessoa 3",
  },
];

export const teclasDeAtalhosMock: ITeclaDeAtalho[] = [
  {
    actionString: "Cliente",
    keydown: "F1",
  },
  {
    actionString: "Veículo",
    keydown: "F2",
  },
];

export const actionsTeclasDeAtalho: mapActionTeclaDeAtalho = new Map([
  [
    "Cliente",
    () => {
      const { show, close } = useModalChildren();
      show({
        children: (
          <Box width='100%' display='flex' gap={5}>
            <TextField label='Cpf' />
            <TextField label='Nome' />
          </Box>
        ),
        confirmed: () => close(),
      });
    },
  ],
  [
    "Veículo",
    () => {
      const { show, close } = useModalChildren();
      show({
        children: (
          <Box width='100%' display='flex' gap={5}>
            <TextField label='Placa' />
            <TextField label='Chassi' />
          </Box>
        ),
        confirmed: () => close(),
      });
    },
  ],
]);
