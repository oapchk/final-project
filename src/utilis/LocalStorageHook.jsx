import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Pobierz dane z Local Storage lub użyj initialValue, jeśli nie ma danych
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  // Stan przechowujący aktualną wartość
  const [value, setValue] = useState(storedValue);

  // Aktualizuj dane w Local Storage i ustaw nową wartość
  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
};

export default useLocalStorage;
