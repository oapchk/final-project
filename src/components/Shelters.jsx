import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Shelters = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/7ae2a445-75b2-4ab6-8233-9246b0e168ec`)
      .then((res) => {
        setData(res.data.schroniska);
        setSearchData(res.data.schroniska);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchData);
    } else {
      const filterResult = searchData.filter(
        (item) =>
          item.nazwa.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.lokalizacja.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ nazwa: "Brak" }]);
      }
    }

    setFilterValue(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          mt: "150px",
          marginInline: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          id="search-bar"
          className="text"
          value={filterValue}
          onInput={(e) => {
            handleFilter(e);
          }}
          label="Wyszukaj..."
          variant="outlined"
          placeholder="Search..."
          sx={{ width: "40%", marginInline: "auto" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Paper sx={{ mt: "50px", width: "70%", marginInline: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nazwa</TableCell>
                <TableCell align="center">Adres</TableCell>
                <TableCell align="center">Telefon</TableCell>
                <TableCell align="center">Strona internetowa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((shelter, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {shelter.nazwa}
                  </TableCell>
                  <TableCell align="left">{shelter.lokalizacja}</TableCell>
                  <TableCell align="center">{shelter.telefon}</TableCell>
                  <TableCell align="center">
                    {shelter.strona || shelter.strona_internetowa ? (
                      <a
                        href={shelter.strona || shelter.strona_internetowa}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {shelter.strona || shelter.strona_internetowa}
                      </a>
                    ) : (
                      "Brak"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Shelters;
