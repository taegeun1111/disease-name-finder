import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { InputContext, InputContextObj } from './InputContext';

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState(-1);

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
    setSelected(-1);
  };

  const InputContextValue: InputContextObj = {
    inputValue,
    setInputValue,
    inputChangeHandler,
    debouncedValue,
    focused,
    setFocused,
    selected,
    setSelected,
  };

  return <InputContext.Provider value={InputContextValue}>{children}</InputContext.Provider>;
};
