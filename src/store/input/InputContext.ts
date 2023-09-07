import React, { ChangeEvent, SetStateAction } from 'react';

export type InputContextObj = {
  inputValue: string;
  inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  selected: boolean;
  setSelected: React.Dispatch<SetStateAction<boolean>>;
};

export const InputContext = React.createContext<InputContextObj>({
  inputValue: '',
  inputChangeHandler: () => {},
  debouncedValue: '',
  selected: false,
  setSelected: () => {},
});
