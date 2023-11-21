import PropTypes from "prop-types";

import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
import useLocalStorage from "../../utilis/LocalStorageHook";

const SurveyQuestion = ({ question, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage(
    `${question}`,
    ""
  );

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    setSelectedOption(optionValue);
    onSubmit(optionValue);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={8} sm={6}>
        <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
          {question}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          select
          label="Wybierz z listy"
          value={selectedOption}
          onChange={handleOptionChange}
          fullWidth
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};
SurveyQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const Survey = () => {
  const questions = [
    {
      id: 1,
      question: "Jakie zwierzę chcesz adoptować",
      options: ["Pies", "Kot", "Szop", "Królik", "Jeż", "Inne"],
    },
    {
      id: 2,
      question: "Mój dom",
      options: ["ma podwórko", " ma ogrodzone podwórko", "nie ma podwórka"],
    },
    {
      id: 3,
      question: "Aktualnie",
      options: ["nie mam zwierząt", " mam zwierzę"],
    },
    {
      id: 4,
      question: "Preferowany wiek zwierzaka",
      options: ["kocię/szczenię", "dorosły", "senior", "nie mam preferencji"],
    },
    {
      id: 5,
      question: "Preferowana płeć",
      options: ["samiec", "samica", "nie mam preferencji"],
    },
    {
      id: 6,
      question: "Preferowana wielkość",
      options: ["mały", "średni", "duży", "nie mam preferencji"],
    },
  ];

  const handleQuestionSubmit = (selectedOption, questionId) => {
    console.log(`Question ${questionId} - Selected Option:`, selectedOption);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {questions.map((q) => (
          <Grid item xs={8} key={q.id} sx={{ marginLeft: "100px" }}>
            <SurveyQuestion
              question={q.question}
              options={q.options}
              onSubmit={(option) => handleQuestionSubmit(option, q.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Survey;
