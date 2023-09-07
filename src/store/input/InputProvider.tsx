import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { InputContext, InputContextObj } from './InputContext';

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [selected, setSelected] = useState(false);

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

  const InputContextValue: InputContextObj = {
    inputValue,
    inputChangeHandler,
    debouncedValue,
    selected,
    setSelected,
  };

  return <InputContext.Provider value={InputContextValue}>{children}</InputContext.Provider>;
};
