import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react';

interface returnTypes {
  inputValue: string;
  inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
}

export const useDebounceInput = (): returnTypes => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const inputSearch = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(inputSearch);
    };
  }, [inputValue]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return { inputValue, inputChangeHandler, debouncedValue };
};
