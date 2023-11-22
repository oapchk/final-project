import PropTypes from "prop-types";
import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
// import useLocalStorage from "../../utilis/LocalStorageHook";
import { useState } from "react";

const SurveyQuestion = ({ question, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    const storedValue = localStorage.getItem(`${question}`);
    return storedValue || "";
  });

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    setSelectedOption(optionValue);
    // localStorage.setItem(`${question}`, optionValue);
    onChange(optionValue);
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
  onChange: PropTypes.func.isRequired,
};

const ThirdStep = () => {
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

  const handleQuestionChange = (selectedOption, questionId) => {
    localStorage.setItem(`question_${questionId}`, selectedOption);
    // console.log(`Question ${questionId} - Selected Option:`, selectedOption);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {questions.map((q) => (
          <Grid item xs={8} key={q.id} sx={{ marginLeft: "100px" }}>
            <SurveyQuestion
              question={q.question}
              options={q.options}
              onChange={(option) => handleQuestionChange(option, q.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThirdStep;
