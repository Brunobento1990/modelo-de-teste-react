import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableContainer,
  TextField,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { mockTable } from "./mock";
import { useState } from "react";

export function TableApp() {  
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        gap={5}
        height="80px"
      >
        <Button className="novo-registro" variant="contained">
          Adicionar
        </Button>
        <TextField fullWidth label="Pesquisar" className="pesquisa" />
        <Button variant="contained" className="pesquisar">
          Pesquisar
        </Button>
      </Box>
      <Box>
        <TableContainer component={Paper} className="tabela">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockTable.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.descricao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box display="flex" marginTop="30px" justifyContent="space-between">
        <Box
          sx={{ minWidth: 220 }}
          className="item-por-pagina"
          id="item-por-pagina"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Itens por página
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Pagination className="paginacao" count={10} />
      </Box>
    </Box>
  );
}
