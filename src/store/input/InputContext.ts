import React, { ChangeEvent, SetStateAction } from 'react';

export type InputContextObj = {
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
  inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  focused: boolean;
  setFocused: React.Dispatch<SetStateAction<boolean>>;
  selected: number;
  setSelected: React.Dispatch<SetStateAction<number>>;
};

export const InputContext = React.createContext<InputContextObj>({
  inputValue: '',
  setInputValue: () => {},
  inputChangeHandler: () => {},
  debouncedValue: '',
  focused: false,
  setFocused: () => {},
  selected: -1,
  setSelected: () => {},
});
